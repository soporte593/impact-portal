import { Zap, Target, TrendingUp, Users } from "lucide-react";

const services = [
    {
        icon: <Zap size={32} />,
        title: "Estrategia de Marca",
        description: "Construimos identidades que resuenan y perduran. Desde el posicionamiento hasta la voz, creamos el plano de tu éxito."
    },
    {
        icon: <Users size={32} />,
        title: "Gestión de Talentos",
        description: "Nutrimos carreras y forjamos íconos. Nuestro equipo dedicado maneja todo, desde contratos hasta la dirección creativa."
    },
    {
        icon: <Target size={32} />,
        title: "Campañas Creativas",
        description: "Conceptos audaces que rompen el ruido. Diseñamos campañas integradas que impulsan la participación y la conversión."
    },
    {
        icon: <TrendingUp size={32} />,
        title: "Analítica & Datos",
        description: "Decisiones respaldadas por insights reales. Rastreamos cada métrica para optimizar el rendimiento y maximizar el ROI."
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Lo Que Hacemos</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Servicios integrales para el ecosistema de creadores moderno.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-background p-8 rounded-2xl border border-border hover:border-primary transition-colors group">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
