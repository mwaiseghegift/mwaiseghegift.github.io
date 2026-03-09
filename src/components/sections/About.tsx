'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/portfolio';
import { MapPin, Code2, Layers, Zap, ExternalLink, Sparkles, Globe, ArrowRight } from 'lucide-react';

const highlights = [
    { label: 'Years Experience', value: '3+', icon: Zap, color: 'text-teal-400', bg: 'bg-teal-400/10', border: 'border-teal-400/20' },
    { label: 'Projects Shipped', value: '8+', icon: Layers, color: 'text-indigo-400', bg: 'bg-indigo-400/10', border: 'border-indigo-400/20' },
    { label: 'Tech Stack', value: '15+', icon: Code2, color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20' },
];

const topSkills = profile.skills.slice(0, 12);

const summaryParagraphs = profile.summary.split('\n\n');

export default function About() {
    return (
        <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
        >
            {/* Mobile sticky header */}
            <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
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
                    {/* Ambient glow behind card */}
                    <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-br from-teal-500/10 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-700" />

                    {/* Glass card */}
                    <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">

                        {/* Top gradient accent bar */}
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />

                        {/* Corner sparkle decoration */}
                        <div className="pointer-events-none absolute right-4 top-4 opacity-20">
                            <Sparkles className="h-16 w-16 text-teal-300" />
                        </div>

                        <div className="p-5 space-y-5">
                            {/* Availability + location row */}
                            <div className="flex flex-wrap items-center gap-2">
                                {/* Pulsing availability badge */}
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-teal-300">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
                                    </span>
                                    Available
                                </span>

                                {/* Location badge */}
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/60 bg-slate-800/60 px-3 py-1 text-[10px] text-slate-400">
                                    <MapPin className="h-3 w-3 text-teal-400" />
                                    {profile.city}, {profile.residence}
                                </span>

                                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/60 bg-slate-800/60 px-3 py-1 text-[10px] text-slate-400">
                                    <Globe className="h-3 w-3 text-indigo-400" />
                                    Remote / On-site
                                </span>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gradient-to-r from-slate-700/80 via-slate-600/40 to-transparent" />

                            {/* Intro headline */}
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-widest text-teal-400 mb-1.5">
                                    — Who I Am
                                </p>
                                <p className="text-base leading-relaxed text-slate-300">
                                    <span className="text-white font-bold bg-gradient-to-r from-teal-300 to-indigo-300 bg-clip-text text-transparent">
                                        Detail-oriented Software Engineer
                                    </span>{' '}
                                    {summaryParagraphs[0]?.split(' ').slice(5).join(' ')}
                                </p>
                            </div>

                            {/* Second paragraph with left accent */}
                            {summaryParagraphs[1] && (
                                <div className="relative pl-4">
                                    <div className="absolute left-0 top-1 bottom-1 w-0.5 rounded-full bg-gradient-to-b from-indigo-400/70 via-purple-400/50 to-teal-400/30" />
                                    <p className="text-sm leading-relaxed text-slate-400">
                                        {summaryParagraphs[1]}
                                    </p>
                                </div>
                            )}

                            {/* Key traits pills row */}
                            <div className="flex flex-wrap gap-2 pt-1">
                                {['Clean Code Advocate', 'API Architect', 'CI/CD Enthusiast', 'Problem Solver'].map((trait) => (
                                    <span
                                        key={trait}
                                        className="inline-flex items-center gap-1 rounded-full bg-slate-700/50 border border-slate-600/40 px-2.5 py-0.5 text-[10px] font-medium text-slate-300"
                                    >
                                        <ArrowRight className="h-2.5 w-2.5 text-teal-400" />
                                        {trait}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Bottom gradient accent bar */}
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
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
                    {highlights.map(({ label, value, icon: Icon, color, bg, border }) => (
                        <div
                            key={label}
                            className={`group flex flex-col items-center gap-1.5 rounded-xl border ${border} ${bg} px-3 py-4 text-center transition-all duration-300 hover:scale-105`}
                        >
                            <Icon className={`h-5 w-5 ${color}`} />
                            <span className={`text-2xl font-bold ${color}`}>{value}</span>
                            <span className="text-[10px] leading-tight text-slate-400 uppercase tracking-wider">{label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* — Skill Grid (New Core Proficiencies) — */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="space-y-4"
                >
                    <div className="flex items-center gap-2">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Core Proficiencies</h3>
                        <div className="h-px flex-1 bg-slate-800" />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {topSkills.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                transition={{
                                    opacity: { duration: 0.2 },
                                    delay: i * 0.03
                                }}
                                className="group relative"
                            >
                                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-teal-500/20 to-indigo-500/20 opacity-0 blur group-hover:opacity-100 transition duration-300"></div>
                                <div className="relative flex items-center gap-2 rounded-lg border border-slate-700/50 bg-slate-800/40 px-3 py-2 transition-colors group-hover:border-teal-500/30 group-hover:bg-slate-800/60">
                                    <div className="h-1.5 w-1.5 rounded-full bg-teal-400 group-hover:bg-teal-300 transition-colors" />
                                    <span className="text-xs font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
                                        {skill.name}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* — Tech stacks — */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-3"
                >
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Preferred Stacks</h3>
                    <ul className="flex flex-wrap gap-2">
                        {profile.techStack.map((stack) => (
                            <li
                                key={stack}
                                className="rounded-lg border border-slate-700/50 bg-slate-800/40 px-3 py-1.5 text-xs text-slate-300 hover:border-teal-500/40 hover:bg-teal-500/10 hover:text-teal-300 transition-all duration-200"
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
                        className="group inline-flex items-center gap-2 rounded-lg border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm font-semibold text-teal-300 transition-all hover:border-teal-400/60 hover:bg-teal-500/20 hover:shadow-[0_0_20px_rgba(45,212,191,0.15)]"
                    >
                        View Full Résumé
                        <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
