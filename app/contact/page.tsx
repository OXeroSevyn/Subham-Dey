"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-6 py-12 min-h-[80vh] flex flex-col justify-center">
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

                        <button className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            Send Message <Send size={20} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
