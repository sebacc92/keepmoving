import { component$, useSignal } from '@builder.io/qwik';

export type ActivityType = 'boxeo' | 'funcional' | 'libre' | 'adultos' | 'running' | 'empty';

export type Activity = {
    name: string;
    type: ActivityType;
};

export type Slot = {
    id: string;
    time: string;
    duration: number; // minutes
    activities: Activity[];
};

export type DaySchedule = {
    name: string;
    short: string;
    slots: Slot[];
};

// Horarios extraidos 100% fiel
const LUN_VIE: Slot[] = [
    { id: '1', time: '07:00', duration: 180, activities: [{ name: 'E. Funcional', type: 'funcional' }] },
    { id: '2', time: '10:00', duration: 60, activities: [{ name: 'Adultos Mayores', type: 'adultos' }] },
    { id: '3', time: '11:00', duration: 180, activities: [{ name: 'Libre c/supervisión', type: 'libre' }] },
    { id: '4', time: '14:00', duration: 80, activities: [{ name: 'Boxeo', type: 'boxeo' }] },
    { id: '5', time: '15:20', duration: 40, activities: [{ name: 'Boxeo', type: 'boxeo' }] },
    { id: '6', time: '16:00', duration: 60, activities: [{ name: 'Boxeo', type: 'boxeo' }] },
    { id: '7', time: '17:00', duration: 60, activities: [{ name: 'E. Funcional', type: 'funcional' }, { name: 'Libre', type: 'libre' }] },
    { id: '8', time: '18:00', duration: 180, activities: [{ name: 'E. Funcional', type: 'funcional' }] },
    { id: '9', time: '21:00', duration: 60, activities: [{ name: 'E. Funcional', type: 'funcional' }, { name: 'Libre', type: 'libre' }] },
];

const MIE: Slot[] = LUN_VIE.map((slot, i) =>
    i === 6
        ? { ...slot, activities: [{ name: 'E. Funcional', type: 'funcional' }, { name: 'Libre/Pers.', type: 'libre' }] }
        : slot
);

const MAR_JUE: Slot[] = [
    { id: '1', time: '07:00', duration: 60, activities: [{ name: 'Fuerza Running', type: 'running' }] },
    { id: '2', time: '08:00', duration: 180, activities: [{ name: 'E. Funcional', type: 'funcional' }] },
    { id: '3', time: '11:00', duration: 180, activities: [{ name: 'Libre c/supervisión', type: 'libre' }] },
    { id: '4', time: '14:00', duration: 180, activities: [{ name: 'E. Funcional', type: 'funcional' }] },
    { id: '5', time: '17:00', duration: 60, activities: [{ name: 'Libre c/supervisión', type: 'libre' }] },
    { id: '6', time: '18:00', duration: 180, activities: [{ name: 'E. Funcional', type: 'funcional' }] },
    { id: '7', time: '21:00', duration: 60, activities: [{ name: 'E. Funcional', type: 'funcional' }] },
];

const SAB: Slot[] = [
    { id: '1', time: '07:00', duration: 120, activities: [{ name: '', type: 'empty' }] },
    { id: '2', time: '09:00', duration: 240, activities: [{ name: 'Libre c/supervisión', type: 'libre' }] },
    { id: '3', time: '13:00', duration: 540, activities: [{ name: '', type: 'empty' }] },
];

export const SCHEDULE_DATA: DaySchedule[] = [
    { name: 'Lunes', short: 'LUN', slots: LUN_VIE },
    { name: 'Martes', short: 'MAR', slots: MAR_JUE },
    { name: 'Miércoles', short: 'MIE', slots: MIE },
    { name: 'Jueves', short: 'JUE', slots: MAR_JUE },
    { name: 'Viernes', short: 'VIE', slots: LUN_VIE },
    { name: 'Sábado', short: 'SAB', slots: SAB },
];

