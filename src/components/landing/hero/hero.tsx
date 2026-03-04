import { component$ } from '@builder.io/qwik';
import { ArrowRightIcon, CalendarDaysIcon, StarIcon } from 'lucide-qwik';

export const Hero = component$(() => {
    return (
        <section id="inicio" class="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-[#050505] pt-20">
            {/* Background effect */}
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,68,204,0.1),transparent_70%)]"></div>
            <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

            <div class="container relative mx-auto px-4 lg:px-8 flex flex-col items-center text-center z-10">

                {/* Promo Badge */}
                <div class="mb-8 animate-pulse rounded-2xl sm:rounded-full border border-primary/50 bg-primary/10 px-4 sm:px-6 py-2 sm:py-1.5 text-xs sm:text-sm font-bold text-primary shadow-[0_0_15px_rgba(212,175,55,0.3)] backdrop-blur-md flex items-center gap-2 max-w-[90vw] sm:max-w-xl text-center justify-center mx-auto">
                    <StarIcon class="h-4 w-4 shrink-0 hidden sm:block" />
                    <span>
                        <StarIcon class="h-3 w-3 sm:hidden mb-0.5 inline-block mr-1" />
                        <h1>Gimnasio en Miramar</h1>
                    </span>
                </div>

                {/* Headline */}
                <h2 class="font-heading text-5xl font-black tracking-tight text-white sm:text-7xl md:text-8xl max-w-5xl uppercase leading-[0.9]">
                    Tu mejor versión <br class="hidden lg:block" /> se <br class="hidden sm:block lg:hidden" />
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                        construye en movimiento.
                    </span>
                </h2>

                {/* Subheadline */}
                <div class="mt-8 flex flex-col items-center gap-4 text-center">
                    <p class="max-w-2xl text-lg font-medium text-white/80 sm:text-xl">
                        Entrenamiento consciente, fuerza y comunidad en Miramar.
                    </p>
                </div>

                {/* CTAs */}
                <div class="mt-12 flex w-full flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <a
                        href="https://wa.me/5491125358621?text=Hola!%20Quiero%20reservar%20mi%20lugar%20aprovechando%20la%20promo%20apertura!"
                        target="_blank"
                        class="group flex w-full sm:w-auto items-center justify-center gap-2 bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                        style="clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);"
                    >
                        Súmate a la tribu
                        <ArrowRightIcon class="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>

                    <a
                        href="#horarios"
                        class="group flex w-full sm:w-auto items-center justify-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-white/10 hover:border-primary/50"
                        style="clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);"
                    >
                        Ver Horarios
                        <CalendarDaysIcon class="h-4 w-4 text-white/50 group-hover:text-primary transition-colors" />
                    </a>
                </div>
            </div>
        </section>
    );
});
