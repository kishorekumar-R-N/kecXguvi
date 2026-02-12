import React, { useState, useEffect } from 'react';
import { Camera, BookOpen, Award, Code, Users, Rocket, ArrowRight, Menu, X, ChevronRight, PlayCircle, Star, Briefcase, GraduationCap, TrendingUp, Clock, Globe, CheckCircle, Zap, Target, Layers } from 'lucide-react';

// Router Component
const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return React.Children.map(children, child => {
    if (child.props.path === currentPath) {
      return child;
    }
    return null;
  });
};

const Route = ({ children }) => children;

const Link = ({ to, children, className = '' }) => (
  <a href={`#${to}`} className={className}>
    {children}
  </a>
);

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Kongu V GUVI
              </div>
              <div className="text-xs text-slate-400 -mt-1">Learn. Build. Excel.</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-300 hover:text-orange-400 transition-colors font-medium">Home</Link>
            <Link to="/guvi" className="text-slate-300 hover:text-orange-400 transition-colors font-medium">GUVI Platform</Link>
            <Link to="/programs" className="text-slate-300 hover:text-orange-400 transition-colors font-medium">Programs</Link>
            <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 font-semibold">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-4 animate-fade-in">
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-orange-400 transition-colors font-medium py-2">Home</Link>
            <Link to="/guvi" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-orange-400 transition-colors font-medium py-2">GUVI Platform</Link>
            <Link to="/programs" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-orange-400 transition-colors font-medium py-2">Programs</Link>
            <a href="#contact" className="block px-6 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-center font-semibold">
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

// Home Page
const HomePage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: GraduationCap, title: "Kongu Excellence", desc: "75+ years of educational leadership" },
    { icon: Code, title: "GUVI Learning", desc: "Industry-relevant tech skills" },
    { icon: Rocket, title: "Career Launch", desc: "100% placement support" }
  ];

  const stats = [
    { number: "75+", label: "Years Legacy", icon: Award },
    { number: "15K+", label: "Students Trained", icon: Users },
    { number: "500+", label: "Industry Partners", icon: Briefcase },
    { number: "95%", label: "Placement Rate", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold backdrop-blur-sm">
                🎓 Kongu Engineering College × GUVI Partnership
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-white via-orange-200 to-pink-200 bg-clip-text text-transparent">
                  Where Traditional
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Meets Tech-First
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Experience the perfect blend of Kongu's academic excellence and GUVI's industry-aligned tech education. Build your future with India's most innovative learning ecosystem.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/guvi" className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 flex items-center space-x-2">
                  <span>Explore GUVI</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#about" className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                  Learn More
                </a>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 pt-4">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`px-4 py-2 rounded-full border transition-all duration-500 ${
                      activeFeature === idx
                        ? 'bg-gradient-to-r from-orange-500/20 to-pink-500/20 border-orange-500/50 scale-105'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <feature.icon className={`w-4 h-4 ${activeFeature === idx ? 'text-orange-400' : 'text-slate-400'}`} />
                      <span className={`text-sm font-medium ${activeFeature === idx ? 'text-orange-300' : 'text-slate-400'}`}>
                        {feature.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Stats Cards */}
            <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="group p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <stat.icon className="w-10 h-10 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-black bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              The Power of <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Partnership</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Combining academic rigor with practical tech skills for unparalleled career readiness
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Kongu Card */}
            <div className="group p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Kongu Engineering College</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Established in 1984, Kongu Engineering College stands as a beacon of excellence in engineering education. With NAAC A++ accreditation and autonomous status, we provide world-class infrastructure and experienced faculty to shape future engineers.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>NAAC A++ Accredited & Autonomous</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>State-of-the-art Labs & Infrastructure</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Industry-Academia Collaboration</span>
                </div>
              </div>
            </div>

            {/* GUVI Card */}
            <div className="group p-8 bg-gradient-to-br from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-3xl hover:border-orange-500/50 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">GUVI Learning Platform</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                An IIT-M & IIM-A incubated EdTech platform revolutionizing tech education in vernacular languages. With 2.5M+ learners globally, GUVI delivers industry-relevant courses in programming, data science, AI/ML, and full-stack development.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>IIT-M & IIM-A Incubated</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>2.5M+ Global Learners</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>Industry-Recognized Certifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 border border-orange-500/30 rounded-3xl backdrop-blur-sm">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are building successful tech careers with our integrated learning approach
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/guvi" className="px-10 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300">
                Start Learning Today
              </Link>
              <Link to="/programs" className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p className="text-lg mb-4">© 2024 Kongu Engineering College × GUVI. All rights reserved.</p>
          <p className="text-sm">Empowering the next generation of tech leaders</p>
        </div>
      </footer>
    </div>
  );
};

