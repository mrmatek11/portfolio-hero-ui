// 

"use client"; // jeśli używasz funkcji client-side, np. framer-motion

import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { motion } from "framer-motion"; // Importowanie framer-motion

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
<div className="min-h-screen w-full bg-background text-foreground">
      
      {/* Subtle gradient background with framer-motion */}
      <motion.div 
        className="fixed inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Blurred gradient background */}
        <motion.div 
          className="absolute inset-0 bg-background opacity-95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.95 }}
          transition={{ duration: 2 }}
        ></motion.div>

        {/* Gradient with blur effect */}
        <motion.div 
          className="absolute -inset-[10px] bg-gradient-to-r from-primary-300/20 via-secondary-400/10 to-primary-500/20 blur-3xl opacity-10"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>

        {/* Lines background with blur */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px] blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        ></motion.div>
      </motion.div>

      <section className="flex flex-col items-center justify-center gap-6 py-10 px-4 md:px-6 text-foreground">
        {/* Hero Section */}
        <div className="w-full max-w-6xl rounded-2xl bg-content1/60 backdrop-blur-md p-8 shadow-xl border border-content3/20">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
                Mateusz Nowak
              </h1>
              <div className="mt-3 text-3xl font-semibold">Junior Front-End Developer</div>
              <div className="mt-6 text-content3 max-w-xl">
                Creating modern and responsive websites using React, Tailwind CSS, and Next.js. Passionate about clean code and great user experiences.
              </div>

              <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                <Link
                  isExternal
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "shadow",
                    size: "lg",
                  })}
                  href={siteConfig.links.github}
                >
                  <GithubIcon size={20} />
                  GitHub
                </Link>
                <Link
                  isExternal
                  className={buttonStyles({
                    color: "secondary", 
                    radius: "full",
                    variant: "shadow",
                    size: "lg",
                  })}
                  href={siteConfig.links.linkedin}
                >
                  LinkedIn
                </Link>
                <Link
                  className={buttonStyles({
                    variant: "bordered",
                    radius: "full",
                    size: "lg",
                  })}
                  href="#contact"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Circular profile image */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-primary-200 to-secondary-300 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">MN</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="w-full max-w-6xl mt-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Skills
          </h2>

          <div className="bg-content1/60 backdrop-blur-md rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillCard 
                name="React"
                icon="⚛️"
                level={85}
                description="Building interactive UIs with React and its ecosystem"
              />
              <SkillCard 
                name="HTML & CSS"
                icon="🎨"
                level={90}
                description="Creating semantic markup and responsive designs"
              />
              <SkillCard 
                name="Tailwind CSS"
                icon="🌊"
                level={88}
                description="Utility-first CSS for rapid UI development"
              />
              <SkillCard 
                name="JavaScript"
                icon="🔧"
                level={80}
                description="Creating dynamic and interactive experiences"
              />
              <SkillCard 
                name="Git & GitHub"
                icon="📊"
                level={75}
                description="Version control and collaboration"
              />
              <SkillCard 
                name="Next.js"
                icon="⚡"
                level={70}
                description="React framework for production sites"
              />
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="w-full max-w-6xl mt-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="E-Commerce App"
              description="A modern e-commerce platform built with React, including shopping cart, user authentication, and payment processing."
              tags={["React", "Tailwind CSS", "Firebase"]}
              github="https://github.com/yourusername/project1"
              demo="https://project1-demo.vercel.app"
              image="🛒"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A responsive portfolio website built with Next.js and Hero UI, featuring smooth animations and interactive elements."
              tags={["Next.js", "Hero UI", "Framer Motion"]}
              github="https://github.com/yourusername/project2"
              demo="https://project2-demo.vercel.app"
              image="💼"
            />
            <ProjectCard
              title="Weather Dashboard"
              description="A real-time weather application with location detection, forecasts, and beautiful visualizations of weather data."
              tags={["React", "API Integration", "Chart.js"]}
              github="https://github.com/yourusername/project3"
              demo="https://project3-demo.vercel.app"
              image="🌦️"
            />
          </div>
        </div>

        {/* Interests Section */}
        <div id="interests" className="w-full max-w-6xl mt-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Interests
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <InterestCard icon="💻" title="Web Development" />
            <InterestCard icon="🎮" title="Gaming" />
            <InterestCard icon="📚" title="Learning New Tech" />
            <InterestCard icon="🏃" title="Sports & Fitness" />
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="w-full max-w-6xl mt-12 mb-8">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="bg-content1/60 backdrop-blur-md border border-content3/20 rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="text-content3 mb-4">
                  Feel free to reach out to me for collaboration, job opportunities, or just to say hi!
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      📧
                    </div>
                    <span>mateusz.nowak@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      📱
                    </div>
                    <span>+48 123 456 789</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                      📍
                    </div>
                    <span>Warsaw, Poland</span>
                  </div>
                </div>
              </div>

              <div className="bg-content2/50 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Send me a message</h3>
                <p className="text-content3 mb-4">
                  I'll get back to you as soon as possible!
                </p>
                <div className="mt-6 text-center">
                  <Link
                    className={buttonStyles({
                      color: "primary",
                      radius: "full",
                      variant: "shadow",
                      size: "lg",
                    })}
                    href="mailto:mateusz.nowak@example.com"
                  >
                    Email Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full max-w-6xl pb-8 pt-4 text-center text-content3">
          <hr className="my-4 border-content3/20" />
          <p>© {new Date().getFullYear()} Mateusz Nowak. All rights reserved.</p>
          <p className="mt-2">Built with Next.js and Hero UI</p>
        </footer>
      </section>
    </div>
  );
}

