import Image from "next/image";

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="py-32 bg-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Nuestro Talento</span>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Influencers <span className="text-gradient-gold">Destacados</span>
                        </h2>
                    </div>
                    <button className="hidden md:block px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-all">
                        Ver Todos
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-8">
                        <div className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <h3 className="text-3xl font-black text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Fickson</h3>
                                <p className="text-gray-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Lifestyle & Fashion</p>
                            </div>
                            <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                            <Image src="/influencers/FOTOS FICKSON/_A745914.jpg" alt="Fickson" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0" />
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl aspect-square">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <h3 className="text-3xl font-black text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Carito Cobo</h3>
                                <p className="text-gray-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Entretenimiento & Comedia</p>
                            </div>
                            <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                            <Image src="/influencers/CARITO COBO/_A746331.jpg" alt="Carito Cobo" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0" />
                        </div>
                    </div>

                    <div className="space-y-8 md:mt-20">
                        <div className="group relative overflow-hidden rounded-2xl aspect-square">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <h3 className="text-3xl font-black text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Glenn</h3>
                                <p className="text-gray-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Travel & Aventura</p>
                            </div>
                            <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                            <Image src="/influencers/GLENN/_A746252.jpg" alt="Glenn" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0 object-top" />
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <h3 className="text-3xl font-black text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Rey Julian</h3>
                                <p className="text-gray-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Música & Cultura Pop</p>
                            </div>
                            <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                            <Image src="/influencers/REY JULIAN/_A745995.jpg" alt="Rey Julian" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0" />
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-all">
                        Ver Todo el Trabajo
                    </button>
                </div>
            </div>
        </section>
    );
}
