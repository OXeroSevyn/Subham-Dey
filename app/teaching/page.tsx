"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Star } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const courses = [
    {
        title: "Mastering Motion Graphics",
        category: "Video Editing",
        level: "Intermediate",
        description: "Learn the secrets of smooth animation and dynamic visual effects using After Effects.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Graphic Design Fundamentals",
        category: "Design",
        level: "Beginner",
        description: "Understand color theory, typography, and layout design to create stunning visuals.",
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Video Editing Zero to Hero",
        category: "Video Editing",
        level: "All Levels",
        description: "Complete guide to professional video editing workflows in Premiere Pro.",
        color: "from-orange-500 to-red-500"
    }
];

export default function TeachingPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <motion.div
                className="text-center max-w-2xl mx-auto mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Learn With Me</h1>
                <p className="text-lg text-muted-foreground">
                    I believe in passing on knowledge. Check out my courses and workshops designed to help you become a better creator.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                    <motion.div
                        key={course.title}
                        className="group relative rounded-2xl overflow-hidden bg-card border border-border"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className={cn("h-48 w-full bg-gradient-to-br p-6 flex flex-col justify-between", course.color)}>
                            <span className="bg-black/30 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full w-fit">
                                {course.category}
                            </span>
                            <BookOpen className="text-white/80 w-12 h-12" />
                        </div>

                        <div className="p-6 space-y-4">
                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                {course.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                {course.description}
                            </p>

                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-500" />
                                    <span>{course.level}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    <span>Students Enrolled</span>
                                </div>
                            </div>

                            <button className="w-full py-2 mt-4 rounded-md bg-secondary text-secondary-foreground font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                View Course Details
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.section
                className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 border border-border text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="max-w-xl mx-auto space-y-6">
                    <h2 className="text-3xl font-bold">Want a Private Workshop?</h2>
                    <p className="text-muted-foreground">
                        I offer personalized mentorship and team workshops for organizations looking to upskill their creative teams.
                    </p>
                    <Link href="/contact" className="inline-block px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                        Get in Touch
                    </Link>
                </div>
            </motion.section>
        </div>
    );
}
