"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Image as ImageIcon, ZoomIn } from "lucide-react";

const categories = ["All", "Motion", "Painting"];

const portfolioItems = [
    { id: 1, title: "Neon City", category: "Motion", image: "/placeholder.svg" },
    { id: 2, title: "Abstract Mind", category: "Painting", image: "/placeholder.svg" },
    { id: 3, title: "Cyber Punk Intro", category: "Motion", image: "/placeholder.svg" },
    { id: 4, title: "Nature's Whisper", category: "Painting", image: "/placeholder.svg" },
    { id: 5, title: "Tech Explainer", category: "Motion", image: "/placeholder.svg" },
    { id: 6, title: "Urban Decay", category: "Painting", image: "/placeholder.svg" },
];

export default function PortfolioPage() {
    const [filter, setFilter] = useState("All");

    const filteredItems = portfolioItems.filter(
        (item) => filter === "All" || item.category === filter
    );

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-12 space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">My Work</h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    A collection of my best motion graphics projects and digital paintings.
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-center gap-4 mb-16">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === cat ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        {filter === cat && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-primary rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{cat}</span>
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence>
                    {filteredItems.map((item) => (
                        <motion.div
                            layout
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="group relative aspect-video bg-muted rounded-xl overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.title}
                                </h3>
                                <span className="text-sm text-gray-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {item.category}
                                </span>
                            </div>

                            {/* Placeholder Visuals since we don't have real images */}
                            <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground group-hover:scale-110 transition-transform duration-500">
                                {item.category === "Motion" ? <Play size={48} /> : <ImageIcon size={48} />}
                            </div>

                            {/* Icon Overlay */}
                            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white">
                                    <ZoomIn size={20} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
