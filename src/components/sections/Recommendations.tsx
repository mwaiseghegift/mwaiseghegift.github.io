'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { recommendations } from '@/data/portfolio';

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
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/95 px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Recommendations
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {recommendations.map((rec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative flex flex-col rounded-lg border border-slate-700/50 bg-slate-800/30 transition-colors duration-200 hover:border-slate-600 hover:bg-slate-800/45"
                        >
                            <div className="relative z-10 flex flex-col flex-grow p-6 space-y-4">
                                {/* Stars */}
                                <div className="flex gap-0.5">
                                    {[...Array(rec.rating)].map((_, i) => (
                                        <Star key={i} className="h-3.5 w-3.5 fill-teal-400 text-teal-400" />
                                    ))}
                                </div>

                                {/* Quote text */}
                                <p className="text-sm leading-relaxed text-slate-300 flex-grow italic">
                                    &ldquo;{rec.text}&rdquo;
                                </p>

                                {/* Divider */}
                                <div className="h-px w-full bg-slate-700/60" />

                                {/* Author row */}
                                <div className="flex items-center gap-3 pt-1">
                                    {/* Avatar */}
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-teal-400/20 bg-teal-400/10 text-xs font-bold text-teal-300">
                                        {getInitials(rec.name)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-100">{rec.name}</p>
                                        <p className="text-[11px] text-slate-400">{rec.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                ))}
            </div>
        </section>
    );
}
