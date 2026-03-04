"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-background z-0" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest mb-6">
                        La Agencia #1 de Influencers
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
                        Amplifica tu <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                            Impacto Global
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                        Conectamos marcas visionarias con los creadores más influyentes del mundo.
                        Estrategias audaces, resultados reales y cultura pop en su máxima expresión.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 bg-foreground text-background font-bold rounded-lg hover:bg-foreground/90 transition-colors flex items-center gap-2">
                            Explorar Talentos <ArrowRight size={20} />
                        </button>
                        <button className="px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-lg hover:bg-secondary/80 transition-colors">
                            Trabaja con Nosotros
                        </button>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-border pt-12"
                >
                    {[
                        { label: "Influencers", value: "500+" },
                        { label: "Alcance Global", value: "100M+" },
                        { label: "Marcas", value: "50+" },
                        { label: "Campañas", value: "1.2k" },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <h3 className="text-4xl font-black mb-1">{stat.value}</h3>
                            <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
