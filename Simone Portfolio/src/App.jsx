import "./App.css";
import simoneCv from "./assets/simone-cv.pdf";
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
    { left: "5%",  top: "5%",  duration: 22, delay: 0,   x: [0, 280, 120, -150, 0], y: [0, 180, -200, 120, 0] },
    { left: "15%", top: "80%", duration: 28, delay: 1,   x: [0, 220, -180, 130, 0], y: [0, -280, 120, -180, 0] },
    { left: "30%", top: "20%", duration: 20, delay: 2,   x: [0, -160, 240, -110, 0], y: [0, 160, 220, -130, 0] },
    { left: "50%", top: "60%", duration: 25, delay: 0.5, x: [0, 110, -210, 160, 0], y: [0, -210, 160, -120, 0] },
    { left: "70%", top: "10%", duration: 30, delay: 1.5, x: [0, -190, 90, -160, 0], y: [0, 240, -110, 190, 0] },
    { left: "85%", top: "45%", duration: 18, delay: 0.8, x: [0, -120, -180, 60, 0], y: [0, 160, -190, 110, 0] },
    { left: "60%", top: "85%", duration: 24, delay: 2.5, x: [0, -230, 110, 190, 0], y: [0, -160, -190, 100, 0] },
    { left: "25%", top: "50%", duration: 26, delay: 1.2, x: [0, 200, 110, -160, 0], y: [0, -120, 200, -160, 0] },
    { left: "90%", top: "70%", duration: 22, delay: 0.3, x: [0, -210, -60, 110, 0], y: [0, -190, 110, 140, 0] },
    { left: "40%", top: "40%", duration: 19, delay: 1.8, x: [0, 160, -110, 200, 0], y: [0, 210, -160, 110, 0] },
    { left: "10%", top: "90%", duration: 27, delay: 0.6, x: [0, 260, 110, -120, 0], y: [0, -240, -110, 140, 0] },
    { left: "55%", top: "30%", duration: 23, delay: 2.2, x: [0, -110, 200, -200, 0], y: [0, 160, 110, -210, 0] },
    { left: "78%", top: "90%", duration: 21, delay: 0.9, x: [0, -160, -200, 100, 0], y: [0, -200, 100, -150, 0] },
    { left: "35%", top: "75%", duration: 29, delay: 1.6, x: [0, 110, 200, -160, 0], y: [0, -160, -200, 100, 0] },
    { left: "65%", top: "55%", duration: 17, delay: 2.8, x: [0, -200, 100, 160, 0], y: [0, 110, -210, 150, 0] },
    { left: "20%", top: "35%", duration: 24, delay: 0.4, x: [0, 160, -210, 100, 0], y: [0, 200, 110, -200, 0] },
    { left: "48%", top: "95%", duration: 26, delay: 1.3, x: [0, -110, 200, -160, 0], y: [0, -250, 100, -110, 0] },
    { left: "92%", top: "25%", duration: 20, delay: 2.1, x: [0, -200, -100, 150, 0], y: [0, 200, 150, -110, 0] },
    { left: "3%",  top: "55%", duration: 28, delay: 0.7, x: [0, 210, 150, -110, 0], y: [0, -110, 200, -160, 0] },
    { left: "73%", top: "75%", duration: 22, delay: 1.9, x: [0, -160, 200, -110, 0], y: [0, -200, -110, 150, 0] },
    { left: "8%",  top: "42%", duration: 21, delay: 0.2, x: [0, 130, -180, 90, 0],  y: [0, 220, -130, 170, 0] },
    { left: "44%", top: "12%", duration: 25, delay: 1.1, x: [0, -140, 210, -100, 0], y: [0, 190, 130, -200, 0] },
    { left: "62%", top: "38%", duration: 19, delay: 2.3, x: [0, 170, -120, 200, 0], y: [0, -140, 210, -100, 0] },
    { left: "83%", top: "15%", duration: 27, delay: 0.9, x: [0, -190, 80, -150, 0], y: [0, 170, -200, 130, 0] },
    { left: "17%", top: "62%", duration: 23, delay: 1.7, x: [0, 250, -90, 160, 0],  y: [0, -180, 210, -90, 0] },
    { left: "53%", top: "78%", duration: 18, delay: 0.3, x: [0, -170, 140, -210, 0], y: [0, -130, -190, 110, 0] },
    { left: "95%", top: "50%", duration: 30, delay: 2.6, x: [0, -220, -80, 130, 0], y: [0, 160, -210, 100, 0] },
    { left: "38%", top: "88%", duration: 24, delay: 1.4, x: [0, 180, -130, 220, 0], y: [0, -170, -140, 120, 0] },
    { left: "27%", top: "8%",  duration: 20, delay: 2.9, x: [0, -100, 230, -150, 0], y: [0, 200, 100, -220, 0] },
    { left: "80%", top: "62%", duration: 26, delay: 0.5, x: [0, -230, 110, 180, 0], y: [0, 130, -200, 110, 0] },
    { left: "12%", top: "15%", duration: 22, delay: 1.0, x: [0, 190, 80, -170, 0],  y: [0, -190, 150, -100, 0] },
    { left: "57%", top: "47%", duration: 17, delay: 2.4, x: [0, -150, 200, -80, 0], y: [0, 230, -110, 180, 0] },
    { left: "32%", top: "32%", duration: 29, delay: 0.8, x: [0, 210, -150, 100, 0], y: [0, -100, 230, -140, 0] },
    { left: "68%", top: "22%", duration: 21, delay: 1.5, x: [0, -180, 120, -220, 0], y: [0, 200, -130, 170, 0] },
    { left: "42%", top: "68%", duration: 25, delay: 3.1, x: [0, 130, -200, 170, 0], y: [0, -220, 90, -160, 0] },
    { left: "88%", top: "82%", duration: 23, delay: 0.6, x: [0, -110, -190, 140, 0], y: [0, -150, 180, -110, 0] },
    { left: "7%",  top: "28%", duration: 27, delay: 2.0, x: [0, 240, -100, 180, 0],  y: [0, 140, -220, 100, 0] },
    { left: "76%", top: "48%", duration: 19, delay: 1.2, x: [0, -130, 180, -200, 0], y: [0, 190, -100, 210, 0] },
    { left: "22%", top: "92%", duration: 28, delay: 0.4, x: [0, 200, 130, -160, 0],  y: [0, -200, -130, 110, 0] },
    { left: "96%", top: "8%",  duration: 20, delay: 1.8, x: [0, -200, -90, 160, 0],  y: [0, 220, 100, -190, 0] },
  ];

  return (
    <div className="animated-bg">
      <div className="animated-bg-base" />
      <div className="animated-bg-overlay" />

      {dots.map((dot, index) => (
        <motion.div
          key={index}
          className="tiny-dot"
          style={{
            left: dot.left,
            top: dot.top,
          }}
          animate={{
            x: dot.x,
            y: dot.y,
            opacity: [0.3, 1, 0.5, 0.9, 0.3],
            scale: [1, 1.5, 1, 1.3, 1],
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
                href={simoneCv}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open CV"
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
                    href={simoneCv}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Simone-Pietraroia-CV.pdf"
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