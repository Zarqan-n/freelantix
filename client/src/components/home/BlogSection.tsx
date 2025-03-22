import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '@/lib/types';
import { Link } from 'wouter';
import SectionTitle from '@/components/ui/section-title';

const BlogSection = () => {
  const { data: blogPosts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog/recent'],
  });

  return (
    <section id="blog" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <SectionTitle
            subtitle="Our Blog"
            title="Latest Insights"
            align="left"
          />
          <Link 
            href="/blog"
            className="inline-flex items-center text-primary font-medium"
          >
            View All Articles <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-neutral-200" />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="h-4 w-24 bg-neutral-200 rounded"></div>
                    <div className="mx-2 h-4 w-2 bg-neutral-200 rounded"></div>
                    <div className="h-4 w-20 bg-neutral-200 rounded"></div>
                  </div>
                  <div className="h-6 w-3/4 bg-neutral-200 rounded mb-3"></div>
                  <div className="h-4 w-full bg-neutral-200 rounded mb-1"></div>
                  <div className="h-4 w-2/3 bg-neutral-200 rounded mb-4"></div>
                  <div className="h-4 w-20 bg-neutral-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center p-8 rounded-xl bg-neutral-50">
            <p className="text-neutral-600">Failed to load blog posts. Please try again later.</p>
          </div>
        ) : blogPosts && blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover-lift transition-transform"
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-sm text-neutral-500">
                      <i className="far fa-calendar-alt mr-2"></i> {post.date}
                    </span>
                    <span className="mx-2 text-neutral-300">|</span>
                    <span className="text-sm text-neutral-500">{post.category}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3 text-neutral-800">{post.title}</h3>
                  <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-medium"
                  >
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center p-8 rounded-xl bg-neutral-50">
            <p className="text-neutral-600">New blog posts coming soon!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
