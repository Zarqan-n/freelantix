import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Share2, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { BlogPost as BlogPostType } from "@/lib/types";

const BlogPost = () => {
  const { id } = useParams();
  const [_, setLocation] = useLocation();
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);

  // Fetch blog post
  const { data: post, isLoading, isError } = useQuery({ 
    queryKey: [`/api/blog/${id}`],
    // Using local data instead of a real API fetch
    queryFn: async () => {
      const foundPost = blogPosts.find(post => post.id === id);
      if (!foundPost) {
        throw new Error("Post not found");
      }
      return foundPost;
    }
  });

  useEffect(() => {
    if (post) {
      // Find related posts (same category, excluding current)
      const related = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [post]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="animate-pulse">
            <div className="bg-gray-200 h-8 w-1/2 rounded mb-4"></div>
            <div className="bg-gray-200 h-6 w-3/4 rounded mb-8"></div>
            <div className="bg-gray-200 h-64 rounded-lg mb-8"></div>
            <div className="space-y-4">
              <div className="bg-gray-200 h-4 rounded"></div>
              <div className="bg-gray-200 h-4 rounded"></div>
              <div className="bg-gray-200 h-4 w-5/6 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold font-montserrat text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link href="/blog">
            <Button className="bg-primary text-white hover:bg-primary/90">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Blog Header */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary to-tertiary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog">
              <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Button>
            </Link>
            <span className={`inline-block bg-${post.categoryColor}/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4`}>
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold font-montserrat leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-white/80">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm">{post.author.title}</p>
                </div>
              </div>
              <Separator orientation="vertical" className="mx-4 h-8 bg-white/20" />
              <div className="flex items-center">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>{post.date}</span>
              </div>
              <Separator orientation="vertical" className="mx-4 h-8 bg-white/20" />
              <div className="flex items-center">
                <i className="far fa-clock mr-2"></i>
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                {/* Featured Image */}
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-auto object-cover"
                />
                
                {/* Article Content */}
                <div className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="lead text-xl text-gray-700 mb-6">{post.excerpt}</p>
                    
                    {post.content.map((section, index) => (
                      <div key={index} className="mb-8">
                        {section.heading && (
                          <h2 className="text-2xl font-bold font-montserrat mb-4">{section.heading}</h2>
                        )}
                        {section.paragraphs.map((paragraph, i) => (
                          <p key={i} className="mb-4">{paragraph}</p>
                        ))}
                        {section.image && (
                          <div className="my-6">
                            <img 
                              src={section.image.url} 
                              alt={section.image.alt} 
                              className="rounded-lg w-full"
                            />
                            {section.image.caption && (
                              <p className="text-sm text-gray-500 mt-2 text-center italic">{section.image.caption}</p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Tags */}
                  <div className="mt-8">
                    <h3 className="font-bold text-lg mb-3">Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Share Links */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="font-bold text-lg mb-3 flex items-center">
                      <Share2 className="mr-2 h-5 w-5" /> Share This Post:
                    </h3>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="icon" className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        <Facebook size={18} />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white">
                        <Twitter size={18} />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
                        <Linkedin size={18} />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Author Bio */}
                  <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start">
                      <Avatar className="h-16 w-16 mr-4">
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{post.author.name}</h3>
                        <p className="text-gray-700 mb-4">{post.author.bio}</p>
                        <div className="flex space-x-3">
                          <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                            <Twitter size={18} />
                          </a>
                          <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                            <Linkedin size={18} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Comments Section - Would be implemented with a real API */}
              <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold font-montserrat mb-6">Comments (5)</h3>
                <div className="space-y-8">
                  {/* Static comment for now */}
                  <div className="flex">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center mb-2">
                        <h4 className="font-bold">John Doe</h4>
                        <span className="text-gray-500 text-sm ml-4">2 days ago</span>
                      </div>
                      <p className="text-gray-700 mb-2">
                        This is a great article! I've learned a lot from this and will definitely apply these principles to our upcoming projects.
                      </p>
                      <Button variant="ghost" className="text-primary p-0">Reply</Button>
                    </div>
                  </div>
                  
                  {/* Comment form */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="font-bold text-xl mb-4">Leave a Comment</h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                          <input 
                            type="text" 
                            id="name" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                          <input 
                            type="email" 
                            id="email" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                            placeholder="Your email"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="comment" className="block text-gray-700 mb-2">Comment</label>
                        <textarea 
                          id="comment" 
                          rows={5} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                          placeholder="Your comment"
                        ></textarea>
                      </div>
                      <Button className="bg-primary text-white hover:bg-primary/90">
                        Post Comment
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Author Widget */}
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-2 font-montserrat">{post.author.name}</h3>
                  <p className="text-gray-500 mb-4">{post.author.title}</p>
                  <p className="text-gray-700 mb-4">{post.author.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Related Posts */}
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-4 font-montserrat">Related Posts</h3>
                {relatedPosts.length > 0 ? (
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                        <a className="flex items-start group">
                          <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                            <img 
                              src={relatedPost.image} 
                              alt={relatedPost.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="ml-4 flex-grow">
                            <h4 className="font-medium text-gray-800 group-hover:text-primary transition duration-300">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-gray-500">{relatedPost.date}</p>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">No related posts found.</p>
                )}
              </div>
              
              {/* Categories */}
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-4 font-montserrat">Categories</h3>
                <ul className="space-y-2">
                  {['Web Development', 'Digital Marketing', 'UI/UX Design', 'SEO', 'Social Media'].map((category, index) => (
                    <li key={index}>
                      <Link href={`/blog?category=${category}`}>
                        <a className="flex items-center text-gray-700 hover:text-primary transition duration-300">
                          <i className="fas fa-angle-right mr-2"></i>
                          {category}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tags */}
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-4 font-montserrat">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Button 
                      key={index} 
                      variant="outline" 
                      className="bg-gray-100 border-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full px-4 py-1"
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-primary text-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-4 font-montserrat">Subscribe to Our Newsletter</h3>
                <p className="mb-4 opacity-90">Get the latest articles and insights delivered directly to your inbox.</p>
                <form className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-3 w-full bg-white/10 border border-white/20 text-white placeholder:text-white/70 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent" 
                  />
                  <Button type="submit" className="w-full bg-white text-primary hover:bg-white/90">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* More Posts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-montserrat">Explore More Articles</h2>
            <p className="text-gray-600 mt-2">Discover more insights from our experts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map((explorePost) => (
              <article key={explorePost.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={explorePost.image} 
                    alt={explorePost.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 left-4 bg-${explorePost.categoryColor} text-white text-xs px-3 py-1 rounded-full`}>
                    {explorePost.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 font-montserrat">
                    <Link href={`/blog/${explorePost.id}`}>
                      <a className="hover:text-primary transition duration-300">{explorePost.title}</a>
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {explorePost.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{explorePost.date}</span>
                    <Link href={`/blog/${explorePost.id}`}>
                      <a className={`text-${explorePost.categoryColor} font-medium text-sm flex items-center`}>
                        Read More <i className="fas fa-arrow-right ml-2"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/blog">
              <Button variant="outline" className="border border-primary text-primary hover:bg-primary hover:text-white">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
