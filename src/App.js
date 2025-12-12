import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Code, Briefcase, GraduationCap, ChevronDown, Menu, X, Quote } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(quoteInterval);
  }, []);

  const skills = {
    frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Redux', 'MobX', 'jQuery'],
    backend: ['Node.js', 'Java Spring Boot', 'Python Flask', 'Express', 'GraphQL', 'gRPC'],
    databases: ['PostgreSQL', 'MongoDB', 'SQL'],
    tools: ['Git', 'AWS', 'PySpark', 'Pandas', 'Jest']
  };

  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House"
    },
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson"
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler"
    },
    {
      text: "Learning never exhausts the mind.",
      author: "Leonardo da Vinci"
    }
  ];

  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Deerhold',
      location: 'Kathmandu',
      period: 'Sep 2021 – Nov 2024',
      highlights: [
        'Led full-stack development for multiple US Healthcare client projects',
        'Built high-performance viewers for large datasets with dynamic query handling',
        'Developed member and plan cost calculation tools',
        'Managed and trained development teams on React, Next.js, Node, and Java',
        'Led JSON MRF processing with Java and data ETL with PySpark'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'BitsBeat IT Solution',
      location: 'Kathmandu',
      period: 'Sep 2018 – Aug 2021',
      highlights: [
        'Developed web applications using Redux framework and RESTful APIs',
        'Implemented gRPC/Protobuf for optimized data transmission',
        'Performed code reviews and bug fixes with focus on UX',
        'Built REST APIs using Node.js and Express',
        'Worked in agile methodologies for incremental development'
      ]
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              RS
            </h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'quotes', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-purple-400 transition-colors ${activeSection === section ? 'text-purple-400' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {['home', 'about', 'experience', 'quotes', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize hover:text-purple-400 transition-colors py-2"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Rashmina Shrestha
            </h2>
            <p className="text-2xl md:text-3xl text-purple-300 mb-6">Senior Software Engineer</p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Transforming complex business challenges into elegant, scalable solutions. I bridge the gap between cutting-edge technology and real-world impact, leading teams to build systems that drive meaningful results.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:rashminashrestha@gmail.com" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors flex items-center space-x-2">
                <Mail size={20} />
                <span>Get in Touch</span>
              </a>
              <button onClick={() => scrollToSection('experience')} className="border border-purple-400 hover:bg-purple-400/20 px-6 py-3 rounded-lg transition-colors">
                View Work
              </button>
            </div>
          </div>
          <button onClick={() => scrollToSection('about')} className="animate-bounce mt-12">
            <ChevronDown size={32} className="text-purple-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl">
          <h3 className="text-4xl font-bold mb-8 text-center">About Me</h3>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              As a dedicated full-stack developer with over 6 years of experience, I have a passion for improving existing systems and applications while creating collaborative work environments. I thrive on solving complex problems across diverse domains, from healthcare data systems to enterprise applications, always focusing on building scalable and efficient solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I find fulfillment in learning about cutting-edge technologies and continuously expanding my expertise. My journey has involved leading cross-functional teams, architecting robust applications that handle large-scale data processing, and implementing high-performance solutions that drive business value. Whether it's optimizing complex queries, building intuitive user interfaces, or designing resilient backend systems, I bring a holistic approach to every project.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-3">
                <Briefcase className="text-purple-400 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Experience</h4>
                  <p className="text-gray-400">6+ years in full-stack development</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Code className="text-purple-400 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Expertise</h4>
                  <p className="text-gray-400">Enterprise & Data-Intensive Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full">
          <h3 className="text-4xl font-bold mb-12 text-center">Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-purple-400">{exp.title}</h4>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-6">
                  {exp.highlights.map((highlight, hidx) => (
                    <li key={hidx} className="flex items-start space-x-2 text-gray-300">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="text-purple-400" size={32} />
              <h4 className="text-2xl font-bold">Education</h4>
            </div>
            <div>
              <h5 className="text-xl font-semibold text-purple-400">Bachelor in Computer Science and Information Technology</h5>
              <p className="text-gray-300">Patan Multiple Campus</p>
              <p className="text-gray-400">Batch of 2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quotes Section */}
      <section id="quotes" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-purple-900/30 to-slate-900/30">
        <div className="max-w-4xl w-full">
          <h3 className="text-4xl font-bold mb-12 text-center">Words That Inspire</h3>
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20 min-h-[300px] flex flex-col items-center justify-center">
              <Quote className="text-purple-400 mb-6" size={48} />
              <blockquote className="text-center">
                <p className="text-2xl md:text-3xl text-gray-200 font-light italic mb-6 leading-relaxed">
                  "{quotes[currentQuote].text}"
                </p>
                <footer className="text-purple-400 text-xl">
                  — {quotes[currentQuote].author}
                </footer>
              </blockquote>

              {/* Quote navigation dots */}
              <div className="flex space-x-2 mt-8">
                {quotes.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentQuote(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${currentQuote === idx ? 'bg-purple-400 w-8' : 'bg-purple-400/30 hover:bg-purple-400/50'
                      }`}
                    aria-label={`View quote ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Manual navigation arrows */}
            <button
              onClick={() => setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-purple-600/20 hover:bg-purple-600/40 p-3 rounded-full transition-colors border border-purple-500/30"
              aria-label="Previous quote"
            >
              <ChevronDown className="rotate-90" size={24} />
            </button>
            <button
              onClick={() => setCurrentQuote((prev) => (prev + 1) % quotes.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-purple-600/20 hover:bg-purple-600/40 p-3 rounded-full transition-colors border border-purple-500/30"
              aria-label="Next quote"
            >
              <ChevronDown className="-rotate-90" size={24} />
            </button>
          </div>

          <p className="text-center text-gray-400 mt-8 text-sm">
            Auto-rotating every 6 seconds • Click dots or arrows to navigate
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full">
          <h3 className="text-4xl font-bold mb-12 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                <h4 className="text-xl font-bold text-purple-400 capitalize mb-4">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span key={idx} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl w-full text-center">
          <h3 className="text-4xl font-bold mb-8">Let's Connect</h3>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="mailto:rashminashrestha@gmail.com" className="flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-700/50 px-6 py-3 rounded-lg transition-colors border border-purple-500/20">
              <Mail size={20} />
              <span>rashminashrestha@gmail.com</span>
            </a>
            <a href="tel:+9779860877298" className="flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-700/50 px-6 py-3 rounded-lg transition-colors border border-purple-500/20">
              <Phone size={20} />
              <span>+977 9860877298</span>
            </a>
          </div>
          <div className="flex justify-center space-x-6 mt-12">
            <a href="https://github.com/rashmina34" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github size={32} />
            </a>
            <a href="https://www.linkedin.com/in/rashmina-s-b58333189/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 py-8 text-center text-gray-400 border-t border-purple-500/20">
        <p>© {new Date().getFullYear()} Rashmina Shrestha. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}