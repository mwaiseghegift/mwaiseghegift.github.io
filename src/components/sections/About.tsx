'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/portfolio';
import { MapPin, Code2, Layers, Zap, ExternalLink, Globe } from 'lucide-react';

const highlights = [
    { label: 'Years Experience', value: '3+', icon: Zap },
    { label: 'Projects Shipped', value: '8+', icon: Layers },
    { label: 'Tech Stack', value: '15+', icon: Code2 },
];

const summaryParagraphs = profile.summary.split('\n\n');

export default function About() {
    return (
        <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
        >
            {/* Mobile sticky header */}
            <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-slate-900/95 px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    About
                </h2>
            </div>

            <div className="space-y-8">
                {/* — Bio block — */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="relative"
                >
                    <div className="relative overflow-hidden rounded-lg border border-slate-700/60 bg-slate-800/30">
                        <div className="p-5 space-y-5">
                            {/* Availability + location row */}
                            <div className="flex flex-wrap items-center gap-2">
                                {/* Pulsing availability badge */}
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-teal-300">
                                    Available
                                </span>

                                {/* Location badge */}
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/60 bg-slate-800/60 px-3 py-1 text-[10px] text-slate-400">
                                    <MapPin className="h-3 w-3 text-teal-400" />
                                    {profile.city}, {profile.residence}
                                </span>

                                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/60 bg-slate-800/60 px-3 py-1 text-[10px] text-slate-400">
                                    <Globe className="h-3 w-3 text-slate-500" />
                                    Remote / On-site
                                </span>
                            </div>

                            <div className="h-px bg-slate-700/60" />

                            {/* Intro headline */}
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-widest text-teal-400 mb-1.5">
                                    Who I Am
                                </p>
                                <p className="text-base leading-relaxed text-slate-300">
                                    <span className="font-bold text-slate-100">
                                        {profile.headline}
                                    </span>
                                </p>
                            </div>

                            {/* Body paragraphs with left accent */}
                            <div className="relative space-y-3 pl-4">
                                <div className="absolute left-0 top-1 bottom-1 w-px bg-slate-700" />
                                {summaryParagraphs.map((paragraph) => (
                                    <p key={paragraph} className="text-sm leading-relaxed text-slate-400">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                    </div>
                </motion.div>

                {/* — Stat counters — */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="grid grid-cols-3 gap-3"
                >
                    {highlights.map(({ label, value, icon: Icon }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center gap-1.5 rounded-lg border border-slate-700/60 bg-slate-800/30 px-3 py-4 text-center"
                        >
                            <Icon className="h-5 w-5 text-teal-400" />
                            <span className="text-2xl font-bold text-slate-100">{value}</span>
                            <span className="text-[10px] leading-tight text-slate-400 uppercase tracking-wider">{label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* — Primary stacks — */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="space-y-3"
                >
                    <div className="flex items-center gap-2">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Primary Stacks</h3>
                        <div className="h-px flex-1 bg-slate-800" />
                    </div>
                    <ul className="flex flex-wrap gap-2">
                        {profile.techStack.map((stack) => (
                            <li
                                key={stack}
                                className="rounded-lg border border-slate-700/50 bg-slate-800/40 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-800/60"
                            >
                                {stack}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* — Resume CTA — */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <a
                        href={profile.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-lg border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm font-semibold text-teal-300 transition-colors hover:border-teal-400/60 hover:bg-teal-500/15"
                    >
                        View Full Résumé
                        <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
