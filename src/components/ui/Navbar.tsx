"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10"
                        : "bg-transparent py-6"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform duration-300">
                            A
                        </div>
                        <span className="text-2xl font-serif font-bold text-white tracking-tight">
                            Avista
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#services">Services</NavLink>
                        <NavLink href="#portfolio">Work</NavLink>
                        <NavLink href="#about">About</NavLink>
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            className="px-6 py-2.5 bg-white text-black font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            Let's Talk
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
                >
                    <div className="flex flex-col gap-6 text-2xl font-serif">
                        <MobileLink onClick={() => setIsMobileMenuOpen(false)} href="#home">
                            Home
                        </MobileLink>
                        <MobileLink
                            onClick={() => setIsMobileMenuOpen(false)}
                            href="#services"
                        >
                            Services
                        </MobileLink>
                        <MobileLink
                            onClick={() => setIsMobileMenuOpen(false)}
                            href="#portfolio"
                        >
                            Work
                        </MobileLink>
                        <MobileLink onClick={() => setIsMobileMenuOpen(false)} href="#contact">
                            Contact
                        </MobileLink>
                    </div>
                </motion.div>
            )}
        </>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors uppercase tracking-wider"
        >
            {children}
        </Link>
    );
}

function MobileLink({
    href,
    onClick,
    children,
}: {
    href: string;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="text-white hover:text-primary transition-colors border-b border-white/10 pb-4"
        >
            {children}
        </Link>
    );
}
