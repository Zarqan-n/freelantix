import { Helmet } from 'react-helmet';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ServicesSection from '@/components/home/ServicesSection';
import CTASection from '@/components/home/CTASection';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import PricingSection from '@/components/home/PricingSection';
import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '@/lib/types';
import { Link } from 'wouter';

const Home = () => {
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog/recent'],
  });

  return (
    <>
      <Helmet>
        <title>Freelantix - Web Development & Digital Solutions</title>
        <meta name="description" content="Freelantix is a digital agency specializing in web development, UI/UX design, e-commerce, and digital marketing solutions." />
        <meta name="keywords" content="web development, digital agency, UI/UX design, e-commerce, SEO, digital marketing" />
      </Helmet>

      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <CTASection /> 
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
      
      {/* Blog Section */}
      <section id="blog" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-6 md:mb-0">
              <span className="inline-block text-primary font-medium mb-2">Our Blog</span>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-800">Latest Insights</h2>
            </div>
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
          ) : blogPosts && blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(0, 3).map((post) => (
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
    </>
  );
};

export default Home;
