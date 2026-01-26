"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import Image from "next/image";

const categories = ["All", "Motion", "Painting"];

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

const portfolioItems: Project[] = [
    {
        id: 1,
        title: "Neon City",
        category: "Motion",
        description: "A vibrant motion graphics piece showcasing a futuristic cyberpunk cityscape with dynamic camera movements and glowing neon effects. This project demonstrates advanced compositing and particle systems.",
        image: "/portfolio/neon-city.png",
        gallery: ["/portfolio/neon-city.png"],
        tools: ["After Effects", "Cinema 4D", "Premiere Pro"],
        date: "December 2025",
        client: "Tech Corp"
    },
    {
        id: 2,
        title: "Abstract Mind",
        category: "Painting",
        description: "An abstract expressionist painting exploring the complexity of human consciousness through vibrant brushstrokes and layered textures. Created using digital painting techniques.",
        image: "/portfolio/abstract-mind.png",
        gallery: ["/portfolio/abstract-mind.png"],
        tools: ["Photoshop", "Procreate", "Wacom Tablet"],
        date: "November 2025"
    },
    {
        id: 3,
        title: "Cyber Punk Intro",
        category: "Motion",
        description: "An energetic intro animation featuring geometric shapes and particle effects, perfect for tech-focused content. Combines 2D and 3D elements with dynamic transitions.",
        image: "/portfolio/cyberpunk-intro.png",
        gallery: ["/portfolio/cyberpunk-intro.png"],
        tools: ["After Effects", "Element 3D", "Trapcode Suite"],
        date: "October 2025",
        client: "Gaming Studio"
    },
    {
        id: 4,
        title: "Nature's Whisper",
        category: "Painting",
        description: "A serene watercolor-style landscape capturing the peaceful beauty of misty mountains and flowing rivers. This piece showcases soft color transitions and atmospheric depth.",
        image: "/portfolio/natures-whisper.png",
        gallery: ["/portfolio/natures-whisper.png"],
        tools: ["Procreate", "iPad Pro", "Apple Pencil"],
        date: "September 2025"
    },
    {
        id: 5,
        title: "Tech Explainer",
        category: "Motion",
        description: "A professional explainer video showcasing cloud-based data architecture with clean infographics and smooth animations. Designed for corporate presentations and marketing.",
        image: "/portfolio/tech-explainer.png",
        gallery: ["/portfolio/tech-explainer.png"],
        tools: ["After Effects", "Illustrator", "Premiere Pro"],
        date: "August 2025",
        client: "Cloud Solutions Inc"
    },
    {
        id: 6,
        title: "Urban Decay",
        category: "Painting",
        description: "A moody digital painting depicting an abandoned urban building with vibrant graffiti art. This piece explores the contrast between decay and creative expression in street art culture.",
        image: "/portfolio/urban-decay.png",
        gallery: ["/portfolio/urban-decay.png"],
        tools: ["Photoshop", "Wacom Cintiq"],
        date: "July 2025"
    },
    {
        id: 7,
        title: "Cosmic Dreams",
        category: "Painting",
        description: "A surreal fantasy painting featuring ethereal cosmic landscapes and mystical elements. This artwork combines space imagery with dreamlike symbolism to create an otherworldly atmosphere.",
        image: "/portfolio/cosmic-dreams.png",
        gallery: ["/portfolio/cosmic-dreams.png"],
        tools: ["Photoshop", "Procreate", "Digital Brushes"],
        date: "June 2025"
    },
];

export default function PortfolioPage() {
    const [filter, setFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredItems = portfolioItems.filter(
        (item) => filter === "All" || item.category === filter
    );

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <div className="container mx-auto px-6 py-12">
            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
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
                        >
                            <SpotlightCard
                                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer"
                                onClick={() => openModal(item)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                                    <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {item.title}
                                    </h3>
                                    <span className="text-sm text-gray-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {item.category}
                                    </span>
                                </div>

                                {/* Real Portfolio Image */}
                                <div className="relative w-full h-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Icon Overlay */}
                                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white">
                                        <ZoomIn size={20} />
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