// GUVI Platform Page
const GUVIPage = () => {
  const courses = [
    {
      title: "Full Stack Development",
      icon: Layers,
      duration: "6 months",
      level: "Beginner to Advanced",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Science & AI",
      icon: Target,
      duration: "8 months",
      level: "Intermediate",
      skills: ["Python", "Machine Learning", "Deep Learning", "NLP"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud Computing",
      icon: Globe,
      duration: "5 months",
      level: "Intermediate",
      skills: ["AWS", "Azure", "DevOps", "Kubernetes"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Mobile App Development",
      icon: Zap,
      duration: "6 months",
      level: "Beginner to Advanced",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      color: "from-green-500 to-teal-500"
    }
  ];

  const benefits = [
    { icon: PlayCircle, title: "Learn in Your Language", desc: "Content available in Tamil, Hindi, Telugu & more" },
    { icon: Award, title: "Industry Certifications", desc: "Recognized credentials from top companies" },
    { icon: Users, title: "Live Mentorship", desc: "Direct interaction with industry experts" },
    { icon: Briefcase, title: "100% Placement Support", desc: "Dedicated career services & job assistance" },
    { icon: Clock, title: "Self-Paced Learning", desc: "Study at your own convenience" },
    { icon: Star, title: "Hands-on Projects", desc: "Build real-world applications" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer @ Google",
      content: "GUVI's practical approach helped me land my dream job. The projects and mentorship were invaluable.",
      rating: 5
    },
    {
      name: "Raj Kumar",
      role: "Data Scientist @ Amazon",
      content: "The Tamil content made learning complex concepts so much easier. Best investment in my career!",
      rating: 5
    },
    {
      name: "Aisha Patel",
      role: "Full Stack Developer @ Microsoft",
      content: "From zero coding knowledge to working at Microsoft - GUVI made it possible in just 8 months.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 rounded-full text-orange-400 font-bold mb-6 backdrop-blur-sm">
              ✨ IIT-M & IIM-A Incubated Platform
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                GUVI Learning Platform
              </span>
            </h1>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              India's first vernacular EdTech platform offering industry-relevant tech courses in your native language. Join 2.5 million+ learners transforming their careers.
            </p>
            <div className="flex flex-wrap gap-6 justify-center items-center text-slate-300">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-orange-400" />
                <span className="font-semibold">2.5M+ Learners</span>
              </div>
              <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-orange-400" />
                <span className="font-semibold">500+ Industry Partners</span>
              </div>
              <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-orange-400" />
                <span className="font-semibold">4.8/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black text-center text-white mb-16">
            Why Choose <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">GUVI</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
              >
                <benefit.icon className="w-12 h-12 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Industry-Leading <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Programs</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Master in-demand tech skills with hands-on projects, live mentorship, and career support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="group p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl hover:border-orange-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                  <course.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{course.title}</h3>
                <div className="flex items-center space-x-4 mb-6 text-sm text-slate-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                  <span>{course.level}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black text-center text-white mb-16">
            Success <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Stories</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl hover:border-orange-500/50 transition-all duration-500"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-orange-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 border border-orange-500/30 rounded-3xl backdrop-blur-sm">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Start Your Tech Journey Today
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get access to 100+ courses, live mentorship, and career support. Learn in your language, at your pace.
            </p>
            <button className="px-12 py-5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300">
              Enroll Now - Limited Spots
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p className="text-lg mb-4">© 2024 GUVI - An IIT Madras & IIM Ahmedabad Incubated Company</p>
          <p className="text-sm">Transforming lives through vernacular tech education</p>
        </div>
      </footer>
    </div>
  );
};

// Programs Page
const ProgramsPage = () => {
  const programs = [
    {
      title: "Integrated B.Tech + Tech Certification",
      duration: "4 Years",
      type: "Degree Program",
      icon: GraduationCap,
      highlights: [
        "B.Tech from Kongu Engineering College",
        "Industry certifications from GUVI",
        "6-month internship with top companies",
        "Guaranteed placement assistance"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Professional Bootcamp Programs",
      duration: "3-6 Months",
      type: "Intensive Training",
      icon: Rocket,
      highlights: [
        "Full Stack, Data Science, Cloud tracks",
        "100% hands-on project-based learning",
        "Live sessions with industry mentors",
        "Job guarantee with partner companies"
      ],
      color: "from-orange-500 to-pink-500"
    },
    {
      title: "Weekend Upskilling Programs",
      duration: "3-4 Months",
      type: "Part-time Learning",
      icon: Clock,
      highlights: [
        "For working professionals",
        "Weekend live classes + self-paced content",
        "Industry-recognized certifications",
        "Career transition support"
      ],
      color: "from-green-500 to-teal-500"
    }
  ];

  const learningPath = [
    { step: "1", title: "Foundation", desc: "Master programming fundamentals" },
    { step: "2", title: "Specialization", desc: "Choose your tech domain" },
    { step: "3", title: "Projects", desc: "Build real-world applications" },
    { step: "4", title: "Certification", desc: "Get industry credentials" },
    { step: "5", title: "Placement", desc: "Land your dream job" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Our Programs
            </span>
          </h1>
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Flexible learning paths designed for students, professionals, and career changers
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <div
                key={idx}
                className="group p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm text-orange-400 font-semibold mb-2">{program.type}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                <div className="flex items-center space-x-2 text-slate-400 mb-6">
                  <Clock className="w-4 h-4" />
                  <span>{program.duration}</span>
                </div>
                <div className="space-y-3 mb-8">
                  {program.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black text-center text-white mb-16">
            Your Learning <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-8 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-5 gap-8">
              {learningPath.map((phase, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-500 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-black text-white mb-4 mx-auto">
                      {phase.step}
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-2">{phase.title}</h3>
                    <p className="text-slate-400 text-sm text-center">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 border border-orange-500/30 rounded-3xl backdrop-blur-sm">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Ready to Begin?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Choose the program that fits your goals and start building your tech career today
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300">
                Schedule a Call
              </button>
              <Link to="/guvi" className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
                Explore GUVI Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p className="text-lg mb-4">© 2024 Kongu Engineering College × GUVI. All rights reserved.</p>
          <p className="text-sm">Building tomorrow's tech leaders, today</p>
        </div>
      </footer>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      <div className="bg-slate-950 min-h-screen">
        <Navigation />
        <Router>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/guvi">
            <GUVIPage />
          </Route>
          <Route path="/programs">
            <ProgramsPage />
          </Route>
        </Router>
      </div>
    </>
  );
};

export default App;
