import { Globe, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-foreground text-background py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="text-3xl font-black tracking-tighter flex items-center gap-2 mb-6">
                            <Globe className="text-primary" size={32} />
                            IMPACT
                        </a>
                        <p className="text-background/60 max-w-sm text-lg">
                            Redefiniendo la influencia en la era digital.
                            Creamos momentos que importan.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold uppercase tracking-widest mb-6">Agencia</h4>
                        <ul className="space-y-4 text-background/60">
                            <li><a href="#" className="hover:text-primary transition-colors">Talentos</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Marcas</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Estudios de Caso</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Carreras</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold uppercase tracking-widest mb-6">Social</h4>
                        <ul className="space-y-4 text-background/60">
                            <li><a href="#" className="flex items-center gap-2 hover:text-primary transition-colors"><Instagram size={18} /> Instagram</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-primary transition-colors"><Twitter size={18} /> Twitter</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-primary transition-colors"><Linkedin size={18} /> LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-background/40 text-sm">
                    <p>&copy; 2026 Impact Agency. Todos los derechos reservados.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-background">Privacidad</a>
                        <a href="#" className="hover:text-background">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
