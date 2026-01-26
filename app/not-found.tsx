"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl"
            >
                {/* Animated 404 */}
                <motion.h1
                    className="text-9xl md:text-[200px] font-black tracking-tighter"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient-x">
                        404
                    </span>
                </motion.h1>

                <motion.h2
                    className="text-2xl md:text-4xl font-bold mb-4 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Page Not Found
                </motion.h2>

                <motion.p
                    className="text-muted-foreground text-lg mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Oops! The page you're looking for seems to have wandered off into the creative void.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 hover:scale-105 transition-all"
                    >
                        <Home size={20} />
                        Back to Home
                    </Link>

                    <Link
                        href="/portfolio"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-border bg-background hover:bg-secondary hover:border-primary transition-all font-semibold text-lg"
                    >
                        <Search size={20} />
                        View Portfolio
                    </Link>
                </motion.div>

                {/* Helpful Links */}
                <motion.div
                    className="mt-16 pt-8 border-t border-border"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <p className="text-sm text-muted-foreground mb-4">Maybe you were looking for:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { name: "About", href: "/about" },
                            { name: "Portfolio", href: "/portfolio" },
                            { name: "Teaching", href: "/teaching" },
                            { name: "Contact", href: "/contact" },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Floating Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
            </div>
        </div>
    );
}
