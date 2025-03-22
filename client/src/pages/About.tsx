import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/lib/data";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-tertiary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat leading-tight mb-6">
              We're a Team of Digital Enthusiasts
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Get to know the passionate experts behind Freelantix and our mission to transform the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 font-montserrat">How We Started</h2>
              <p className="text-gray-600 mb-6">
                Freelantix was founded in 2015 with a simple mission: to help businesses leverage the power of digital technology to grow and succeed. What started as a small team of three passionate digital enthusiasts has now grown into a diverse team of experts across various digital disciplines.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've had the privilege of working with businesses of all sizes, from startups to established enterprises, across various industries. Our approach has always been to understand our clients' unique challenges and goals, and develop customized solutions that deliver measurable results.
              </p>
              <p className="text-gray-600">
                Today, we continue to innovate and evolve, keeping pace with the rapidly changing digital landscape to ensure our clients stay ahead of the curve.
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600" 
                  alt="Freelantix team in the early days" 
                  className="rounded-xl shadow-xl" 
                  width="600" 
                  height="400" 
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary opacity-10 rounded-lg z-0"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary opacity-10 rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission and Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full">Our Principles</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 font-montserrat">Mission, Vision & Values</h2>
            <p className="text-gray-600 mt-4 text-lg">The core principles that guide our work and relationships</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 font-montserrat">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses through innovative digital solutions that drive growth, enhance user experience, and create lasting value.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-eye text-2xl text-secondary"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 font-montserrat">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading force in digital transformation, setting industry standards for creativity, innovation, and client success.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-tertiary/10 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-handshake text-2xl text-tertiary"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 font-montserrat">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-tertiary mr-2 mt-1"></i>
                  <span>Integrity in all our interactions</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-tertiary mr-2 mt-1"></i>
                  <span>Innovation that drives results</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-tertiary mr-2 mt-1"></i>
                  <span>Client success as our priority</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-tertiary mr-2 mt-1"></i>
                  <span>Continuous learning and improvement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 font-montserrat">Meet the Experts</h2>
            <p className="text-gray-600 mt-4 text-lg">Passionate professionals dedicated to your digital success</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="h-64 overflow-hidden">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1 font-montserrat">{member.name}</h3>
                  <p className="text-primary mb-4">{member.position}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="flex space-x-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-primary transition duration-300">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-gray-400 hover:text-primary transition duration-300">
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-gray-400 hover:text-primary transition duration-300">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 font-montserrat">What Sets Us Apart</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <i className="fas fa-users-cog text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 font-montserrat">Expert Team</h4>
                    <p className="text-gray-600">Our specialists bring years of expertise across various digital disciplines to every project.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-lg mr-4">
                    <i className="fas fa-lightbulb text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 font-montserrat">Innovative Approach</h4>
                    <p className="text-gray-600">We stay ahead of digital trends to ensure your business remains competitive and relevant.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-tertiary/10 p-3 rounded-lg mr-4">
                    <i className="fas fa-chart-line text-tertiary"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 font-montserrat">Results-Driven</h4>
                    <p className="text-gray-600">We focus on delivering measurable results that contribute directly to your business goals.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <i className="fas fa-handshake text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 font-montserrat">Client Partnership</h4>
                    <p className="text-gray-600">We view our client relationships as partnerships, working collaboratively to achieve shared success.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=300" 
                  alt="Team meeting" 
                  className="rounded-lg shadow-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=300" 
                  alt="Digital workspace" 
                  className="rounded-lg shadow-md mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=300" 
                  alt="Collaborative environment" 
                  className="rounded-lg shadow-md mt-4"
                />
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=300" 
                  alt="Creative teamwork" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-tertiary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Ready to Work with Us?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's start a conversation about how we can help your business achieve its digital goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-6">
                  Contact Us Today
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
