import { Service, BlogPost, TeamMember, Testimonial, BlogCategory } from "./types";

// Services data
export const services: Service[] = [
  {
    id: "web-design",
    title: "Web Design & Development",
    category: "Development",
    colorClass: "primary",
    description: "Create stunning, responsive websites that captivate your audience and drive conversions.",
    features: [
      {
        title: "Responsive Design",
        description: "We build websites that look and function perfectly on all devices and screen sizes."
      },
      {
        title: "Custom Development",
        description: "Tailor-made solutions that address your specific business needs and challenges."
      },
      {
        title: "User Experience",
        description: "Intuitive interfaces that enhance usability and keep visitors engaged."
      }
    ],
    benefits: [
      "Increased conversion rates",
      "Improved user engagement",
      "Enhanced brand credibility",
      "Better search engine rankings",
      "Mobile-optimized experience"
    ],
    pricing: "$1,500+"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Marketing",
    colorClass: "secondary",
    description: "Drive traffic, leads, and sales with comprehensive digital marketing strategies.",
    features: [
      {
        title: "Strategic Planning",
        description: "Data-driven marketing plans tailored to your business goals and target audience."
      },
      {
        title: "Multi-channel Campaigns",
        description: "Cohesive marketing across various platforms to maximize reach and impact."
      },
      {
        title: "Performance Analytics",
        description: "Detailed reporting and insights to measure and optimize campaign performance."
      }
    ],
    benefits: [
      "Increased brand awareness",
      "Higher quality leads",
      "Improved ROI on marketing spend",
      "Data-driven decision making",
      "Consistent messaging across channels"
    ],
    pricing: "$1,000+/month"
  },
  {
    id: "app-development",
    title: "App Development",
    category: "Development",
    colorClass: "tertiary",
    description: "Create intuitive mobile apps that enhance user experience and drive engagement.",
    features: [
      {
        title: "Cross-platform Solutions",
        description: "Apps that work seamlessly across iOS, Android, and other platforms."
      },
      {
        title: "User-centered Design",
        description: "Intuitive interfaces that prioritize user experience and engagement."
      },
      {
        title: "Ongoing Support",
        description: "Continuous updates and maintenance to ensure optimal performance."
      }
    ],
    benefits: [
      "Enhanced customer engagement",
      "Streamlined business processes",
      "Improved customer service",
      "New revenue channels",
      "Competitive advantage"
    ],
    pricing: "$5,000+"
  },
  {
    id: "seo",
    title: "SEO Optimization",
    category: "Marketing",
    colorClass: "primary",
    description: "Improve your search rankings and drive organic traffic to your website.",
    features: [
      {
        title: "Technical SEO",
        description: "Optimization of website structure, speed, and performance for search engines."
      },
      {
        title: "Content Strategy",
        description: "Creation of high-quality, keyword-optimized content that ranks well."
      },
      {
        title: "Link Building",
        description: "Strategic acquisition of high-quality backlinks to boost authority."
      }
    ],
    benefits: [
      "Higher search engine rankings",
      "Increased organic traffic",
      "Better quality website traffic",
      "Improved website usability",
      "Long-term sustainable results"
    ],
    pricing: "$800+/month"
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    category: "Marketing",
    colorClass: "secondary",
    description: "Build your brand presence and engage with your audience on social platforms.",
    features: [
      {
        title: "Platform Strategy",
        description: "Customized approach for each social platform based on audience and goals."
      },
      {
        title: "Content Creation",
        description: "Engaging, shareable content that resonates with your target audience."
      },
      {
        title: "Community Management",
        description: "Active engagement with followers to build loyalty and advocacy."
      }
    ],
    benefits: [
      "Increased brand awareness",
      "Improved customer loyalty",
      "Direct customer engagement",
      "Better audience insights",
      "Higher website traffic"
    ],
    pricing: "$600+/month"
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    category: "Design",
    colorClass: "tertiary",
    description: "Create a distinctive brand identity that resonates with your target audience.",
    features: [
      {
        title: "Brand Strategy",
        description: "Development of comprehensive brand positioning and messaging."
      },
      {
        title: "Visual Identity",
        description: "Creation of logos, color schemes, typography, and design elements."
      },
      {
        title: "Brand Guidelines",
        description: "Detailed documentation to ensure consistent brand application."
      }
    ],
    benefits: [
      "Consistent brand presentation",
      "Increased brand recognition",
      "Stronger emotional connection",
      "Enhanced credibility",
      "Clear differentiation from competitors"
    ],
    pricing: "$2,500+"
  }
];

