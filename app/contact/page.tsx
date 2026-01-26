"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Send, Check, Sparkles } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [showThankYou, setShowThankYou] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation(); // Stop the event from bubbling

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Show the thank you dialog immediately
        setShowThankYou(true);

        // Submit the form data in the background using fetch
        try {
            await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                },
                mode: 'no-cors' // Prevent CORS issues with FormSubmit
            });

            // Reset form after successful submission
            form.reset();
        } catch (error) {
            console.error('Form submission error:', error);
            // Still reset the form even if there's an error
            form.reset();
        }

        return false; // Extra insurance to prevent default behavior
    };

    return (
        <div className="container mx-auto px-6 py-12 min-h-[80vh] flex flex-col justify-center">
            {/* Thank You Dialog */}
            <AnimatePresence>
                {showThankYou && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={() => setShowThankYou(false)}
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Dialog Box */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.5, opacity: 0, y: 50 }}
                            transition={{ type: "spring", duration: 0.5, bounce: 0.4 }}
                            className="relative bg-card border-2 border-primary p-12 rounded-3xl shadow-2xl max-w-md w-full text-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Animated Circle Background */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg"
                            >
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    <Check size={48} className="text-primary-foreground" strokeWidth={3} />
                                </motion.div>
                            </motion.div>

                            {/* Sparkle Effects */}
                            {Array.from({ length: 6 }).map((_, i) => (
                                <motion.div
                                    key={`sparkle-${i}`}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{
                                        scale: [0, 1, 0],
                                        opacity: [0, 1, 0],
                                        x: Math.cos((i * Math.PI * 2) / 6) * 100,
                                        y: Math.sin((i * Math.PI * 2) / 6) * 100,
                                    }}
                                    transition={{
                                        delay: 0.3 + i * 0.1,
                                        duration: 1,
                                        ease: "easeOut"
                                    }}
                                    className="absolute top-1/2 left-1/2"
                                >
                                    <Sparkles size={20} className="text-primary" />
                                </motion.div>
                            ))}

                            <div className="mt-8 space-y-4">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                    className="text-3xl md:text-4xl font-bold text-foreground"
                                >
                                    Thank You!
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.5 }}
                                    className="text-xl text-primary font-semibold"
                                >
                                    For connecting with me
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                    className="text-muted-foreground"
                                >
                                    I'll get back to you as soon as possible!
                                </motion.p>

                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                    onClick={() => setShowThankYou(false)}
                                    className="mt-6 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                                >
                                    Close
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Let's Create<br />Something <span className="text-primary">Epik.</span></h1>
                        <p className="text-muted-foreground text-lg">
                            Whether you have a project in mind, want to inquire about my courses, or just say hello, I'm always open to new opportunities.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-4 rounded-full bg-secondary text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p className="text-muted-foreground">hello@subhamdey.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-4 rounded-full bg-secondary text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p className="text-muted-foreground">+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-4 rounded-full bg-secondary text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold">Location</h3>
                                <p className="text-muted-foreground">Kolkata, India</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-card p-8 rounded-3xl border border-border shadow-2xl"
                >
                    <form
                        className="space-y-6"
                        action="https://formsubmit.co/subhamdey.one@gmail.com"
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        {/* Honeypot for spam protection */}
                        <input type="text" name="_honey" className="hidden" />

                        {/* Disable Captcha for smoother experience (optional, can remove this line to enable it) */}
                        <input type="hidden" name="_captcha" value="false" />

                        {/* Success Page Configuration (optional, defaults to generic success page if not set) */}
                        {/* <input type="hidden" name="_next" value="https://oxerosevyn.github.io/Subham-Dey/thanks" /> */}
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button type="submit" className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            Send Message <Send size={20} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
