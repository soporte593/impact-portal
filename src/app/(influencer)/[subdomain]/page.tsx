"use client";

import { motion } from "framer-motion";
import { Play, Pause, Share2, Instagram, Twitter, Facebook, ExternalLink, Music, Info } from "lucide-react";
import React, { useState, use, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useSearchParams } from "next/navigation";

export default function InfluencerPage({ params }: { params: Promise<{ subdomain: string }> }) {
    const { subdomain } = use(params);
    const searchParams = useSearchParams();

    // Allow overriding subdomain via query param ?artist=slug for debugging/demo
    const artistSlug = searchParams.get('artist') || subdomain;

    const [artist, setArtist] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        async function fetchArtist() {
            try {
                // TRY SUPABASE FIRST
                const { data, error } = await supabase
                    .from('artists')
                    .select('*')
                    .ilike('slug', artistSlug) // Use artistSlug which checks param first
                    .single();

                if (data) {
                    setArtist(data);
                } else {
                    console.error("Artista no encontrado en BD:", error);
                    // Fallback Mock Data for 'sara' OR if query param matches
                    if (artistSlug.toLowerCase() === 'sara') {
                        console.warn("Usando Datos Mock para Sara");
                        setArtist({
                            name: "Sara V.",
                            slug: "sara",
                            genre: "Pop / Indie",
                            image_url: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070&auto=format&fit=crop",
                            bio: "Sara es una artista indie-pop emergente conocida por sus voces etéreas y paisajes sonoros atmosféricos. Basada en la Ciudad de México, mezcla influencias tradicionales con producción electrónica moderna.",
                        });
                    }
                }
            } catch (err) {
                console.error("Error de conexión:", err);
                // Fallback Mock Data on Crash
                if (artistSlug.toLowerCase() === 'sara') {
                    console.warn("Usando Datos Mock para Sara (Error de Conexión)");
                    setArtist({
                        name: "Sara V.",
                        slug: "sara",
                        genre: "Pop / Indie",
                        image_url: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070&auto=format&fit=crop",
                        bio: "Sara es una artista indie-pop emergente conocida por sus voces etéreas y paisajes sonoros atmosféricos. Basada en la Ciudad de México, mezcla influencias tradicionales con producción electrónica moderna.",
                    });
                }
            } finally {
                setLoading(false);
            }
        }
        fetchArtist();
    }, [artistSlug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white theme-mixtape">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-pink-600 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-zinc-500 text-sm tracking-widest uppercase">Cargando Mixtape...</p>
                </div>
            </div>
        );
    }

    // Fallback if artist not found
    if (!artist) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-white theme-mixtape p-10 text-center bg-zinc-950">
                <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 max-w-md w-full">
                    <Info size={48} className="mx-auto mb-6 text-zinc-600" />
                    <h1 className="text-3xl font-black mb-2">ARTISTA NO ENCONTRADO</h1>
                    <p className="text-zinc-500 mb-8">El talento "{artistSlug}" no existe en nuestro roster.</p>
                    <a href="http://localhost:3000" className="block w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors uppercase tracking-widest text-sm">
                        Volver a la Agencia
                    </a>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[var(--mixtape-bg)] text-[var(--mixtape-fg)] font-sans selection:bg-pink-500 selection:text-white">

            {/* Left Panel - Visuals */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />

                {artist.image_url ? (
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src={artist.image_url}
                        alt={artist.name}
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-800">
                        <Music size={120} />
                    </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex flex-wrap gap-3 mb-4">
                            {artist.genre && (
                                <span className="px-3 py-1 bg-pink-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                                    {artist.genre}
                                </span>
                            )}
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/20">
                                Artista Verificado
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-2 text-white drop-shadow-lg">
                            {artist.name}
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* Right Panel - Content */}
            <div className="w-full md:w-1/2 min-h-screen overflow-y-auto px-6 py-12 md:p-16 flex flex-col relative z-0">
                {/* Background Texture/Gradient */}
                <div className="absolute inset-0 bg-zinc-950 -z-10" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

                {/* Top Action Bar */}
                <div className="flex justify-between items-center mb-16">
                    <a href="http://localhost:3000" className="text-xs font-bold uppercase text-zinc-500 tracking-widest hover:text-white transition-colors">
                        ← Agencia Impact
                    </a>
                    <div className="flex gap-4">
                        <button className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border border-zinc-800">
                            <Share2 size={16} />
                        </button>
                    </div>
                </div>

                <div className="max-w-xl mx-auto w-full flex-grow flex flex-col justify-center">

                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-12"
                    >
                        <h2 className="text-secondary-foreground text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Biografía</h2>
                        <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
                            {artist.bio || (
                                <span className="italic text-zinc-600">No hay biografía disponible por ahora.</span>
                            )}
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-6 mt-8">
                            <a href="#" className="text-zinc-500 hover:text-pink-500 transition-colors"><Instagram size={24} /></a>
                            <a href="#" className="text-zinc-500 hover:text-blue-400 transition-colors"><Twitter size={24} /></a>
                            <a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors"><Facebook size={24} /></a>
                        </div>
                    </motion.div>

                    {/* Latest Release (Mock) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mb-12"
                    >
                        <h2 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-50">Último Lanzamiento</h2>
                        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 flex items-center gap-4 hover:border-zinc-700 transition-colors group cursor-pointer">
                            <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 group-hover:text-pink-500 transition-colors relative overflow-hidden">
                                {artist.image_url && <img src={artist.image_url} className="absolute inset-0 w-full h-full object-cover opacity-50" />}
                                <Music size={24} className="relative z-10" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-bold text-lg text-white">Track Sin Título</h3>
                                <p className="text-sm text-zinc-500">Último Single • 2026</p>
                            </div>
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                            >
                                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                            </button>
                        </div>
                    </motion.div>

                    {/* Booking CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="p-1 rounded-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
                            <div className="bg-zinc-950 rounded-xl p-6 md:p-8 text-center">
                                <h3 className="text-2xl font-bold mb-2">Contrata a {artist.name}</h3>
                                <p className="text-zinc-400 mb-6 text-sm">Disponible para fechas seleccionadas en 2026.</p>
                                <button className="w-full py-4 bg-white text-black font-black uppercase tracking-widest rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                                    <ExternalLink size={18} /> Cotizar Ahora
                                </button>
                            </div>
                        </div>
                    </motion.div>

                </div>

                <div className="mt-12 text-center text-xs text-zinc-700 uppercase tracking-widest">
                    Powered by Impact Agency
                </div>

            </div>
        </div>
    );
}
