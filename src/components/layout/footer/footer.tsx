import { component$ } from '@builder.io/qwik';
import { MapPinIcon, PhoneIcon, InstagramIcon } from 'lucide-qwik';
import KeepMovingLogo from '~/media/keepmoving-logo.webp';

export const Footer = component$(() => {
    return (
        <footer id="ubicacion" class="border-t border-white/10 bg-[#050505] py-16">
            <div class="container mx-auto px-4 lg:px-8">
                <div class="grid gap-12 md:grid-cols-3">
                    {/* Brand Info */}
                    <div>
                        <a href="/" class="inline-flex items-center gap-3">
                            <img src={KeepMovingLogo} alt="Keep Moving Miramar Logo" class="h-16 w-auto" />
                            <span class="font-heading text-3xl font-bold tracking-tight text-white uppercase">
                                Keep Moving
                            </span>
                        </a>
                        <p class="mt-6 text-white/70 max-w-xs text-sm leading-relaxed">
                            No solo entrenamos el cuerpo. Ayudamos a construir tu mejor versión. Moverse es avanzar.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 class="font-heading text-lg font-bold text-white mb-6 uppercase tracking-wider">Contacto</h3>
                        <ul class="space-y-5">
                            <li>
                                <a href="https://maps.google.com/?q=Calle+19+1692,+Miramar" target="_blank" class="flex items-start gap-4 text-white/70 hover:text-primary transition-colors">
                                    <MapPinIcon class="h-5 w-5 shrink-0 text-primary" />
                                    <span class="text-sm">Calle 19 N° 1692<br />Miramar, Buenos Aires</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/5491125358621?text=Hola,%20vine%20del%20sitio%20web%20y%20me%20gustaria%20consultar%20precios." target="_blank" class="flex items-center gap-4 text-white/70 hover:text-primary transition-colors">
                                    <PhoneIcon class="h-5 w-5 shrink-0 text-primary" />
                                    <span class="text-sm">11 2535-8621 (Fabian)</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/5492236231445?text=Hola,%20vine%20del%20sitio%20web%20y%20me%20gustaria%20consultar%20precios." target="_blank" class="flex items-center gap-4 text-white/70 hover:text-primary transition-colors">
                                    <PhoneIcon class="h-5 w-5 shrink-0 text-primary" />
                                    <span class="text-sm">223 623-1445 (Juan)</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/keepmovingmiramar" target="_blank" class="flex items-center gap-4 text-white/70 hover:text-primary transition-colors">
                                    <InstagramIcon class="h-5 w-5 shrink-0 text-primary" />
                                    <span class="text-sm">@keepmovingmiramar</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Map Placeholder */}
                    <div class="h-56 w-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden" style="clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px);">
                        <iframe
                            title="Mapa con la ubicación del gimnasio Keep Moving en Miramar"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.520193124005!2d-57.84338087470966!3d-38.267432715065894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x958510896a14588d%3A0x9445a0a5a1324fa1!2sC.%2019%201692%2C%20B7607%20Miramar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1772042563389!5m2!1ses!2sar"
                            class="w-full h-full border-0"
                            allowFullscreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div class="mt-16 border-t border-white/10 pt-8 text-center flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p class="text-xs text-white/70 uppercase tracking-wider">
                        &copy; {new Date().getFullYear()} Keep Moving Miramar.
                    </p>
                    <a href="https://cleverisma.com/" target="_blank" class="text-xs text-white/50 uppercase hover:text-primary transition-colors tracking-wider border-b border-white/20 hover:border-primary pb-0.5">
                        Desarrollado por Cleverisma
                    </a>
                </div>
            </div>
        </footer>
    );
});
