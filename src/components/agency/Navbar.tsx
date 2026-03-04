"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-4 shadow-lg" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image src="/influencers/logo/Logo Transparency-1.png" alt="Impact Portal Logo" width={150} height={50} className="object-contain max-h-12 w-auto" />
                </Link>
                <div className="hidden md:flex space-x-8">
                    {["Inicio", "Servicios", "Talentos", "Nosotros", "Contacto"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
                <button className="hidden md:block px-6 py-2 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition-colors">
                    Unirse
                </button>
            </div>
        </nav>
    );
}
