"use client"; // jeśli używasz funkcji client-side, np. framer-motion

import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { motion } from "framer-motion";
import { useEffect } from "react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  // Tylko aktywacja smooth scroll
  useEffect(() => {
    // Aktywacja smooth scroll
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Animacje dla elementów
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen w-full bg-background text-foreground overflow-x-hidden rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Usunięto kompletnie tło z animacjami */}
      
      {/* Główna zawartość strony */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <section className="flex flex-col items-center justify-center gap-12 py-12 px-4 md:px-6">
          {/* Hero Section */}
          <motion.div 
            className="w-full max-w-6xl rounded-2xl bg-black/50 backdrop-blur-lg p-8 shadow-lg border border-content3/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1 text-center lg:text-left">
                <motion.h1 
                  className="text-4xl font-bold text-foreground"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      transition: { duration: 0.5 } 
                    }
                  }}
                >
                  Mateusz Wirkus
                </motion.h1>
                <motion.div 
                  className="mt-2 text-2xl font-medium text-foreground/80"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      transition: { duration: 0.5, delay: 0.1 } 
                    }
                  }}
                >
                  Front-End Developer
                </motion.div>
                <motion.div 
                  className="mt-4 text-content3 max-w-xl leading-relaxed dark"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      transition: { duration: 0.5, delay: 0.2 } 
                    }
                  }}
                >
                  Developing modern and responsive web applications with React, Tailwind CSS, and Next.js. Focused on creating clean code, optimal user experiences, and scalable solutions.
                </motion.div>

                <motion.div 
                  className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                      opacity: 1, 
                      transition: { 
                        staggerChildren: 0.1,
                        delayChildren: 0.3
                      } 
                    }
                  }}
                >
                  <motion.div variants={fadeInUp}>
                    <Link
                      isExternal
                      className={buttonStyles({
                        color: "primary",
                        radius: "md",
                        variant: "flat",
                        size: "md",
                      })}
                      href={siteConfig.links.github}
                    >
                      <GithubIcon size={18} />
                      GitHub
                    </Link>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <Link
                      isExternal
                      className={buttonStyles({
                        color: "default", 
                        radius: "md",
                        variant: "flat",
                        size: "md",
                      })}
                      href={siteConfig.links.linkedin}
                    >
                      LinkedIn
                    </Link>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <Link
                      className={buttonStyles({
                        variant: "bordered",
                        radius: "md",
                        size: "md",
                      })}
                      href="#contact"
                    >
                      Contact
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              {/* Professional profile image */}
              <motion.div 
                className="relative w-48 h-48 rounded-full overflow-hidden border border-content3/20 shadow-lg"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: "spring" }}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary-400/40 to-secondary-400/40 flex items-center justify-center">
                  <span className="text-3xl font-bold text-foreground/80">MN</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            id="skills" 
            className="w-full max-w-6xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold mb-6 text-center text-foreground">
              Technical Expertise
            </h2>

            <div className="bg-black/50 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-content3/20">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
              >
                <SkillCard 
                  name="React"
                  level={85}
                  description="Component architecture, hooks, state management"
                />
                <SkillCard 
                  name="HTML & CSS"
                  level={90}
                  description="Semantic markup, responsive layouts, CSS architecture"
                />
                <SkillCard 
                  name="Tailwind CSS"
                  level={88}
                  description="Utility-first styling, custom configuration"
                />
                <SkillCard 
                  name="JavaScript"
                  level={80}
                  description="ES6+, async/await, DOM manipulation"
                />
                <SkillCard 
                  name="Git & GitHub"
                  level={75}
                  description="Version control, collaborative workflows, CI/CD"
                />
                <SkillCard 
                  name="Next.js"
                  level={70}
                  description="SSR, SSG, API routes, optimizations"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Projects Section */}
          <motion.div 
            id="projects"
            className="w-full max-w-6xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold mb-6 text-center text-foreground">
              Selected Projects
            </h2>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              <ProjectCard
                title="E-Commerce Platform"
                description="A scalable e-commerce solution built with React, featuring product management, user authentication, and secure payment processing."
                tags={["React", "Tailwind CSS", "Firebase"]}
                github="https://github.com/yourusername/project1"
                demo="https://project1-demo.vercel.app"
              />
              <ProjectCard
                title="Portfolio Website"
                description="A responsive portfolio website built with Next.js and Hero UI, optimized for performance and accessibility."
                tags={["Next.js", "Hero UI", "Framer Motion"]}
                github="https://github.com/yourusername/project2"
                demo="https://project2-demo.vercel.app"
              />
              <ProjectCard
                title="Weather Dashboard"
                description="A data visualization application integrating third-party APIs to provide real-time weather information with location services."
                tags={["React", "API Integration", "Chart.js"]}
                github="https://github.com/yourusername/project3"
                demo="https://project3-demo.vercel.app"
              />
            </motion.div>
          </motion.div>

          {/* Contact Section */}
          <motion.div 
            id="contact" 
            className="w-full max-w-6xl mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold mb-6 text-center text-foreground">
              Contact Information
            </h2>

            <div className="bg-black/50 backdrop-blur-lg border border-content3/20 rounded-2xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { duration: 0.5 } 
                    }
                  }}
                >
                  <h3 className="text-lg font-medium mb-4">Get In Touch</h3>
                  <p className="text-content3 mb-5 leading-relaxed">
                    Available for freelance projects, full-time positions, and consulting opportunities. Let's discuss how I can contribute to your team.
                  </p>
                  <motion.div 
                    className="space-y-4 mt-6"
                    variants={staggerContainer}
                  >
                    <motion.div 
                      className="flex items-center gap-3"
                      variants={fadeInUp}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <span>mateusz.nowak@example.com</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3"
                      variants={fadeInUp}
                    >
                      <div className="w-8 h-8 rounded-full bg-content2/40 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <span>+48 123 456 789</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3"
                      variants={fadeInUp}
                    >
                      <div className="w-8 h-8 rounded-full bg-content2/40 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <span>Warsaw, Poland</span>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="bg-content2/20 p-6 rounded-2xl"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { duration: 0.5, delay: 0.2 } 
                    }
                  }}
                >
                  <h3 className="text-lg font-medium mb-4">Contact Form</h3>
                  <p className="text-content3 mb-5">
                    I'll respond to your message within 24-48 hours.
                  </p>
                  <div className="mt-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        className={buttonStyles({
                          color: "primary",
                          radius: "md",
                          variant: "flat",
                          size: "md",
                        })}
                        href="mailto:mateusz.nowak@example.com"
                      >
                        Send Email
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer 
            className="w-full max-w-6xl pb-8 pt-4 text-center text-content3 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <hr className="my-4 border-content3/10" />
            <p>© {new Date().getFullYear()} Mateusz Nowak. All rights reserved.</p>
            <p className="mt-1">Built with Next.js and Hero UI</p>
          </motion.footer>
        </section>
      </motion.div>
    </motion.div>
  );
}

