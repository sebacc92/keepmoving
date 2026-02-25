import { component$ } from '@builder.io/qwik';
import { TargetIcon, UsersIcon, ZapIcon } from 'lucide-qwik';

export const Filosofia = component$(() => {
    return (
        <section class="relative bg-[#050505] py-24 sm:py-32 overflow-hidden border-t border-white/5">
            <div class="container mx-auto px-4 lg:px-8">

                {/* Section Header */}
                <div class="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
                    <h2 class="font-heading text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-6">
                        Moverse es <span class="text-primary">Avanzar</span>
                    </h2>
                    <p class="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
                        No solo entrenamos el cuerpo. Nuestra misión es ayudarte a ser fuerte mental y emocionalmente. En Keep Moving, cada gota de sudor es un paso hacia tu mejor versión.
                    </p>
                </div>

                {/* Bento Grid */}
                <div class="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">

                    {/* Card 1 */}
                    <div class="group relative overflow-hidden bg-[#111111] border border-white/5 p-8 transition-colors hover:border-primary/30"
                        style="clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px);">
                        <div class="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-[40px] transition-all group-hover:bg-primary/20"></div>
                        <div class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary border border-primary/20">
                            <TargetIcon class="h-6 w-6" />
                        </div>
                        <h3 class="font-heading text-xl font-bold uppercase text-white tracking-wide mb-3">
                            Entrenamiento Personalizado
                        </h3>
                        <p class="text-white/60 text-sm leading-relaxed">
                            Rutinas adaptadas a tus objetivos y nivel. Te guiamos paso a paso para asegurar que domines la técnica y obtengas resultados reales.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div class="group relative overflow-hidden bg-[#111111] border border-white/5 p-8 transition-colors hover:border-secondary/30 md:-translate-y-4"
                        style="clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px);">
                        <div class="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-secondary/10 blur-[40px] transition-all group-hover:bg-secondary/20"></div>
                        <div class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-secondary/10 text-secondary border border-secondary/20">
                            <UsersIcon class="h-6 w-6" />
                        </div>
                        <h3 class="font-heading text-xl font-bold uppercase text-white tracking-wide mb-3">
                            Comunidad
                        </h3>
                        <p class="text-white/60 text-sm leading-relaxed">
                            Entrenar en equipo potencia tu energía. En Keep Moving vas a encontrar un grupo que te motiva, te empuja y celebra tus logros con vos.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div class="group relative overflow-hidden bg-[#111111] border border-white/5 p-8 transition-colors hover:border-primary/30"
                        style="clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px);">
                        <div class="absolute left-1/2 -top-12 h-32 w-32 -translate-x-1/2 rounded-full bg-white/5 blur-[40px] transition-all group-hover:bg-primary/10"></div>
                        <div class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-white/5 text-white border border-white/10 group-hover:text-primary group-hover:border-primary/20 transition-colors">
                            <ZapIcon class="h-6 w-6" />
                        </div>
                        <h3 class="font-heading text-xl font-bold uppercase text-white tracking-wide mb-3">
                            Superación
                        </h3>
                        <p class="text-white/60 text-sm leading-relaxed">
                            Desafiá tus propios límites. Fomentamos una mentalidad ganadora para que seas más fuerte cada día, tanto adentro como afuera del gym.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
});
