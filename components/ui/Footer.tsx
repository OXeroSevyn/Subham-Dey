import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-muted py-12 mt-20 border-t border-border">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground">
                        Subham<span className="text-primary">.Dey</span>
                    </Link>
                    <p className="mt-4 text-muted-foreground max-w-sm">
                        Creating visual experiences through motion graphics, digital art, and design education.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                        <li><Link href="/about" className="hover:text-primary transition-colors">About Me</Link></li>
                        <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                        <li><Link href="/teaching" className="hover:text-primary transition-colors">Teaching</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
                    <div className="flex space-x-4">
                        <Link href="https://instagram.com" className="bg-background p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all">
                            <Instagram size={20} />
                        </Link>
                        <Link href="https://linkedin.com" className="bg-background p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="https://twitter.com" className="bg-background p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all">
                            <Twitter size={20} />
                        </Link>
                        <Link href="https://github.com" className="bg-background p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all">
                            <Github size={20} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Subham Dey. All rights reserved.
            </div>
        </footer>
    );
}
