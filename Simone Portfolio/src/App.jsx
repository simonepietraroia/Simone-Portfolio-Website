import "./App.css";
import { motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Code2,
  Github,
  GraduationCap,
  HeartHandshake,
  Linkedin,
  Mail,
  User,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  SiCss,
  SiDjango,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
  SiWordpress,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi, TbBrandVscode } from "react-icons/tb";
import { BsStars } from "react-icons/bs";

function RevealSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.18 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 55, scale: 0.97 }}
      animate={
        isVisible
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 55, scale: 0.97 }
      }
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TypewriterText({
  text,
  className = "",
  delay = 0,
  speed = 90,
  cursorClassName = "",
}) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout;
    let interval;

    timeout = setTimeout(() => {
      let index = 0;

      interval = setInterval(() => {
        index += 1;
        setDisplayedText(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(interval);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay, speed]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
        className={cursorClassName}
      >
        |
      </motion.span>
    </span>
  );
}

function CountUpNumber({ end, duration = 1600, suffix = "", className = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easedProgress * end);

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  );
}

function AnimatedBackground() {
  const dots = [
    {
      size: 220,
      left: "5%",
      top: "10%",
      duration: 20,
      delay: 0,
      x: [0, 40, -20, 0],
      y: [0, -25, 20, 0],
    },
    {
      size: 180,
      left: "18%",
      top: "70%",
      duration: 24,
      delay: 1,
      x: [0, -25, 30, 0],
      y: [0, 20, -20, 0],
    },
    {
      size: 260,
      left: "75%",
      top: "15%",
      duration: 26,
      delay: 2,
      x: [0, 25, -35, 0],
      y: [0, 30, -20, 0],
    },
    {
      size: 200,
      left: "82%",
      top: "72%",
      duration: 22,
      delay: 0.5,
      x: [0, -30, 15, 0],
      y: [0, -18, 25, 0],
    },
    {
      size: 160,
      left: "45%",
      top: "18%",
      duration: 18,
      delay: 1.5,
      x: [0, 20, -15, 0],
      y: [0, 15, -10, 0],
    },
    {
      size: 240,
      left: "55%",
      top: "55%",
      duration: 28,
      delay: 0.7,
      x: [0, -35, 18, 0],
      y: [0, 22, -18, 0],
    },
    {
      size: 130,
      left: "30%",
      top: "45%",
      duration: 16,
      delay: 0.2,
      x: [0, 15, -10, 0],
      y: [0, -12, 10, 0],
    },
    {
      size: 140,
      left: "68%",
      top: "38%",
      duration: 21,
      delay: 1.8,
      x: [0, 18, -12, 0],
      y: [0, -14, 16, 0],
    },
  ];

  const tinyDots = [
    { left: "12%", top: "25%", duration: 5.5, delay: 0.2 },
    { left: "22%", top: "55%", duration: 6.2, delay: 1.4 },
    { left: "38%", top: "30%", duration: 4.8, delay: 0.6 },
    { left: "58%", top: "18%", duration: 5.8, delay: 1.9 },
    { left: "66%", top: "64%", duration: 6.6, delay: 0.8 },
    { left: "82%", top: "46%", duration: 5.2, delay: 2.1 },
    { left: "92%", top: "76%", duration: 6.8, delay: 1.1 },
    { left: "8%", top: "72%", duration: 5.1, delay: 2.4 },
    { left: "48%", top: "82%", duration: 6, delay: 0.4 },
    { left: "74%", top: "88%", duration: 5.6, delay: 1.7 },
  ];

  return (
    <div className="animated-bg">
      <div className="animated-bg-base" />
      <div className="animated-bg-overlay" />

      {dots.map((dot, index) => (
        <motion.div
          key={index}
          className="bg-dot"
          style={{
            left: dot.left,
            top: dot.top,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
          }}
          animate={{
            x: dot.x,
            y: dot.y,
            opacity: [0.4, 0.75, 0.5, 0.4],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}

      {tinyDots.map((dot, index) => (
        <motion.div
          key={`tiny-${index}`}
          className="tiny-dot"
          style={{
            left: dot.left,
            top: dot.top,
          }}
          animate={{
            opacity: [0.25, 1, 0.25],
            scale: [1, 1.5, 1],
            y: [0, -8, 0],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}

      <div className="animated-bg-vignette" />
    </div>
  );
}

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "icon-orange" },
      { name: "CSS", icon: SiCss, color: "icon-blue" },
      { name: "SASS", icon: SiSass, color: "icon-pink" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "icon-cyan" },
      { name: "JavaScript", icon: SiJavascript, color: "icon-yellow" },
      { name: "TypeScript", icon: SiTypescript, color: "icon-blue-light" },
      { name: "React", icon: SiReact, color: "icon-cyan-light" },
      { name: "Next.js", icon: SiNextdotjs, color: "icon-white" },
      { name: "Vite", icon: SiVite, color: "icon-violet" },
      { name: "Webpack", icon: SiWebpack, color: "icon-sky" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Python", icon: SiPython, color: "icon-yellow-soft" },
      { name: "Java", icon: FaJava, color: "icon-orange" },
      { name: "Node.js", icon: SiNodedotjs, color: "icon-green" },
      { name: "Django", icon: SiDjango, color: "icon-green-light" },
      { name: "REST APIs", icon: TbApi, color: "icon-cyan-light" },
      { name: "WordPress", icon: SiWordpress, color: "icon-sky" },
      { name: "MySQL", icon: SiMysql, color: "icon-blue-light" },
    ],
  },
  {
    title: "Apps & Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "icon-orange" },
      { name: "GitHub", icon: SiGithub, color: "icon-white" },
      { name: "VS Code", icon: TbBrandVscode, color: "icon-blue-light" },
      { name: "Postman", icon: SiPostman, color: "icon-orange-soft" },
      { name: "Figma", icon: SiFigma, color: "icon-pink" },
      { name: "Docker", icon: SiDocker, color: "icon-sky" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", icon: BsStars, color: "icon-cyan-light" },
      { name: "Leadership", icon: BsStars, color: "icon-violet-light" },
      { name: "Teamwork", icon: BsStars, color: "icon-pink-light" },
      { name: "Problem Solving", icon: BsStars, color: "icon-amber" },
      { name: "Adaptability", icon: BsStars, color: "icon-emerald" },
    ],
  },
];

const projects = [
  {
    title: "Card Fraud Detection",
    description:
      "A machine learning project focused on detecting fraudulent card transactions using data analysis and predictive modelling to identify suspicious behaviour patterns.",
    tech: "Python • Machine Learning • Data Analysis",
    stack: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Classification"],
    link: "https://github.com/simonepietraroia/Card-Fraud",
  },
  {
    title: "Sky TV Project",
    description:
      "A development project built around the Sky TV brief, showcasing practical problem solving, structured implementation, and user-focused software design.",
    tech: "Software Development • Frontend/Backend",
    stack: [
      "JavaScript",
      "Frontend Development",
      "Backend Logic",
      "UI Design",
      "Problem Solving",
    ],
    link: "https://github.com/simonepietraroia/Sky-TV-Project",
  },
  {
    title: "Stock Price Forcasting With an LSTM Model",
    description:
      "An analytical project exploring how sentiment in financial news can influence markets, combining text analysis, data processing, and insight generation.",
    tech: "Python • NLP • Sentiment Analysis • Finance",
    stack: [
      "Python",
      "NLP",
      "Sentiment Analysis",
      "Pandas",
      "Financial Analysis",
    ],
    link: "https://github.com/simonepietraroia/Financial-News-Sentiment-Analysis-for-Market-Impact",
  },
  {
    title: "Voltage Instrument Task",
    description:
      "A technical project that demonstrates structured coding, engineering logic, and problem solving through implementation of a voltage-related instrument task.",
    tech: "Python • Engineering Logic • Problem Solving",
    stack: [
      "Python",
      "Engineering Logic",
      "Data Handling",
      "Debugging",
      "Problem Solving",
    ],
    link: "https://github.com/simonepietraroia/Voltage_instrument_task",
  },
];

const experience = [
  {
    role: "Software Engineer Placement",
    company: "BT Group",
    period: "Sep 2025 — Jun 2026",
    text: "Worked with product owners and business teams to deliver digital solutions, modernised legacy applications with Azure, and improved reliability through debugging, testing, and refactoring.",
  },
  {
    role: "Data Analyst Intern",
    company: "Smart Zebra App",
    period: "Jul 2024 — Aug 2024",
    text: "Integrated Mixpanel and Google Analytics, improved event tracking accuracy, and supported data-driven decisions to enhance campaign performance and user engagement.",
  },
];

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Tech Skills" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  return (
    <div className="app">
      <AnimatedBackground />

      <div className="app-content">
        <nav className="navbar">
          <div className="container navbar-inner">
            <a href="#top" className="brand">
              Simone
            </a>

            <div className="nav-links">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="nav-link">
                  {section.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <section id="top" className="hero">
          <div className="container hero-inner">
            <RevealSection className="hero-reveal">
              <h1 className="hero-title">Simone Pietraroia</h1>

              <p className="hero-subtitle">
                <TypewriterText
                  text="Software Engineer & Product Manager"
                  delay={100}
                  speed={65}
                  className="typewriter-text"
                  cursorClassName="typewriter-cursor"
                />
              </p>

              <div className="hero-socials">
                <a
                  href="https://github.com/simonepietraroia"
                  aria-label="GitHub"
                  className="icon-btn icon-btn-cyan"
                >
                  <Github className="icon-md" />
                </a>

                <a
                  href="https://www.linkedin.com/in/simone-pietraroia-358231236/"
                  aria-label="LinkedIn"
                  className="icon-btn icon-btn-violet"
                >
                  <Linkedin className="icon-md" />
                </a>

                <a
                  href="/SIMONE.PIETRAROIA.CV.pdf"
                  download="SIMONE.PIETRAROIA.CV.pdf"
                  aria-label="Download CV"
                  className="icon-btn-text icon-btn-amber"
                >
                  CV
                </a>
              </div>

              <div className="hero-stats">
                <div className="stat">
                  <p className="stat-number">10+</p>
                  <p className="stat-label">Projects Delivered</p>
                </div>

                <div className="stat">
                  <p className="stat-number">3+</p>
                  <p className="stat-label">Years of Experience</p>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <RevealSection>
              <div className="section-label">
                <User className="icon-sm" />
                <span>About Me</span>
              </div>
            </RevealSection>

            <div className="about-grid">
              <RevealSection className="glass-card about-main-card">
                <div className="about-icon-wrap">
                  <div className="about-icon">
                    <User className="icon-lg" />
                  </div>
                </div>

                <p className="about-text">
                  I am a Computer Science student in London with experience
                  across software engineering, analytics, and product-focused
                  development. I enjoy solving real problems, learning fast, and
                  creating systems that improve how people interact with
                  technology.
                </p>

                <div className="about-stats">
                  <div className="info-card">
                    <p className="info-number">13+</p>
                    <p className="info-label">Countries Lived</p>
                  </div>

                  <div className="small-info-grid">
                    <div className="info-card">
                      <p className="info-number">
                        <CountUpNumber end={23} duration={1800} />
                      </p>
                      <p className="info-label">Age</p>
                    </div>

                    <div className="info-card">
                      <p className="info-number">Italy</p>
                      <p className="info-label">From</p>
                    </div>
                  </div>
                </div>
              </RevealSection>

              <div className="about-side">
                <RevealSection delay={0.08} className="glass-card feature-card">
                  <div className="card-heading">
                    <GraduationCap className="icon-sm cyan" />
                    <h3>Education</h3>
                  </div>

                  <div className="education-grid">
                    <div className="education-card education-card-cyan">
                      <div className="glow glow-cyan" />
                      <div className="education-content">
                        <div className="education-badge cyan-badge">
                          <GraduationCap className="icon-md" />
                        </div>

                        <h4>University of Westminster</h4>

                        <p className="education-meta">
                          BSc Computer Science (Honours) • Sep 2023 — Jun 2027
                        </p>

                        <p className="education-text">
                          Relevant study areas include software development,
                          machine learning, algorithms, database systems,
                          client-server architecture, and web design.
                        </p>
                      </div>
                    </div>

                    <div className="education-card education-card-pink">
                      <div className="glow glow-pink" />
                      <div className="education-content">
                        <div className="education-badge pink-badge">
                          <BookOpen className="icon-md" />
                        </div>

                        <h4>Code Institute</h4>

                        <p className="education-meta pink-meta">
                          Full Stack Software Development • Jan 2022 — Jan 2023
                        </p>

                        <p className="education-text">
                          Completed industry-aligned full-stack training
                          covering development, UX/UI, design thinking, data
                          handling, and project-based delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealSection>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <RevealSection>
              <div className="section-label">
                <Briefcase className="icon-sm" />
                <span>Experience</span>
              </div>
            </RevealSection>

            <div className="timeline">
              <div className="timeline-line" />

              {experience.map((item, index) => (
                <RevealSection key={item.role} delay={index * 0.08}>
                  <div className="timeline-card">
                    <div className="timeline-dot" />

                    <div className="timeline-top">
                      <div>
                        <h3>{item.role}</h3>
                        <p className="timeline-company">{item.company}</p>
                      </div>

                      <p className="timeline-period">{item.period}</p>
                    </div>

                    <p className="timeline-text">{item.text}</p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <RevealSection>
              <div className="section-label">
                <Code2 className="icon-sm" />
                <span>Projects</span>
              </div>
            </RevealSection>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <RevealSection key={project.title} delay={index * 0.08}>
                  <div className="project-card">
                    <h3>{project.title}</h3>

                    <p className="project-description">{project.description}</p>

                    <p className="project-tech">{project.tech}</p>

                    <div className="stack-list">
                      {project.stack.map((item) => (
                        <span key={item} className="stack-pill">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="project-footer">
                      <a href={project.link} className="github-btn">
                        <Github className="icon-xs" />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <RevealSection>
              <div className="skills-heading">
                <h2>
                  Skills<span className="accent">.</span>
                </h2>
              </div>
            </RevealSection>

            <div className="skills-groups">
              {skillCategories.map((category, categoryIndex) => (
                <RevealSection key={category.title} delay={categoryIndex * 0.08}>
                  <div>
                    <h3 className="skills-category-title">{category.title}</h3>

                    <div className="skills-list">
                      {category.skills.map((skill, skillIndex) => {
                        const Icon = skill.icon;

                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.2 }}
                            transition={{
                              duration: 0.3,
                              delay: skillIndex * 0.03,
                            }}
                            className="skill-pill"
                          >
                            <Icon className={`skill-icon ${skill.color}`} />
                            <span>{skill.name}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-container">
            <RevealSection>
              <div className="contact-card">
                <div className="section-label center">
                  <HeartHandshake className="icon-sm" />
                  <span>Contact</span>
                </div>

                <h2 className="contact-title">
                  Let’s build something meaningful.
                </h2>

                <p className="contact-text">
                  I’m open to graduate opportunities, collaborations, and
                  conversations around software engineering, AI, and product
                  development.
                </p>

                <div className="hero-socials">
                  <a
                    href="mailto:simonepietraroia21@gmail.com"
                    className="contact-email-btn"
                  >
                    <Mail className="icon-xs with-margin" />
                    Email Me
                  </a>

                  <a
                    href="https://github.com/simonepietraroia"
                    aria-label="GitHub"
                    className="icon-btn icon-btn-cyan"
                  >
                    <Github className="icon-md" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/simone-pietraroia-358231236/"
                    aria-label="LinkedIn"
                    className="icon-btn icon-btn-violet"
                  >
                    <Linkedin className="icon-md" />
                  </a>

                  <a
                    href="/SIMONE.PIETRAROIA.CV.pdf"
                    download="SIMONE.PIETRAROIA.CV.pdf"
                    aria-label="Download CV"
                    className="icon-btn-text icon-btn-amber"
                  >
                    CV
                  </a>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>
      </div>
    </div>
  );
}