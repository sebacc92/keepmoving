import { component$ } from '@builder.io/qwik';
import { ActivityIcon, DumbbellIcon, HeartPulseIcon, InfinityIcon } from 'lucide-qwik';

export const Disciplinas = component$(() => {
    const disciplinas = [
        {
            title: 'Entrenamiento Funcional',
            desc: 'Rutinas dinámicas que preparan tu cuerpo para las actividades del día a día. Movilidad, fuerza y resistencia integral.',
            icon: ActivityIcon,
        },
        {
            title: 'Boxeo',
            desc: 'Opciones para todos los niveles: Formativo, Recreativo y Competitivo. Aprendé la técnica, ganá agilidad y descargate.',
            icon: DumbbellIcon,
            highlight: false
        },
        {
            title: 'Adultos Mayores',
            desc: 'Entrenamiento preventivo y de movilidad enfocado en mejorar la calidad de vida, fortalecer huesos y prevenir lesiones.',
            icon: HeartPulseIcon,
        },
        {
            title: 'Fuerza Running',
            desc: 'Adaptación física y fuerza complementaria para corredores. Mejorá tus tiempos y corré sin dolor.',
            icon: ActivityIcon,
        },
        {
            title: 'Libre con Supervisión',
            desc: 'Vení a entrenar a tu ritmo usando nuestras instalaciones. Siempre habrá un profe a disposición para corregirte o guiarte.',
            icon: InfinityIcon,
        },
    ];

    return (
        <section id="disciplinas" class="bg-[#050505] py-24 sm:py-32 relative border-t border-white/5">
            {/* Background Decor */}
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(212,175,55,0.03),transparent_50%)]"></div>

            <div class="container mx-auto px-4 lg:px-8 relative z-10">
                <div class="text-center mb-16">
                    <h2 class="font-heading text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
                        Nuestras <span class="text-primary">Disciplinas</span>
                    </h2>
                    <p class="text-white/60 mx-auto max-w-2xl text-lg">
                        Encontrá la modalidad que mejor se adapte a tus objetivos.
                    </p>
                </div>

                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {disciplinas.map((item, i) => (
                        <div
                            key={i}
                            class={`group relative overflow-hidden bg-[#111111] border p-8 transition-colors ${item.highlight
                                ? 'border-primary/40 hover:border-primary lg:col-span-2 xl:col-span-1 shadow-[0_0_20px_rgba(212,175,55,0.05)]'
                                : 'border-white/5 hover:border-white/20'
                                }`}
                            style="clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);"
                        >
                            {item.highlight && (
                                <div class="absolute right-0 top-0 bg-primary px-3 py-1 text-xs font-bold text-black uppercase tracking-wider rounded-bl-sm">
                                    Destacado
                                </div>
                            )}
                            <div class={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-sm border ${item.highlight ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-white/5 border-white/10 text-white group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20'
                                } transition-colors`}>
                                <item.icon class="h-7 w-7" />
                            </div>
                            <h3 class="font-heading text-xl font-bold uppercase text-white tracking-wide mb-3">
                                {item.title}
                            </h3>
                            <p class="text-white/60 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});
