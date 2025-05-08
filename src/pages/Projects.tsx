
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Hotel Booking",
    description: "A full-featured online Booking platform built with React and Node.js",
    image: "/assets/GrandAzure.png", // ✅ Corrected
    category: "Web Development",
    link: "http://hotelazure.netlify.app",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 2,
    title: "Portfolio", 
    description: "A modern portfolio website with animations and responsive design",
    image: "/assets/ZarqanPortfolio.png",
    category: "UI/UX Design",
    link: "http://Zarqan.netlify.app",
    technologies: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 3,
    title: "Nas Institue",
    description: "An Astonishing website of education Institute",
    image: "/assets/NasInstitute.png",
    category: "Web Development",
    link: "https://nasrevolutioncentre.netlify.app/",
    technologies: ["React", "Node.js", "Firebase"]
  }
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects - Freelantix</title>
        <meta name="description" content="Explore our portfolio of web development and digital solutions projects." />
      </Helmet>

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-neutral-800 mb-4">
              Our Projects
            </h1>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Explore our portfolio of successful projects where we've helped businesses 
              achieve their digital goals through innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover-lift"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-heading font-semibold text-xl mb-2 text-neutral-800">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-primary font-medium"
                  >
                    View Project <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
