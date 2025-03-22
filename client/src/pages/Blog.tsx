import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { Link } from 'wouter';
import { BlogPost } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  const categories = blogPosts ? [...new Set(blogPosts.map(post => post.category))] : [];

  const filteredPosts = blogPosts ? blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  }) : [];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <>
      <Helmet>
        <title>Blog | Freelantix</title>
        <meta name="description" content="Explore our blog for the latest insights, tips, and trends in web development, digital marketing, UX design, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-800 mb-6">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg text-neutral-600">
              Discover the latest insights, tips, and trends in web development, digital marketing, UX design, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Search Results Info */}
              {searchTerm && (
                <div className="mb-8">
                  <h2 className="text-xl font-medium text-neutral-800">
                    Search results for: <span className="text-primary">"{searchTerm}"</span>
                  </h2>
                  <p className="text-neutral-600">
                    Found {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                  </p>
                </div>
              )}
              
              {/* Category Filter Results Info */}
              {selectedCategory && !searchTerm && (
                <div className="mb-8">
                  <h2 className="text-xl font-medium text-neutral-800">
                    Category: <span className="text-primary">{selectedCategory}</span>
                  </h2>
                  <p className="text-neutral-600">
                    Found {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                  </p>
                </div>
              )}
              
              {/* Blog Posts */}
              {isLoading ? (
                <div className="space-y-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
                      <div className="w-full h-64 bg-neutral-200" />
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="h-4 w-24 bg-neutral-200 rounded"></div>
                          <div className="mx-2 h-4 w-2 bg-neutral-200 rounded"></div>
                          <div className="h-4 w-20 bg-neutral-200 rounded"></div>
                        </div>
                        <div className="h-6 w-3/4 bg-neutral-200 rounded mb-3"></div>
                        <div className="h-4 w-full bg-neutral-200 rounded mb-1"></div>
                        <div className="h-4 w-full bg-neutral-200 rounded mb-1"></div>
                        <div className="h-4 w-2/3 bg-neutral-200 rounded mb-4"></div>
                        <div className="h-4 w-20 bg-neutral-200 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredPosts.length > 0 ? (
                <div className="space-y-8">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover-lift transition-transform">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-64 md:h-full object-cover" 
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center mb-3">
                            <span className="text-sm text-neutral-500">
                              <i className="far fa-calendar-alt mr-2"></i> {post.date}
                            </span>
                            <span className="mx-2 text-neutral-300">|</span>
                            <span 
                              className="text-sm text-primary cursor-pointer hover:text-primary/80"
                              onClick={() => handleCategoryClick(post.category)}
                            >
                              {post.category}
                            </span>
                          </div>
                          <h2 className="font-heading font-semibold text-2xl mb-3 text-neutral-800">
                            <Link href={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h2>
                          <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center text-primary font-medium"
                          >
                            Read More <i className="fas fa-arrow-right ml-2"></i>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="bg-neutral-50 rounded-xl p-8 text-center">
                  <h3 className="text-xl text-neutral-800 mb-2">No articles found</h3>
                  <p className="text-neutral-600">
                    {searchTerm || selectedCategory ? 
                      "Try adjusting your search or category filter." : 
                      "Check back soon for new articles."}
                  </p>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h3 className="font-heading font-semibold text-xl mb-4 text-neutral-800">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h3 className="font-heading font-semibold text-xl mb-4 text-neutral-800">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className={selectedCategory === category ? "bg-primary hover:bg-primary/90" : ""}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Recent Posts */}
              {blogPosts && blogPosts.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-heading font-semibold text-xl mb-4 text-neutral-800">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 5).map((post) => (
                      <div key={post.id} className="flex items-start">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-16 h-16 object-cover rounded mr-3" 
                        />
                        <div>
                          <h4 className="font-medium text-neutral-800 hover:text-primary">
                            <Link href={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h4>
                          <p className="text-sm text-neutral-500">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
