import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Zarqan",
      position: "Technical Lead",
      image: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHwy",
      bio: "Zarqan is a full-stack developer with expertise in multiple programming languages. He oversees our development team and ensures technical excellence."
    },
    {
      id: 2,
      name: "MD Furqan",
      position: "Creative Director",
      image: "https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHwy",
      bio: "Furqan leads our creative team with her exceptional design skills and strategic thinking. She ensures every project meets the highest design standards."
    },
    {
      id: 3,
      name: "Zeeshan Ahmed",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHwy",
      bio: "Zeeshan has over 15 years of experience in web development and digital marketing. He founded Freelantix with a vision to help businesses leverage technology for growth."
    }
    //https://unsplash.com/photos/man-in-black-hoodie-wearing-black-framed-eyeglasses-3JmfENcL24M
    // ,
    // {
    //   id: 4,
    //   name: "Emily Rodriguez",
    //   position: "Marketing Specialist",
    //   image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    //   bio: "Emily specializes in digital marketing strategies that drive results. She helps our clients increase their online visibility and reach their target audience."
    // }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Freelantix</title>
        <meta name="description" content="Learn about Freelantix, our mission, values, and the dedicated team behind our digital solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-800 mb-6">
              About <span className="text-primary">Freelantix</span>
            </h1>
            <p className="text-lg text-neutral-600">
              We're a team of passionate digital experts dedicated to helping businesses succeed in the digital world through innovative solutions and strategic thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary font-medium mb-2">Our Story</span>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-800 mb-6">
                How We Started
              </h2>
              <p className="text-neutral-600 mb-6">
                Freelantix was founded in 2015 with a clear mission: to help businesses of all sizes harness the power of technology and digital marketing to grow and succeed.
              </p>
              <p className="text-neutral-600 mb-6">
                What began as a small team of passionate developers and marketers has grown into a comprehensive digital agency serving clients across various industries worldwide.
              </p>
              <p className="text-neutral-600">
                Our journey has been driven by continuous learning, innovation, and a deep commitment to delivering exceptional results for our clients.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Freelantix journey"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <div>
                    <p className="text-neutral-800 font-medium">Innovative solutions since 2015</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-medium mb-2">Our Values</span>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-800 mb-6">
              What We Stand For
            </h2>
            <p className="text-neutral-600">
              Our core values guide everything we do and shape our approach to helping clients succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <i className="fas fa-users text-2xl"></i>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-neutral-800">Client-Centered</h3>
              <p className="text-neutral-600">
                We put our clients' needs first and work closely with them to understand their goals and deliver solutions that exceed expectations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <i className="fas fa-lightbulb text-2xl"></i>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-neutral-800">Innovation</h3>
              <p className="text-neutral-600">
                We embrace new technologies and creative approaches to solve problems and deliver cutting-edge solutions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <i className="fas fa-check-circle text-2xl"></i>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-neutral-800">Quality</h3>
              <p className="text-neutral-600">
                We're committed to delivering high-quality work that meets the highest standards of performance, design, and user experience.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <i className="fas fa-handshake text-2xl"></i>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-neutral-800">Integrity</h3>
              <p className="text-neutral-600">
                We operate with honesty, transparency, and ethical business practices in all our interactions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <i className="fas fa-brain text-2xl"></i>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-neutral-800">Continuous Learning</h3>
              <p className="text-neutral-600">
                We are constantly learning and improving our skills to stay at the forefront of our industry.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <i className="fas fa-chart-line text-2xl"></i>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-neutral-800">Result-Driven</h3>
              <p className="text-neutral-600">
                We focus on delivering measurable results that contribute to our clients' business growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-medium mb-2">Our Team</span>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-800 mb-6">
              Meet the Experts
            </h2>
            <p className="text-neutral-600">
              Our talented team brings together a diverse range of skills and expertise to deliver exceptional digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-md overflow-hidden hover-lift transition-transform">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-1 text-neutral-800">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.position}</p>
                  <p className="text-neutral-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-800 mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-neutral-600 text-lg mb-8">
              Let's discuss how our team can help you achieve your business goals with our comprehensive digital solutions.
            </p>
            <Button asChild size="lg" className="bg-primary/10 hover:bg-primary/90">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
