"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company?: string;
    content: string;
    rating: number;
    image?: string;
}

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

export function TestimonialCarousel({
    testimonials,
    autoPlay = true,
    autoPlayInterval = 5000
}: TestimonialCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) return testimonials.length - 1;
            if (nextIndex >= testimonials.length) return 0;
            return nextIndex;
        });
    };

    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            paginate(1);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [currentIndex, autoPlay, autoPlayInterval]);

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            {/* Main Testimonial Card */}
            <div className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        className="absolute w-full"
                    >
                        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl">
                            {/* Quote Icon */}
                            <div className="mb-6">
                                <Quote className="w-12 h-12 text-primary/30" />
                            </div>

                            {/* Testimonial Content */}
                            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                                "{currentTestimonial.content}"
                            </p>

                            {/* Rating Stars */}
                            <div className="flex gap-1 mb-6">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={`star-${i}`}
                                        className={`w-5 h-5 ${i < currentTestimonial.rating
                                                ? "fill-yellow-400 text-yellow-400"
                                                : "text-muted-foreground"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Author Info */}
                            <div className="flex items-center gap-4">
                                {currentTestimonial.image && (
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                                        <Image
                                            src={currentTestimonial.image}
                                            alt={currentTestimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <div>
                                    <h4 className="font-bold text-lg">{currentTestimonial.name}</h4>
                                    <p className="text-muted-foreground">
                                        {currentTestimonial.role}
                                        {currentTestimonial.company && ` • ${currentTestimonial.company}`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={() => paginate(-1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
                aria-label="Previous testimonial"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={() => paginate(1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
                aria-label="Next testimonial"
            >
                <ChevronRight size={24} />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={`dot-${index}`}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                ? "bg-primary w-8"
                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
