"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Wrench, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    gallery?: string[];
    tools: string[];
    date: string;
    client?: string;
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!project) return null;

    const gallery = project.gallery || [project.image];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative bg-card border border-border rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-colors"
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>

                        <div className="grid md:grid-cols-2 gap-0 max-h-[90vh] overflow-y-auto">
                            {/* Image Gallery */}
                            <div className="relative bg-secondary/30 aspect-video md:aspect-auto">
                                <div className="relative w-full h-full min-h-[300px] md:min-h-[400px]">
                                    <Image
                                        src={gallery[currentImageIndex]}
                                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>

                                {/* Gallery Navigation */}
                                {gallery.length > 1 && (
                                    <>
                                        <button
                                            onClick={previousImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-colors"
                                            aria-label="Previous image"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-colors"
                                            aria-label="Next image"
                                        >
                                            <ChevronRight size={24} />
                                        </button>

                                        {/* Image Counter */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 text-white text-sm backdrop-blur-sm">
                                            {currentImageIndex + 1} / {gallery.length}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Project Details */}
                            <div className="p-8 space-y-6 overflow-y-auto">
                                <div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-3">
                                        {project.category}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Metadata */}
                                <div className="space-y-3 pt-4 border-t border-border">
                                    <div className="flex items-center gap-3 text-sm">
                                        <Calendar className="text-primary" size={18} />
                                        <span className="font-medium">Date:</span>
                                        <span className="text-muted-foreground">{project.date}</span>
                                    </div>

                                    {project.client && (
                                        <div className="flex items-center gap-3 text-sm">
                                            <User className="text-primary" size={18} />
                                            <span className="font-medium">Client:</span>
                                            <span className="text-muted-foreground">{project.client}</span>
                                        </div>
                                    )}

                                    <div className="flex items-start gap-3 text-sm">
                                        <Wrench className="text-primary mt-0.5" size={18} />
                                        <span className="font-medium">Tools:</span>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tools.map((tool) => (
                                                <span
                                                    key={tool}
                                                    className="px-2 py-1 rounded-md bg-secondary text-foreground text-xs"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