// Testimonials data
export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    testimonial: "Freelantix transformed our online presence completely. Their strategic approach and attention to detail resulted in a website that not only looks great but also converts visitors into customers.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    position: "Marketing Director, GrowFast",
    testimonial: "The SEO and digital marketing strategies implemented by Freelantix have significantly increased our organic traffic and lead generation. Their team is responsive and truly cares about our success.",
    rating: 5
  },
  {
    name: "Jennifer Chen",
    position: "Founder, EcoShop",
    testimonial: "Working with Freelantix was a game-changer for our e-commerce business. Their expertise in UX design and conversion optimization has resulted in a 40% increase in our online sales.",
    rating: 4.5
  }
];

// Team members data
export const teamMembers: TeamMember[] = [
  {
    name: "David Anderson",
    position: "Founder & CEO",
    bio: "David has over 15 years of experience in digital marketing and web development. He founded Freelantix with a vision to help businesses thrive online.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Emily Nakamura",
    position: "Creative Director",
    bio: "Emily leads our creative team with her innovative design thinking and attention to detail. She specializes in creating beautiful and functional user experiences.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Marcus Johnson",
    position: "Technical Lead",
    bio: "Marcus oversees all development projects, ensuring they meet the highest standards of quality and performance. He has expertise in various programming languages and frameworks.",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    name: "Sophia Rodriguez",
    position: "Digital Marketing Specialist",
    bio: "Sophia develops and implements effective digital marketing strategies that drive results. She has a deep understanding of SEO, PPC, and social media marketing.",
    photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=300",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  }
];

// Blog categories
export const blogCategories: BlogCategory[] = [
  {
    name: "Web Development",
    icon: "laptop-code"
  },
  {
    name: "Digital Marketing",
    icon: "chart-line"
  },
  {
    name: "UI/UX Design",
    icon: "palette"
  },
  {
    name: "SEO",
    icon: "search"
  },
  {
    name: "Social Media",
    icon: "hashtag"
  }
];

// Blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: "web-development-trends-2023",
    title: "10 Web Development Trends to Watch in 2023",
    category: "Web Development",
    categoryColor: "primary",
    date: "June 15, 2023",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    excerpt: "Stay ahead of the curve with these emerging web development technologies and methodologies that are shaping the future.",
    readTime: 8,
    author: {
      name: "Marcus Johnson",
      title: "Technical Lead",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100",
      bio: "Marcus is our Technical Lead with over 10 years of experience in web development."
    },
    tags: ["Web Development", "JavaScript", "Frontend", "Technology", "Programming"],
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "The web development landscape is constantly evolving, with new technologies, frameworks, and methodologies emerging regularly. Staying updated with these trends is crucial for developers who want to remain competitive and deliver cutting-edge solutions.",
          "In this article, we'll explore the top 10 web development trends that are expected to dominate the industry in 2023 and beyond."
        ]
      },
      {
        heading: "1. Progressive Web Apps (PWAs)",
        paragraphs: [
          "Progressive Web Apps continue to gain traction as they offer the best of both worlds: the accessibility of websites and the functionality of native apps. PWAs provide features like offline access, push notifications, and device hardware access, making them an attractive option for businesses looking to enhance user experience without the cost of developing separate native apps."
        ],
        image: {
          url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800",
          alt: "Progressive Web Apps concept",
          caption: "PWAs are bridging the gap between web and mobile applications"
        }
      },
      {
        heading: "2. WebAssembly (Wasm)",
        paragraphs: [
          "WebAssembly is revolutionizing web performance by allowing code written in languages like C, C++, and Rust to run in the browser at near-native speed. This technology enables complex applications like games, video editors, and CAD software to run efficiently on the web, opening up new possibilities for browser-based applications."
        ]
      },
      {
        heading: "3. Serverless Architecture",
        paragraphs: [
          "Serverless computing continues to gain popularity as it allows developers to build and run applications without managing server infrastructure. This approach reduces operational costs, improves scalability, and enables faster development cycles, making it an attractive option for businesses of all sizes."
        ]
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "The web development landscape is evolving rapidly, and staying ahead of these trends is essential for developers and businesses alike. By embracing these emerging technologies and methodologies, you can create more efficient, secure, and user-friendly web applications that meet the demands of modern users.",
          "Which of these trends are you most excited about? Share your thoughts in the comments below!"
        ]
      }
    ]
  },
  {
    id: "digital-marketing-small-business",
    title: "Effective Digital Marketing Strategies for Small Businesses",
    category: "Digital Marketing",
    categoryColor: "secondary",
    date: "May 22, 2023",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    excerpt: "Learn how small businesses can leverage digital marketing to compete with larger corporations and expand their reach.",
    readTime: 6,
    author: {
      name: "Sophia Rodriguez",
      title: "Digital Marketing Specialist",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=100",
      bio: "Sophia specializes in creating effective digital marketing strategies for businesses of all sizes."
    },
    tags: ["Digital Marketing", "Small Business", "SEO", "Social Media", "Content Marketing"],
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "In today's digital world, small businesses have unprecedented opportunities to reach their target audience without the massive marketing budgets of large corporations. Digital marketing offers cost-effective strategies that level the playing field and allow small businesses to compete effectively.",
          "This article explores practical digital marketing strategies specifically tailored for small businesses looking to maximize their online presence and drive growth."
        ]
      },
      {
        heading: "1. Local SEO Optimization",
        paragraphs: [
          "For small businesses with physical locations, local SEO is a game-changer. Optimizing your Google My Business listing, gathering positive reviews, and ensuring consistent NAP (Name, Address, Phone) information across the web can significantly improve your visibility in local search results.",
          "When customers search for products or services 'near me,' you want your business to appear at the top of those results. Local SEO helps you achieve exactly that."
        ],
        image: {
          url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
          alt: "Local SEO concept showing map and search results",
          caption: "Local SEO helps small businesses appear in relevant location-based searches"
        }
      },
      {
        heading: "2. Content Marketing on a Budget",
        paragraphs: [
          "Content marketing doesn't have to be expensive to be effective. Focus on creating high-quality, valuable content that addresses your customers' pain points and questions. A well-maintained blog, helpful how-to guides, or informative videos can establish your expertise and attract organic traffic.",
          "Remember, consistency is more important than volume. A regular publishing schedule of thoughtful content will yield better results than sporadic, rushed pieces."
        ]
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Digital marketing offers small businesses powerful tools to grow their customer base, increase brand awareness, and drive sales without breaking the bank. By focusing on the strategies outlined in this article and consistently measuring and optimizing your efforts, you can create a digital marketing approach that delivers real results for your small business.",
          "What digital marketing strategies have worked best for your small business? Share your experiences in the comments below!"
        ]
      }
    ]
  },
  {
    id: "ui-ux-design-principles",
    title: "Essential UI/UX Design Principles for Better Conversions",
    category: "UI/UX Design",
    categoryColor: "tertiary",
    date: "April 10, 2023",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800",
    excerpt: "Discover how thoughtful user interface and experience design can significantly impact your website's conversion rates.",
    readTime: 7,
    author: {
      name: "Emily Nakamura",
      title: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100",
      bio: "Emily leads our creative team with her innovative design thinking and passion for user-centered design."
    },
    tags: ["UI/UX", "Design", "Conversion Rate", "User Experience", "Web Design"],
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "The design of your website or application plays a crucial role in determining its success. Good UI/UX design isn't just about aesthetics—it's about creating an intuitive, engaging experience that guides users toward taking desired actions.",
          "In this article, we'll explore essential UI/UX design principles that can help improve your conversion rates and overall user satisfaction."
        ]
      },
      {
        heading: "1. Visual Hierarchy and Clear CTAs",
        paragraphs: [
          "Effective visual hierarchy guides users' attention to the most important elements on your page. By using size, color, contrast, and spacing strategically, you can create a natural flow that leads users toward your calls-to-action.",
          "Make your CTAs stand out with contrasting colors, clear and action-oriented text, and strategic placement. A well-designed CTA should be immediately noticeable without being obtrusive."
        ],
        image: {
          url: "https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?auto=format&fit=crop&q=80&w=800",
          alt: "Visual hierarchy example showing prominent call-to-action button",
          caption: "Strong visual hierarchy guides users to take desired actions"
        }
      },
      {
        heading: "2. Simplicity and White Space",
        paragraphs: [
          "In UI/UX design, less is often more. Cluttered interfaces confuse users and can lead to decision paralysis. Use white space (or negative space) deliberately to create breathing room around important elements and make your content more digestible.",
          "Every element on your page should serve a purpose. If it doesn't contribute to user goals or business objectives, consider removing it to create a more focused experience."
        ]
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Thoughtful UI/UX design is not just about creating visually appealing interfaces—it's about understanding user behavior and creating experiences that guide them toward conversion. By implementing these design principles, you can create a more intuitive, engaging, and effective digital experience that drives results.",
          "Remember that design is an iterative process. Continuously gather user feedback, analyze your metrics, and refine your approach to create ever-improving experiences for your users."
        ]
      }
    ]
  },
  {
    id: "seo-tips-2023",
    title: "7 Advanced SEO Tips to Boost Your Rankings in 2023",
    category: "SEO",
    categoryColor: "primary",
    date: "March 18, 2023",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=800",
    excerpt: "Take your SEO strategy to the next level with these advanced techniques that can help improve your search rankings.",
    readTime: 9,
    author: {
      name: "Sophia Rodriguez",
      title: "Digital Marketing Specialist",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=100",
      bio: "Sophia specializes in creating effective digital marketing strategies for businesses of all sizes."
    },
    tags: ["SEO", "Search Engine Optimization", "Digital Marketing", "Content Strategy", "Keywords"],
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "Search engine optimization continues to evolve as search algorithms become more sophisticated and user expectations change. Staying ahead in SEO requires more than just basic keyword optimization—it demands a comprehensive approach that addresses technical, content, and user experience factors.",
          "In this article, we'll explore seven advanced SEO techniques that can help boost your rankings in 2023 and beyond."
        ]
      },
      {
        heading: "1. Optimize for Search Intent",
        paragraphs: [
          "Understanding and aligning with search intent is now more important than keyword density. Search engines are increasingly skilled at determining what users are really looking for when they type a query.",
          "Analyze the search results for your target keywords to understand what type of content ranks well—informational, navigational, commercial, or transactional. Then, structure your content to match that intent while providing unique value."
        ],
        image: {
          url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
          alt: "Person searching on laptop",
          caption: "Understanding search intent is key to modern SEO success"
        }
      },
      {
        heading: "2. Core Web Vitals Optimization",
        paragraphs: [
          "Google's Core Web Vitals have become crucial ranking factors. These metrics measure loading performance, interactivity, and visual stability of your pages. Optimizing for these factors not only improves your rankings but also enhances user experience.",
          "Focus on improving Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) through better hosting, optimized images, minimized JavaScript, and stable layouts."
        ]
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "SEO continues to evolve beyond simple keyword optimization toward a more holistic approach that prizes user experience, content quality, and technical excellence. By implementing these advanced SEO techniques, you can create a stronger foundation for long-term search visibility and performance.",
          "Remember that SEO is a marathon, not a sprint. Consistent application of these strategies, combined with regular monitoring and adaptation, will yield the best results over time."
        ]
      }
    ]
  },
  {
    id: "social-media-engagement",
    title: "How to Boost Engagement on Your Social Media Channels",
    category: "Social Media",
    categoryColor: "secondary",
    date: "February 25, 2023",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800",
    excerpt: "Learn effective strategies to increase engagement and build a loyal following on your social media platforms.",
    readTime: 5,
    author: {
      name: "Sophia Rodriguez",
      title: "Digital Marketing Specialist",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=100",
      bio: "Sophia specializes in creating effective digital marketing strategies for businesses of all sizes."
    },
    tags: ["Social Media", "Engagement", "Content Strategy", "Community Building", "Digital Marketing"],
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "Social media has evolved from simple communication platforms to powerful marketing channels. However, with algorithm changes and increasing competition for attention, simply posting content is no longer enough to build an engaged audience.",
          "This article explores practical strategies to boost engagement on your social media channels and create meaningful connections with your followers."
        ]
      },
      {
        heading: "1. Create Conversation-Worthy Content",
        paragraphs: [
          "The most engaging social media content sparks conversations. Ask thought-provoking questions, create polls, or post content that encourages your audience to share their opinions and experiences.",
          "Remember that engagement is a two-way street. When followers comment on your posts, respond promptly and meaningfully to show that you value their input."
        ],
        image: {
          url: "https://images.unsplash.com/photo-1534131707746-25d604851a1f?auto=format&fit=crop&q=80&w=800",
          alt: "People engaged in conversation",
          caption: "Creating content that sparks conversations leads to higher engagement"
        }
      },
      {
        heading: "2. Leverage Video Content",
        paragraphs: [
          "Video consistently outperforms other content types across most social platforms. From short-form videos like TikTok and Instagram Reels to longer YouTube content, video captures attention more effectively than text or static images.",
          "You don't need professional equipment to get started. Authentic, valuable video content shot on a smartphone often performs better than overly produced content that lacks substance."
        ]
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Boosting social media engagement requires a strategic approach that focuses on creating value for your audience, fostering authentic connections, and consistently adapting to platform changes and audience preferences.",
          "Remember that building an engaged community takes time. Be patient, consistent, and genuine in your approach, and you'll gradually see your engagement metrics improve."
        ]
      }
    ]
  },
  {
    id: "ecommerce-optimization",
    title: "Essential E-commerce Optimization Techniques for Higher Conversions",
    category: "Web Development",
    categoryColor: "primary",
    date: "January 30, 2023",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=800",
    excerpt: "Discover practical ways to optimize your e-commerce website for better user experience and increased sales.",
    readTime: 8,
    author: {
      name: "David Anderson",
      title: "Founder & CEO",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100",
      bio: "David has over 15 years of experience in digital marketing and web development."
    },
    tags: ["E-commerce", "Conversion Rate Optimization", "UX Design", "Web Development", "Online Shopping"],
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "E-commerce continues to grow at an unprecedented rate, but with this growth comes increased competition. To succeed in this competitive landscape, online stores need to focus on optimizing every aspect of the shopping experience to maximize conversions.",
          "This article covers essential e-commerce optimization techniques that can help improve your store's performance and drive more sales."
        ]
      },
      {
        heading: "1. Streamline the Checkout Process",
        paragraphs: [
          "Cart abandonment is a significant challenge for e-commerce businesses, with the average rate hovering around 70%. One of the main reasons for abandonment is a complicated checkout process.",
          "Reduce friction by implementing guest checkout options, minimizing the number of form fields, clearly showing progress steps, and offering multiple payment methods. Every additional step or form field can decrease your conversion rate."
        ],
        image: {
          url: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&q=80&w=800",
          alt: "Person using credit card for online shopping",
          caption: "A streamlined checkout process significantly reduces cart abandonment"
        }
      },
      {
        heading: "2. Optimize Product Pages",
        paragraphs: [
          "Your product pages are where purchasing decisions are made. They should provide all the information customers need to make a confident buying decision.",
          "Include high-quality images from multiple angles, detailed descriptions that highlight benefits (not just features), clear pricing information, product specifications, and authentic customer reviews. Consider adding videos for products that benefit from demonstration."
        ]
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "E-commerce optimization is an ongoing process that requires continuous testing, analysis, and refinement. By focusing on these key areas, you can create a shopping experience that not only converts more visitors into customers but also encourages repeat purchases and brand loyalty.",
          "Remember that even small improvements can lead to significant gains when applied consistently. Start with the areas that will have the biggest impact on your specific business and gradually implement additional optimizations over time."
        ]
      }
    ]
  }
];
