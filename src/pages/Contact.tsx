import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ContactFormData } from '@/lib/types';
import { Button } from '@/components/ui/button';
import GoogleMap from "@/components/home/GoogleMap";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      await apiRequest('POST', '/api/contact', data);

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      content: "APC Road Rajabazar"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: "Freelantix0@gmail.com"
    },
    {
      icon: "fas fa-phone-alt",
      title: "Phone",
      content: "+1 (555) 123-4567"
    },
    {
      icon: "fas fa-clock",
      title: "Working Hours",
      content: [
        "Monday - Friday: 9am - 6pm",
        "Saturday: 10am - 4pm"
      ]
    }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", url: "https://facebook.com", label: "Facebook" },
    { icon: "fab fa-twitter", url: "https://twitter.com", label: "Twitter" },
    { icon: "fab fa-instagram", url: "https://instagram.com", label: "Instagram" },
    { icon: "fab fa-linkedin-in", url: "https://linkedin.com", label: "LinkedIn" }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Freelantix</title>
        <meta name="description" content="Get in touch with Freelantix for your web development, digital marketing, and design needs. Contact us today to discuss your project." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-800 mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-neutral-600">
              Have a project in mind? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-700 font-medium">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-700 font-medium">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="your@email.com"
                              {...field}
                              className="px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-700 font-medium">Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Project inquiry"
                            {...field}
                            className="px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-700 font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project"
                            rows={5}
                            {...field}
                            className="px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 font-medium py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <h3 className="font-heading font-semibold text-xl mb-6 text-neutral-800">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                        <i className={info.icon}></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-800 mb-1">{info.title}</h4>
                        {Array.isArray(info.content) ? (
                          info.content.map((line, i) => (
                            <p key={i} className="text-neutral-600">{line}</p>
                          ))
                        ) : (
                          <p className="text-neutral-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="font-medium text-neutral-800 mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white transition duration-300"
                        aria-label={link.label}
                      >
                        <i className={link.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Find Us Here</h2>
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
