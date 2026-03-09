'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, MapPin } from 'lucide-react';
import { workHistory as experiences } from '@/data/portfolio';

const typeColors: Record<string, string> = {
    'Full-time': 'bg-teal-400/10 text-teal-300 border-teal-400/20',
    'Contract': 'bg-indigo-400/10 text-indigo-300 border-indigo-400/20',
    'Internship': 'bg-purple-400/10 text-purple-300 border-purple-400/20',
};

export default function Experience() {
    return (
        <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Experience
                </h2>
            </div>

            {/* Timeline container */}
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-teal-400/60 via-indigo-400/30 to-transparent" />

                <ol className="space-y-8">
                    {experiences.map((exp, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.5 }}
                            className="relative pl-12"
                        >
                            {/* Timeline dot */}
                            <span className="absolute left-0 top-5 flex h-9 w-9 items-center justify-center">
                                <span className="absolute inset-0 rounded-full bg-teal-400/10 animate-ping opacity-30" style={{ animationDelay: `${i * 0.4}s`, animationDuration: '3s' }} />
                                <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-teal-400/30 bg-slate-900 shadow-md shadow-teal-500/10">
                                    <Briefcase className="h-4 w-4 text-teal-400" />
                                </span>
                            </span>

                            {/* Card */}
                            <div className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm p-5 transition-all duration-300 hover:border-slate-600/60 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-slate-900/40">
                                {/* Ambient top glow */}
                                <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-teal-500/5 blur-2xl group-hover:bg-teal-500/10 transition-colors duration-500" />

                                {/* Top row: date + type badge */}
                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                    <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                                        {exp.date}
                                    </span>
                                    {exp.type && (
                                        <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${typeColors[exp.type] ?? 'bg-slate-700/40 text-slate-400 border-slate-600/40'}`}>
                                            {exp.type}
                                        </span>
                                    )}
                                </div>

                                {/* Role + Company */}
                                <h3 className="font-semibold text-slate-100 text-base leading-snug mb-1">
                                    <a
                                        href={exp.link !== '#' ? exp.link : undefined}
                                        target={exp.link !== '#' ? '_blank' : undefined}
                                        rel={exp.link !== '#' ? 'noreferrer' : undefined}
                                        className="group/link inline-flex items-center gap-1 hover:text-teal-300 transition-colors"
                                        aria-label={`${exp.title} at ${exp.company}`}
                                    >
                                        {exp.title}
                                        <span className="text-slate-400 font-normal">·</span>
                                        <span className="text-teal-300/80">{exp.company}</span>
                                        {exp.link !== '#' && (
                                            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 group-hover/link:opacity-100 transition-all group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                                        )}
                                    </a>
                                </h3>

                                {/* Location */}
                                <div className="flex items-center gap-1 mb-3">
                                    <MapPin className="h-3 w-3 text-slate-500" />
                                    <span className="text-[11px] text-slate-500">{exp.location}</span>
                                </div>

                                {/* Description */}
                                <p className="text-sm leading-relaxed text-slate-400 mb-4">
                                    {exp.description}
                                </p>

                                {/* Tags */}
                                <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
                                    {exp.tags.map((tag, j) => (
                                        <li key={j}>
                                            <span className="inline-flex items-center rounded-full bg-teal-400/10 border border-teal-400/10 px-2.5 py-0.5 text-[10px] font-medium text-teal-300">
                                                {tag}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.li>
                    ))}
                </ol>

                {/* View Resume CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-10 pl-12"
                >
                    <a
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-teal-300 transition-colors"
                        href="/Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300">
                            View Full Resume
                        </span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
