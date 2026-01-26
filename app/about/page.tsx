"use client";

"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Smile, PenTool, Zap, Code, Palette } from "lucide-react";
import { SkillsSection, Skill } from "@/components/ui/SkillBar";

export const metadata = {
    title: "About - Subham Dey | Motion Designer & Artist",
    description: "Learn about Subham Dey - Motion Graphics Designer, Traditional Artist, and Creative Educator with expertise in After Effects, Painting, and Design.",
    keywords: ["motion graphics artist", "painter", "creative educator", "after effects expert", "digital artist"],
    openGraph: {
        title: "About Subham Dey",
        description: "Motion Graphics Designer, Artist & Educator",
    },
};

const skills: Skill[] = [
    { name: "After Effects", level: 95, category: "Motion Graphics" },
    { name: "Premiere Pro", level: 90, category: "Video Editing" },
    { name: "Photoshop", level: 92, category: "Design" },
    { name: "Illustrator", level: 88, category: "Design" },
    { name: "Cinema 4D", level: 80, category: "3D" },
    { name: "Oil Painting", level: 85, category: "Fine Arts" },
    { name: "Digital Painting", level: 90, category: "Fine Arts" },
    { name: "Typography", level: 87, category: "Design" },
];

export default function AboutPage() {
    return (
        <div className="container mx-auto px-6 py-12 space-y-20">
            {/* Intro Section */}
            <section className="flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden bg-muted">
                        {/* Placeholder for Profile Image */}
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gradient-to-br from-gray-800 to-black">
                            <Smile size={64} className="opacity-50" />
                            <span className="sr-only">Subham Dey Profile</span>
                        </div>
                        {/* Texture Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
                    </div>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2 space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Hi, I'm <span className="text-primary">Subham Dey</span>
                    </h1>
                    <h2 className="text-2xl text-muted-foreground">Motion Designer, Artist & Educator</h2>
                    <p className="text-lg leading-relaxed text-gray-300">
                        I blend the worlds of traditional art and digital motion to create captivating visual experiences.
                        With a background in fine arts and years of experience in motion graphics, I bring a unique
                        perspective to every project. Whether I'm painting on canvas or animating keyframes,
                        my goal is to tell stories that resonate.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-300">
                        I also love sharing my knowledge, teaching graphic design and video editing to the next generation of creatives.
                    </p>
                </motion.div>
            </section>

            {/* Skills Section */}
            <section>
                <motion.h2
                    className="text-3xl font-bold mb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    My Expertise
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: Zap, title: "Motion Graphics", desc: "After Effects, Cinema 4D, Dynamic Animation" },
                        { icon: PenTool, title: "Graphic Design", desc: "Branding, UI/UX, Typography, Layout" },
                        { icon: Palette, title: "Fine Arts", desc: "Oil Painting, Sketching, Concept Art" },
                        { icon: Briefcase, title: "Video Editing", desc: "Premiere Pro, DaVinci Resolve, Storytelling" },
                        { icon: Award, title: "Mentorship", desc: "Workshops, 1-on-1 Coaching, Course Creation" },
                        { icon: Code, title: "Creative Tech", desc: "Bridging Art and Technology" }
                    ].map((skill, i) => (
                        <motion.div
                            key={skill.title}
                            className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <skill.icon className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                            <p className="text-muted-foreground">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Skill Progress Bars */}
            <section className="max-w-3xl mx-auto">
                <SkillsSection skills={skills} title="Technical Proficiency" />
            </section>

            {/* Experience / Timeline or Stats could go here */}
        </div>
    );
}
