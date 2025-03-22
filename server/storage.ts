import {
  users,
  type User,
  type InsertUser,
  blogPosts,
  type BlogPost,
  type InsertBlogPost,
  contactSubmissions,
  type ContactSubmission,
  type InsertContactSubmission,
  newsletterSubscriptions,
  type NewsletterSubscription,
  type InsertNewsletterSubscription
} from "@shared/schema";

// Modify the interface with any CRUD methods you might need
export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Blog Posts
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostById(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getRecentBlogPosts(limit?: number): Promise<BlogPost[]>;
  getRelatedBlogPosts(postId: number, limit?: number): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  // Contact Submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Newsletter Subscriptions
  subscribeToNewsletter(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  unsubscribeFromNewsletter(email: string): Promise<boolean>;
  getNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
}

export class MemStorage implements IStorage {
  private userStore: Map<number, User>;
  private blogPostStore: Map<number, BlogPost>;
  private contactSubmissionStore: Map<number, ContactSubmission>;
  private newsletterSubscriptionStore: Map<number, NewsletterSubscription>;
  
  private currentUserId: number;
  private currentBlogPostId: number;
  private currentContactSubmissionId: number;
  private currentNewsletterSubscriptionId: number;

  constructor() {
    this.userStore = new Map();
    this.blogPostStore = new Map();
    this.contactSubmissionStore = new Map();
    this.newsletterSubscriptionStore = new Map();
    
    this.currentUserId = 1;
    this.currentBlogPostId = 1;
    this.currentContactSubmissionId = 1;
    this.currentNewsletterSubscriptionId = 1;
    
    // Initialize with sample blog data
    this.initializeSampleData();
  }

  // Users
  async getUser(id: number): Promise<User | undefined> {
    return this.userStore.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.userStore.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.userStore.set(id, user);
    return user;
  }
  
  // Blog Posts
  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPostStore.values()).sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }
  
  async getBlogPostById(id: number): Promise<BlogPost | undefined> {
    return this.blogPostStore.get(id);
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPostStore.values()).find(
      (post) => post.slug === slug,
    );
  }
  
  async getRecentBlogPosts(limit: number = 3): Promise<BlogPost[]> {
    return Array.from(this.blogPostStore.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit);
  }
  
  async getRelatedBlogPosts(postId: number, limit: number = 3): Promise<BlogPost[]> {
    const post = this.blogPostStore.get(postId);
    if (!post) return [];
    
    return Array.from(this.blogPostStore.values())
      .filter(p => p.id !== postId && p.category === post.category)
      .sort(() => Math.random() - 0.5) // Shuffle for random selection
      .slice(0, limit);
  }
  
  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const now = new Date();
    const post: BlogPost = {
      ...insertPost,
      id,
      createdAt: now,
      updatedAt: now,
    };
    this.blogPostStore.set(id, post);
    return post;
  }
  
  // Contact Submissions
  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactSubmissionId++;
    const now = new Date();
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      createdAt: now,
    };
    this.contactSubmissionStore.set(id, submission);
    return submission;
  }
  
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissionStore.values()).sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }
  
  // Newsletter Subscriptions
  async subscribeToNewsletter(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    // Check if email already exists
    const existingSubscription = Array.from(this.newsletterSubscriptionStore.values()).find(
      (sub) => sub.email === insertSubscription.email,
    );
    
    if (existingSubscription) {
      // If found but inactive, reactivate it
      if (!existingSubscription.active) {
        existingSubscription.active = true;
        this.newsletterSubscriptionStore.set(existingSubscription.id, existingSubscription);
      }
      return existingSubscription;
    }
    
    // Create new subscription
    const id = this.currentNewsletterSubscriptionId++;
    const now = new Date();
    const subscription: NewsletterSubscription = {
      ...insertSubscription,
      id,
      active: true,
      createdAt: now,
    };
    this.newsletterSubscriptionStore.set(id, subscription);
    return subscription;
  }
  
  async unsubscribeFromNewsletter(email: string): Promise<boolean> {
    const subscription = Array.from(this.newsletterSubscriptionStore.values()).find(
      (sub) => sub.email === email,
    );
    
    if (subscription) {
      subscription.active = false;
      this.newsletterSubscriptionStore.set(subscription.id, subscription);
      return true;
    }
    
    return false;
  }
  
  async getNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptionStore.values())
      .filter(sub => sub.active)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  
  // Initialize sample data for development/demo
  private initializeSampleData() {
    // Sample admin user
    const adminUser: User = {
      id: this.currentUserId++,
      username: 'admin',
      password: 'hashed_password', // In a real app, this would be properly hashed
    };
    this.userStore.set(adminUser.id, adminUser);
    
    // Sample blog posts
    const samplePosts = [
      {
        title: "Top Web Development Trends to Watch in 2023",
        slug: "web-development-trends-2023",
        excerpt: "Discover the latest trends and technologies that are shaping the future of web development.",
        content: `<p>The world of web development is constantly evolving, with new technologies and approaches emerging regularly. In 2023, several key trends are shaping how websites and web applications are built.</p>
        <h2>1. Progressive Web Apps (PWAs)</h2>
        <p>PWAs continue to gain traction as they offer the best of both worlds: the reach of websites and the functionality of native apps. They work offline, load quickly, and provide a seamless user experience.</p>
        <h2>2. JAMstack Architecture</h2>
        <p>JAMstack (JavaScript, APIs, and Markup) is becoming increasingly popular due to its focus on performance, security, and developer experience. By decoupling the frontend from the backend, JAMstack makes websites faster and more secure.</p>
        <h2>3. WebAssembly</h2>
        <p>WebAssembly enables high-performance applications in the browser by allowing code written in languages like C++ and Rust to run in the browser at near-native speed.</p>
        <h2>4. Serverless Architecture</h2>
        <p>Serverless computing allows developers to build and run applications without thinking about servers, making deployment easier and more cost-effective.</p>
        <h2>5. AI and Machine Learning Integration</h2>
        <p>AI and ML are being integrated into web applications for personalization, recommendation systems, and enhanced user experiences.</p>`,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
        category: "Web Development",
        authorId: adminUser.id,
        createdAt: new Date("2023-05-15"),
        updatedAt: new Date("2023-05-15")
      },
      {
        title: "5 SEO Strategies That Actually Work in 2023",
        slug: "seo-strategies-2023",
        excerpt: "Learn effective SEO techniques to improve your website's visibility and drive more organic traffic.",
        content: `<p>Search Engine Optimization (SEO) remains a crucial aspect of digital marketing, but the tactics that work keep changing as search engines evolve. Here are five effective SEO strategies for 2023.</p>
        <h2>1. Focus on User Experience</h2>
        <p>Google's Core Web Vitals have made user experience a critical ranking factor. Optimizing page speed, mobile responsiveness, and overall usability is now essential for SEO success.</p>
        <h2>2. Create High-Quality, Comprehensive Content</h2>
        <p>Content that thoroughly addresses user queries and demonstrates expertise continues to perform well. Focus on creating in-depth content that provides real value to your audience.</p>
        <h2>3. Optimize for Voice Search</h2>
        <p>With the increasing use of voice assistants, optimizing for conversational queries is becoming more important. Focus on natural language and question-based keywords.</p>
        <h2>4. Build Quality Backlinks</h2>
        <p>Despite many algorithm changes, backlinks remain a top ranking factor. Focus on earning links from reputable, relevant sites through quality content and relationships.</p>
        <h2>5. Leverage Structured Data</h2>
        <p>Structured data helps search engines understand your content better and can lead to rich snippets in search results, increasing visibility and click-through rates.</p>`,
        image: "https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
        category: "Digital Marketing",
        authorId: adminUser.id,
        createdAt: new Date("2023-04-28"),
        updatedAt: new Date("2023-04-28")
      },
      {
        title: "The Psychology of Color in UI/UX Design",
        slug: "psychology-of-color-in-ui-ux-design",
        excerpt: "Explore how color choices can impact user experience and influence user behavior on your website.",
        content: `<p>Color is a powerful communication tool in design that can influence users' emotions, perceptions, and behaviors. Understanding color psychology can help create more effective user interfaces.</p>
        <h2>The Emotional Impact of Colors</h2>
        <p>Different colors evoke different emotional responses. For example:</p>
        <ul>
        <li><strong>Blue:</strong> Creates feelings of trust, security, and stability. Commonly used by banks and tech companies.</li>
        <li><strong>Red:</strong> Evokes excitement, urgency, and passion. Effective for calls-to-action and clearance sales.</li>
        <li><strong>Green:</strong> Associated with growth, health, and tranquility. Popular in environmental and financial applications.</li>
        <li><strong>Yellow:</strong> Conveys optimism, clarity, and warmth. Good for highlighting important elements.</li>
        <li><strong>Purple:</strong> Suggests luxury, creativity, and wisdom. Often used in beauty and premium products.</li>
        </ul>
        <h2>Cultural Considerations</h2>
        <p>Color meanings can vary significantly across cultures. For example, while white represents purity in Western cultures, it's associated with mourning in some Eastern cultures. Consider your target audience's cultural background when selecting colors.</p>
        <h2>Practical Applications in UI/UX Design</h2>
        <p>Strategic use of color can improve user experience through:</p>
        <ul>
        <li>Creating visual hierarchy to guide users through interfaces</li>
        <li>Improving readability and accessibility</li>
        <li>Establishing brand identity and recognition</li>
        <li>Encouraging specific user actions</li>
        <li>Communicating feedback and system status</li>
        </ul>`,
        image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
        category: "UI/UX Design",
        authorId: adminUser.id,
        createdAt: new Date("2023-04-10"),
        updatedAt: new Date("2023-04-10")
      }
    ];
    
    samplePosts.forEach(post => {
      const id = this.currentBlogPostId++;
      this.blogPostStore.set(id, { ...post, id });
    });
  }
}

export const storage = new MemStorage();
