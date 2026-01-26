"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-full bg-secondary animate-pulse" />
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative w-14 h-8 rounded-full bg-secondary border border-border p-1 transition-colors hover:bg-secondary/80"
            aria-label="Toggle theme"
        >
            <motion.div
                className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                animate={{
                    x: theme === "dark" ? 22 : 0,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
                {theme === "dark" ? (
                    <Moon className="w-4 h-4 text-primary-foreground" />
                ) : (
                    <Sun className="w-4 h-4 text-primary-foreground" />
                )}
            </motion.div>
        </button>
    );
}
