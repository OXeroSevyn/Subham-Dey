"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Linkedin, Mail, Github } from "lucide-react";

const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-500" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com", color: "hover:text-red-500" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-500" },
    { name: "GitHub", icon: Github, href: "https://github.com/OXeroSevyn", color: "hover:text-purple-500" },
    { name: "Email", icon: Mail, href: "mailto:subhamdey.one@gmail.com", color: "hover:text-primary" },
];

interface SocialLinksProps {
    className?: string;
}

export function SocialLinks({ className = "" }: SocialLinksProps) {
    return (
        <div className={`flex gap-4 ${className}`}>
            {socialLinks.map((social) => (
                <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full bg-secondary border border-border ${social.color} transition-colors`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                >
                    <social.icon size={20} />
                </motion.a>
            ))}
        </div>
    );
}
