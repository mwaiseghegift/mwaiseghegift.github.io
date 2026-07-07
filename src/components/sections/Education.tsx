'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { education } from '@/data/portfolio';

export default function Education() {
    return (
        <section
            id="education"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Education"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/95 px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Education
                </h2>
            </div>

            <ol className="space-y-8">
                {education.map((edu, i) => (
                    <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12, duration: 0.5 }}
                    >
                        <div className="group relative overflow-hidden rounded-lg border border-slate-700/50 bg-slate-800/30 p-5 transition-colors duration-200 hover:border-slate-600 hover:bg-slate-800/45">
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                                {edu.date}
                            </span>

                            <h3 className="mt-2 font-semibold text-slate-100 text-base leading-snug mb-1">
                                {edu.link !== '#' ? (
                                    <a
                                        href={edu.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group/link inline-flex items-center gap-2 hover:text-teal-300 transition-colors"
                                        aria-label={`${edu.title} at ${edu.company}`}
                                    >
                                        <GraduationCap className="h-4 w-4 shrink-0 text-teal-400" />
                                        {edu.title}
                                        <span className="text-slate-400 font-normal">·</span>
                                        <span className="text-teal-300/80">{edu.company}</span>
                                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 group-hover/link:opacity-100 transition-all group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                                    </a>
                                ) : (
                                    <span className="inline-flex items-center gap-2">
                                        <GraduationCap className="h-4 w-4 shrink-0 text-teal-400" />
                                        {edu.title}
                                        <span className="text-slate-400 font-normal">·</span>
                                        <span className="text-teal-300/80">{edu.company}</span>
                                    </span>
                                )}
                            </h3>

                            <p className="text-sm leading-relaxed text-slate-400 mb-4">
                                {edu.description}
                            </p>

                            <ul className="flex flex-wrap gap-1.5" aria-label="Coursework / skills">
                                {edu.tags.map((tag, j) => (
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
        </section>
    );
}