// Components

function SkillCard({ name, icon, level, description }) {
  return (
    <div className="bg-content1/80 backdrop-blur-sm border border-content3/20 hover:scale-105 transition-transform p-4 rounded-xl">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-3xl">{icon}</div>
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-content3 text-sm">{description}</p>
        </div>
      </div>
      <div className="relative w-full h-4 bg-content2 rounded-full overflow-hidden mt-2">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full"
          style={{ width: `${level}%` }}
        ></div>
        <div className="absolute top-0 right-2 text-xs font-semibold h-full flex items-center">
          {level}%
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tags, github, demo, image }) {
  return (
    <div className="bg-content1/80 backdrop-blur-sm border border-content3/20 hover:shadow-xl transition-all rounded-xl overflow-hidden">
      <div className="p-4 border-b border-content3/20">
        <div className="flex gap-3">
          <div className="flex flex-col">
            <div className="text-4xl mb-2">{image}</div>
            <p className="text-xl font-bold">{title}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p>{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className={`text-xs px-2 py-1 rounded-full ${
                index % 3 === 0 
                  ? "bg-primary/20 text-primary" 
                  : index % 3 === 1 
                    ? "bg-secondary/20 text-secondary" 
                    : "bg-success/20 text-success"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-content3/20 flex justify-between">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "flat",
          })}
          href={github}
        >
          <GithubIcon size={18} />
          Code
        </Link>
        <Link
          isExternal
          className={buttonStyles({
            color: "secondary",
            radius: "full",
            variant: "flat",
          })}
          href={demo}
        >
          Demo
        </Link>
      </div>
    </div>
  );
}

function InterestCard({ icon, title }) {
  return (
    <div className="bg-content1/80 backdrop-blur-sm border border-content3/20 hover:bg-content2/50 transition-colors cursor-pointer rounded-xl">
      <div className="p-6 flex flex-col items-center justify-center text-center">
        <div className="text-5xl mb-4">{icon}</div>
        <p className="font-semibold">{title}</p>
      </div>
    </div>
  );
}

// Dodaj te style do globalnego CSS dla animacji gradientu
// .animate-gradient-x {
//   animation: gradient-x 15s ease infinite;
// }
// @keyframes gradient-x {
//   0%, 100% {
//     transform: translateX(0%);
//     background-position: 0% 50%;
//   }
//   50% {
//     transform: translateX(100%);
//     background-position: 100% 50%;
//   }
// }