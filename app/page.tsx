// app/page.js
import React from "react";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import ProjectCarousel from "@/app/components/ProjectCarousel";
export default function Home() {
  const projects = [
    {
      title: "WatchBox",
      description:
        "A responsive movie-tracking application built with Next.js, featuring server-side rendering and MySQL backend. Users can track and organize their favorite movies and shows.",
      tech: ["Next.js", "Node.js", "MySQL", "API Integration"],
      github: "https://github.com/mdmdm1/WatchBox",
      images: [
        "/projects/watchbox1.png",
        "/projects/watchbox2.png",
        "/projects/watchbox3.png",
      ],
      //liveLink: "#", // Add live link if available
    },
    {
      title: "Currency Exchange Manager",
      description:
        "Desktop application for managing currency exchanges with real-time rates and transaction management. Built with Python, PyQt5, and SQLAlchemy.",
      tech: ["Python", "PyQt5", "SQLAlchemy", "Alembic"],
      github: "https://github.com/mdmdm1/Currency_app",
      images: ["/projects/GestiFin2.png", "/projects/GestiFin3.png"],
      //liveLink: "#", // Add live link if available
    },
    {
      title: "E-commerce Website",
      description:
        "Full-stack e-commerce platform with dynamic product listings and user authentication. Built with React.js, Node.js, MongoDB, and Express.js.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/mdmdm1/EcomUnityBay",
      images: [],
      //liveLink: "#", // Add live link if available
    },
    {
      title: "Secure Electronic Voting System",
      description:
        "Decentralized voting application using blockchain technology for secure and transparent voting. Built with Solidity, Ethereum, and Java J2EE.",
      tech: ["Solidity", "Ethereum", "Java J2EE", "MySQL"],
      github: "https://github.com/mdmdm1/Secure-Electronic-Voting-System",
      images: ["/projects/securevoting1.png", "/projects/securevoting2.png"],
      //liveLink: "#", // Add live link if available
    },
    {
      title: "Library Management System",
      description:
        "Java application with Spring Boot for comprehensive and secure management of library books, loans, and members. Utilized MySQL for the database.",
      tech: ["Java", "Spring Boot", "MySQL", "HTML/CSS"],
      github: "https://github.com/mdmdm1/Gestion-bib-Library-Management-",
      images: ["/projects/GestBib.png", "/projects/GestBib.png"],

      //liveLink: "#", // Add live link if available
    },
    {
      title: "Speech Recognition App",
      description:
        "Web-based speech recognition application using Flask and TensorFlow. Achieved 90% accuracy in speech-to-text conversion.",
      tech: ["Python", "Flask", "TensorFlow", "Machine Learning"],
      github: "#",
      images: [],
      //liveLink: "#", // Add live link if available
    },
    {
      title: "Fingerprint Analysis with CNN",
      description:
        "Developed a deep learning model for classifying fingerprints into five categories using Python, OpenCV, and TensorFlow. Achieved 95% accuracy.",
      tech: ["Python", "OpenCV", "TensorFlow", "Deep Learning"],
      github: "#",
      images: [
        "/projects/figerprintanalyser4.png",
        "/projects/figerprintanalyser5.png",
        "/projects/figerprintanalyser3.png",
      ],
      //liveLink: "#", // Add live link if available
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Mohamed Mahmoud Hawbett</h1>
          <h2 className="text-2xl mb-6">Full Stack Developer</h2>
          <p className="text-xl mb-8">
            Building scalable web applications with modern technologies
          </p>
          <div className="flex space-x-4">
            <a
              href="mailto:medmahmoudd1@gmail.com"
              className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download="Mohamed_Mahmoud_Hawbett_Resume.pdf"
              className="flex items-center bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </header>

      {/* Social Links */}
      <div className="bg-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/mohamed-mahmoud-hawbett"
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/mdmdm1"
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-gray-700 font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <ProjectCarousel images={project.images} />
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 text-gray-700 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full text-gray-700 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea className="w-full px-4 py-2 border text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Mohamed Mahmoud Hawbett. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