// Zmodyfikowane komponenty

function SkillCard({ name, level, description }) {
  return (
    <motion.div 
      className="bg-black/60 border border-content3/20 p-4 rounded-xl"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5 } 
        }
      }}
    >
      <div className="flex items-start gap-3 mb-3">
        <div>
          <h3 className="text-base font-medium">{name}</h3>
          <p className="text-content3 text-sm mt-1">{description}</p>
        </div>
      </div>
      <div className="relative w-full h-2 bg-content2/50 rounded-full overflow-hidden mt-3">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-primary/70 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
      </div>
      <div className="mt-1 text-right text-xs text-content3">
        {level}%
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, description, tags, github, demo }) {
  return (
    <motion.div 
      className="bg-black/60 border border-content3/20 rounded-xl overflow-hidden"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5 } 
        }
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="p-4 border-b border-content3/20">
        <h3 className="text-base font-medium">{title}</h3>
      </div>
      <div className="p-4">
        <p className="text-sm text-content3">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-content2/40 text-content3"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-content3/20 flex justify-between">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            isExternal
            className={buttonStyles({
              color: "default",
              radius: "sm",
              variant: "light",
              size: "sm",
            })}
            href={github}
          >
            <GithubIcon size={16} />
            Code
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "sm",
              variant: "light",
              size: "sm",
            })}
            href={demo}
          >
            View Live
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}