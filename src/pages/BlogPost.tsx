import { Helmet } from 'react-helmet';
import { useParams, Link, useLocation } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { BlogPost as BlogPostType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const [, setLocation] = useLocation();

  const { data: post, isLoading, error } = useQuery<BlogPostType>({
    queryKey: [`/api/blog/${id}`],
  });

  const { data: relatedPosts } = useQuery<BlogPostType[]>({
    queryKey: ['/api/blog/related', id],
    enabled: !!post,
  });

  if (isLoading) {
    return (
      <div className="pt-32 pb-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="animate-pulse">
            <div className="h-10 w-3/4 bg-neutral-200 rounded mb-6"></div>
            <div className="h-5 w-40 bg-neutral-200 rounded mb-8"></div>
            <div className="h-64 bg-neutral-200 rounded-xl mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-neutral-200 rounded"></div>
              <div className="h-4 bg-neutral-200 rounded"></div>
              <div className="h-4 bg-neutral-200 rounded"></div>
              <div className="h-4 w-5/6 bg-neutral-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="pt-32 pb-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading font-bold text-3xl text-neutral-800 mb-4">
            Post Not Found
          </h1>
          <p className="text-neutral-600 mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/blog">
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Freelantix Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="pt-32 pb-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            className="mb-6 text-primary"
            onClick={() => setLocation('/blog')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
          
          {/* Article Header */}
          <h1 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-800 mb-4">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-neutral-600 mb-8">
            <div className="flex items-center mr-6 mb-2">
              <img 
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <i className="far fa-calendar-alt mr-2"></i>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center mb-2">
              <i className="far fa-folder mr-2"></i>
              <span className="text-primary">{post.category}</span>
            </div>
          </div>
          
          {/* Featured Image */}
          <img 
            src={post.image}
            alt={post.title}
            className="w-full h-auto rounded-xl mb-8"
          />
          
          {/* Article Content */}
          <div className="prose max-w-none prose-lg prose-headings:font-heading prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Share Links */}
          <div className="border-t border-b border-neutral-200 py-6 mb-12">
            <div className="flex items-center">
              <span className="text-neutral-800 font-medium mr-4">Share this post:</span>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" className="rounded-full" aria-label="Share on Facebook">
                  <Facebook size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" aria-label="Share on Twitter">
                  <Twitter size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" aria-label="Share on LinkedIn">
                  <Linkedin size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        {relatedPosts && relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-heading font-bold text-2xl text-neutral-800 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover-lift transition-transform">
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title} 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-sm text-neutral-500">
                        <i className="far fa-calendar-alt mr-2"></i> {relatedPost.date}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3 text-neutral-800 line-clamp-2">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <Link 
                      href={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center text-primary font-medium"
                    >
                      Read More <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPost;
