import { component$, useSignal } from '@builder.io/qwik';
import { MenuIcon, XIcon } from 'lucide-qwik';
import KeepMovingLogo from '~/media/keepmoving-logo.webp';

export const Header = component$(() => {
    const isMenuOpen = useSignal(false);

    return (
        <header class="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div class="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
                {/* Logo */}
                <a href="/" class="flex items-center gap-2">
                    <img src={KeepMovingLogo} alt="Keep Moving Miramar Logo" class="h-16 w-auto" />
                    <span class="font-heading text-2xl font-bold tracking-tight text-white uppercase hidden sm:inline-block">
                        <span class="text-white/30 font-light">|</span> Keep Moving
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav class="hidden md:flex items-center gap-8">
                    <a href="#inicio" class="text-sm font-bold tracking-wide text-white/80 hover:text-primary transition-colors uppercase">Inicio</a>
                    <a href="#disciplinas" class="text-sm font-bold tracking-wide text-white/80 hover:text-primary transition-colors uppercase">Disciplinas</a>
                    <a href="#horarios" class="text-sm font-bold tracking-wide text-white/80 hover:text-primary transition-colors uppercase">Horarios</a>
                    <a href="#ubicacion" class="text-sm font-bold tracking-wide text-white/80 hover:text-primary transition-colors uppercase">Ubicación</a>
                </nav>

                {/* CTA */}
                <a
                    href="https://wa.me/5491125358621?text=Hola!%20Quiero%20inscribirme%20en%20Keep%20Moving"
                    target="_blank"
                    class="hidden md:inline-flex items-center justify-center bg-primary px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-black transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    style="clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);"
                >
                    Inscribite Ahora
                </a>

                {/* Mobile menu button */}
                <button
                    onClick$={() => isMenuOpen.value = !isMenuOpen.value}
                    class="md:hidden text-white hover:text-primary transition-colors p-2"
                >
                    {isMenuOpen.value ? <XIcon class="h-6 w-6" /> : <MenuIcon class="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen.value && (
                <div class="md:hidden absolute top-20 left-0 w-full bg-[#050505]/95 backdrop-blur-md border-b border-white/10 flex flex-col items-center py-8 gap-6 shadow-2xl">
                    <a href="#inicio" onClick$={() => isMenuOpen.value = false} class="text-sm font-bold tracking-wide text-white/80 hover:text-primary transition-colors uppercase">Inicio</a>
                    <a href="#disciplinas" onClick$={() => isMenuOpen.value = false} class="text-sm font-bold tracking-wide text-white/80 hover:text-primary transition-colors uppercase">Disciplinas</a>
                    <a href="#horarios" onClick$={() => isMenuOpen.value = false} class="text-sm font-bold tracking-wide text-white/80 hover:text-primary transition-colors uppercase">Horarios</a>
                    <a href="#ubicacion" onClick$={() => isMenuOpen.value = false} class="text-sm font-bold tracking-wide text-white/80 hover:text-primary transition-colors uppercase">Ubicación</a>
                    <a
                        href="https://wa.me/5491125358621?text=Hola!%20Quiero%20inscribirme%20en%20Keep%20Moving"
                        target="_blank"
                        onClick$={() => isMenuOpen.value = false}
                        class="mt-4 inline-flex items-center justify-center bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wide text-black transition-all hover:bg-primary/90"
                        style="clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);"
                    >
                        Inscribite Ahora
                    </a>
                </div>
            )}
        </header>
    );
});