export const ScheduleGrid = component$(() => {
    const selectedFilter = useSignal<ActivityType | 'all'>('all');
    const selectedDay = useSignal<string>('Lunes');

    const filters = [
        { id: 'all', label: 'Todos' },
        { id: 'boxeo', label: 'Boxeo' },
        { id: 'funcional', label: 'Funcional' },
        { id: 'libre', label: 'Libre' },
        { id: 'adultos', label: 'Adultos' },
        { id: 'running', label: 'Running' },
    ];

    const getActivityColor = (type: ActivityType, isSelected: boolean) => {
        if (type === 'empty') return 'border-transparent bg-transparent';
        const base = isSelected ? 'opacity-100 hover:scale-[1.02] z-10' : 'opacity-20 grayscale brightness-50 z-0';
        switch (type) {
            case 'boxeo': return `bg-[#EAB308]/20 border-[#EAB308]/50 text-[#EAB308] shadow-[0_0_15px_rgba(234,179,8,0.15)] ${base}`;
            case 'funcional': return `bg-[#9CA3AF]/10 border-[#9CA3AF]/30 text-[#D1D5DB] ${base}`;
            case 'libre': return `bg-[#3B82F6]/20 border-[#3B82F6]/50 text-[#60A5FA] ${base}`;
            case 'adultos': return `bg-[#60A5FA]/20 border-[#60A5FA]/50 text-[#93C5FD] ${base}`;
            case 'running': return `bg-[#000000] border-[#333333] text-white shadow-inner ${base}`;
            default: return '';
        }
    };

    const isActivitySelected = (type: ActivityType) => {
        return selectedFilter.value === 'all' || selectedFilter.value === type;
    };

    return (
        <section id="horarios" class="bg-[#050505] py-24 sm:py-32 border-t border-white/5 relative">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.03),transparent_50%)]"></div>
            <div class="container mx-auto px-4 lg:px-8 relative z-10">

                <div class="text-center mb-12 sm:mb-16">
                    <h2 class="font-heading text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
                        Grilla de <span class="text-secondary">Horarios</span>
                    </h2>
                    <p class="text-white/60 mx-auto max-w-2xl text-lg mb-8">
                        Filtrá por actividad y encontrá tu clase ideal.
                    </p>

                    {/* Filters (Pills) */}
                    <div class="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
                        {filters.map(f => (
                            <button
                                key={f.id}
                                onClick$={() => selectedFilter.value = f.id as any}
                                class={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all border ${selectedFilter.value === f.id
                                        ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                                        : 'bg-white/5 text-white/60 border-white/10 hover:border-white/30 hover:text-white'
                                    }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mobile View: Day Tabs + List */}
                <div class="md:hidden">
                    <div class="flex overflow-x-auto gap-2 pb-4 mb-4 hide-scrollbar snap-x">
                        {SCHEDULE_DATA.map(day => (
                            <button
                                key={day.name}
                                onClick$={() => selectedDay.value = day.name}
                                class={`snap-center shrink-0 px-6 py-3 rounded-md text-sm font-bold uppercase tracking-widest transition-all border ${selectedDay.value === day.name
                                        ? 'bg-primary text-black border-primary shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                                        : 'bg-[#111] text-white/50 border-white/5 hover:bg-white/5'
                                    }`}
                            >
                                {day.short}
                            </button>
                        ))}
                    </div>

                    <div class="flex flex-col gap-3">
                        {SCHEDULE_DATA.find(d => d.name === selectedDay.value)?.slots
                            .filter(slot => slot.activities[0].type !== 'empty') // Ignorar los huecos en mobile
                            .map(slot => (
                                <div key={slot.id} class="bg-[#111] border border-white/5 rounded-lg p-4 flex flex-col gap-3">
                                    <div class="flex items-center justify-between border-b border-white/10 pb-2">
                                        <span class="text-white font-mono font-bold text-lg">{slot.time}</span>
                                        <span class="text-white/40 text-xs font-medium uppercase tracking-wider">{slot.duration} MIN</span>
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        {slot.activities.map((act, i) => {
                                            const selected = isActivitySelected(act.type);
                                            return (
                                                <div
                                                    key={i}
                                                    class={`w-full p-3 rounded-md border text-sm font-bold text-center tracking-wide transition-all duration-300 ${getActivityColor(act.type, selected)}`}
                                                >
                                                    {act.name}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Desktop View: Full Grid Matrix */}
                <div class="hidden md:block w-full overflow-hidden bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl">
                    <div class="grid grid-cols-6 divide-x divide-white/5">
                        {SCHEDULE_DATA.map(day => (
                            <div key={day.name} class="flex flex-col">
                                <div class="bg-[#111] p-4 text-center border-b border-white/5 relative z-20">
                                    <span class="font-heading font-black text-white/80 uppercase tracking-widest">{day.name}</span>
                                </div>
                                {/* 1.3px = 1 min = 78px por hora (proporciones perfectas sin rowspans) */}
                                <div class="relative w-full flex flex-col p-[2px] gap-[2px]">
                                    {day.slots.map(slot => (
                                        <div
                                            key={slot.id}
                                            class="w-full flex gap-[2px] group relative"
                                            style={{ height: `${slot.duration * 1.3}px`, minHeight: '30px' }}
                                            title={`${slot.time} (${slot.duration} min)`}
                                        >
                                            {slot.activities.map((act, i) => {
                                                const isSel = isActivitySelected(act.type);
                                                return (
                                                    <div
                                                        key={i}
                                                        class={`flex-1 flex flex-col items-center justify-center p-2 rounded break-words border text-center transition-all duration-300 overflow-hidden relative ${getActivityColor(act.type, isSel)
                                                            }`}
                                                    >
                                                        {act.type !== 'empty' && (
                                                            <>
                                                                <span class="text-[11px] lg:text-xs font-black uppercase tracking-wider mb-[2px] leading-tight block">{act.name}</span>
                                                                <span class="text-[10px] font-mono opacity-60 block">{slot.time}</span>
                                                            </>
                                                        )}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
});
