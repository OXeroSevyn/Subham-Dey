import Link from "next/link";
import { SocialLinks } from "@/components/ui/SocialLinks";

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
                    <SocialLinks />
                </div>
            </div>
            <div className="container mx-auto px-6 mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Subham Dey. All rights reserved.
            </div>
        </footer>
    );
}
