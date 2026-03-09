'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { recommendations } from '@/data/portfolio';

// Distinct accent colors per card
const accents = [
    { border: 'border-teal-500/30', glow: 'from-teal-500/10', quote: 'text-teal-400/20', avatar: 'from-teal-500 to-teal-700', star: 'fill-teal-400 text-teal-400' },
    { border: 'border-indigo-500/30', glow: 'from-indigo-500/10', quote: 'text-indigo-400/20', avatar: 'from-indigo-500 to-indigo-700', star: 'fill-indigo-400 text-indigo-400' },
    { border: 'border-purple-500/30', glow: 'from-purple-500/10', quote: 'text-purple-400/20', avatar: 'from-purple-500 to-purple-700', star: 'fill-purple-400 text-purple-400' },
    { border: 'border-sky-500/30', glow: 'from-sky-500/10', quote: 'text-sky-400/20', avatar: 'from-sky-500 to-sky-700', star: 'fill-sky-400 text-sky-400' },
];

function getInitials(name: string) {
    return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

export default function Recommendations() {
    return (
        <section
            id="recommendations"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Recommendations"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Recommendations
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {recommendations.map((rec, index) => {
                    const accent = accents[index % accents.length];
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`group relative flex flex-col overflow-hidden rounded-2xl border ${accent.border} bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg`}
                        >
                            {/* Top accent glow strip */}
                            <div className={`h-px w-full bg-gradient-to-r from-transparent ${accent.glow.replace('from-', 'via-').replace('/10', '/50')} to-transparent`} />

                            {/* Ambient background glow */}
                            <div className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${accent.glow} to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Giant decorative quote mark */}
                            <div className={`pointer-events-none absolute -bottom-4 right-4 select-none text-[9rem] font-serif leading-none ${accent.quote} transition-all duration-500 group-hover:scale-110 group-hover:opacity-40`}>
                                &ldquo;
                            </div>

                            <div className="relative z-10 flex flex-col flex-grow p-6 space-y-4">
                                {/* Stars */}
                                <div className="flex gap-0.5">
                                    {[...Array(rec.rating)].map((_, i) => (
                                        <Star key={i} className={`h-3.5 w-3.5 ${accent.star}`} />
                                    ))}
                                </div>

                                {/* Quote text */}
                                <p className="text-sm leading-relaxed text-slate-300 flex-grow italic">
                                    &ldquo;{rec.text}&rdquo;
                                </p>

                                {/* Divider */}
                                <div className="h-px w-full bg-gradient-to-r from-slate-700/60 to-transparent" />

                                {/* Author row */}
                                <div className="flex items-center gap-3 pt-1">
                                    {/* Avatar */}
                                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${accent.avatar} text-xs font-bold text-white shadow-md`}>
                                        {getInitials(rec.name)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-100">{rec.name}</p>
                                        <p className="text-[11px] text-slate-400">{rec.role}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom accent strip */}
                            <div className={`h-px w-full bg-gradient-to-r from-transparent ${accent.glow.replace('from-', 'via-').replace('/10', '/30')} to-transparent`} />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
