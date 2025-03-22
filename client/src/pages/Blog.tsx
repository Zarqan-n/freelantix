import { useState } from "react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { blogPosts, blogCategories } from "@/lib/data";
import { BlogPost } from "@/lib/types";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Search is already handled via state
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-tertiary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat leading-tight mb-6">
              Latest Insights & News
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Stay up to date with the latest trends and insights in digital marketing and web development
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Search Results Info */}
              {(searchTerm || selectedCategory) && (
                <div className="mb-8 p-4 bg-white rounded-lg shadow">
                  <h2 className="text-xl font-montserrat font-bold">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'} found
                    {searchTerm && ` for "${searchTerm}"`}
                    {selectedCategory && ` in ${selectedCategory}`}
                  </h2>
                  <Button 
                    variant="link" 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory(null);
                    }}
                    className="text-primary p-0 mt-2"
                  >
                    Clear filters
                  </Button>
                </div>
              )}
              
              {/* Blog Posts Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover"
                        />
                        <div 
                          className={`absolute top-4 left-4 bg-${post.categoryColor} text-white text-xs px-3 py-1 rounded-full`}
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedCategory(post.category);
                          }}
                          style={{cursor: 'pointer'}}
                        >
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-2 font-montserrat">
                          <Link href={`/blog/${post.id}`}>
                            <a className="hover:text-primary transition duration-300">{post.title}</a>
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-sm">{post.date}</span>
                          <Link href={`/blog/${post.id}`}>
                            <a className={`text-${post.categoryColor} font-medium text-sm flex items-center`}>
                              Read More <i className="fas fa-arrow-right ml-2"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-12 rounded-lg shadow text-center">
                  <div className="text-gray-400 mb-4"><i className="fas fa-search text-5xl"></i></div>
                  <h3 className="text-xl font-bold mb-2">No Posts Found</h3>
                  <p className="text-gray-600 mb-4">We couldn't find any blog posts matching your criteria.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory(null);
                    }}
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
              
              {/* Pagination - Static for now */}
              {filteredPosts.length > 0 && (
                <div className="flex justify-center mt-12">
                  <nav className="inline-flex rounded-md shadow">
                    <a href="#" className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                      Previous
                    </a>
                    <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-primary text-white">
                      1
                    </a>
                    <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                      2
                    </a>
                    <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                      3
                    </a>
                    <a href="#" className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                      Next
                    </a>
                  </nav>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Search Box */}
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-4 font-montserrat">Search Posts</h3>
                <form onSubmit={handleSearch} className="flex">
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-300 rounded-l-md px-4 py-2 w-full"
                  />
                  <Button type="submit" className="bg-primary text-white rounded-r-md">
                    <Search size={18} />
                  </Button>
                </form>
              </div>
              
              {/* Categories */}
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-4 font-montserrat">Categories</h3>
                <ul className="space-y-2">
                  {blogCategories.map((category, index) => (
                    <li key={index}>
                      <Button 
                        variant="ghost" 
                        onClick={() => setSelectedCategory(category.name)}
                        className={`flex items-center w-full justify-start p-2 rounded-md ${
                          selectedCategory === category.name 
                            ? 'bg-primary/10 text-primary' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <i className={`fas fa-${category.icon} mr-2`}></i>
                        {category.name}
                        <span className="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {blogPosts.filter(post => post.category === category.name).length}
                        </span>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-4 font-montserrat">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 4).map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`}>
                      <a className="flex items-start group">
                        <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-grow">
                          <h4 className="font-medium text-gray-800 group-hover:text-primary transition duration-300">
                            {post.title}
                          </h4>
                          <p className="text-sm text-gray-500">{post.date}</p>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Tags */}
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-4 font-montserrat">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Web Design', 'SEO', 'Marketing', 'UI/UX', 'Development', 'Branding', 'Social Media', 'E-commerce', 'Analytics'].map((tag, index) => (
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
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/70 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent" 
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-white text-primary hover:bg-white/90 transition duration-300"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
