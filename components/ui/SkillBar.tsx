"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface Skill {
    name: string;
    level: number; // 0-100
    category?: string;
}

interface SkillBarProps {
    skill: Skill;
    index: number;
}

export function SkillBar({ skill, index }: SkillBarProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="space-y-2"
        >
            <div className="flex justify-between items-center">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full relative overflow-hidden"
                >
                    {/* Animated shine effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                            x: ["-100%", "200%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "linear",
                        }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}

interface SkillsSectionProps {
    skills: Skill[];
    title?: string;
}

export function SkillsSection({ skills, title = "Skills & Expertise" }: SkillsSectionProps) {
    return (
        <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
            <div className="grid gap-6">
                {skills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
            </div>
        </div>
    );
}
