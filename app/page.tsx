"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Palette, Video, PenTool } from "lucide-react";
import { TestimonialCarousel, Testimonial } from "@/components/ui/TestimonialCarousel";

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2, ease: "easeOut" as const }
  }
};

// Define child variants for staggered animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const skillItems = [
  { icon: Video, label: "Motion Graphics", color: "text-cyan-400" },
  { icon: Palette, label: "Painting / Art", color: "text-purple-400" },
  { icon: PenTool, label: "Graphic Design", color: "text-pink-400" },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Student",
    company: "Motion Graphics Course",
    content: "Subham's teaching style is incredible! He breaks down complex After Effects techniques into simple, easy-to-understand steps. Within 3 months, I went from beginner to creating professional motion graphics for clients.",
    rating: 5,
  },
  {
    id: 2,
    name: "Arjun Patel",
    role: "Creative Director",
    company: "Digital Wave Studios",
    content: "Working with Subham has been a game-changer for our studio. His motion graphics work is exceptional, and he always delivers beyond expectations. His attention to detail and creative vision are unmatched.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sneha Reddy",
    role: "Student",
    company: "Digital Art Masterclass",
    content: "The best art instructor I've ever had! Subham not only teaches technical skills but also helps develop your artistic vision. His feedback is always constructive and encouraging.",
    rating: 5,
  },
  {
    id: 4,
    name: "Rahul Mehta",
    role: "Marketing Manager",
    company: "TechVision Inc",
    content: "Subham created stunning explainer videos for our product launches. His work significantly improved our engagement rates. Professional, creative, and always on time!",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6">
      <motion.section
        className="max-w-4xl w-full text-center space-y-8"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <motion.h1
          className="text-5xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient-x"
          variants={itemVariants} // Apply child variants
        >
          SUBHAM DEY
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground font-light"
          variants={itemVariants} // Apply child variants
        >
          Motion Graphics Designer • Artist • Creative Educator
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-8 py-8"
          variants={itemVariants} // Apply child variants
        >
          {skillItems.map((item) => (
            <motion.div
              key={item.label} // Changed key to item.label
              className="flex flex-col items-center gap-2 group cursor-default"
              whileHover={{ scale: 1.1 }}
              variants={itemVariants} // Apply child variants
            >
              <div className={`p-4 rounded-full bg-secondary/50 border border-border group-hover:border-primary/50 transition-colors ${item.color}`}>
                <item.icon size={32} />
              </div>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center"
          variants={heroVariants}
        >
          <Link href="/portfolio" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 hover:scale-105 transition-all">
            View My Work <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link href="/about" className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-border bg-background hover:bg-secondary hover:text-white transition-all font-medium text-lg">
            About Me
          </Link>
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="max-w-6xl w-full mt-32 mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What People Say</h2>
          <p className="text-muted-foreground text-lg">
            Hear from students and clients I've worked with
          </p>
        </div>
        <TestimonialCarousel testimonials={testimonials} />
      </motion.section>

      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
    </div>
  );
}
