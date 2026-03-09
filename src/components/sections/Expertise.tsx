'use client';

import { motion } from 'framer-motion';
import {
    LayoutTemplate, CheckCircle, Server, SlidersHorizontal,
    Cog, Palette, FileText, Globe, Code2, ArrowRight
} from 'lucide-react';
import { services } from '@/data/portfolio';
import { useState } from 'react';

// Icon Map
const IconMap: Record<string, React.ElementType> = {
    LayoutTemplate,
    CheckCircle,
    Server,
    SlidersHorizontal,
    Cog,
    Palette,
    FileText,
    Globe,
};

// Color theme per service (gradient bg, border, glow)
const themeMap: Record<string, { gradient: string; border: string; glow: string; badge: string }> = {
    LayoutTemplate: {
        gradient: 'from-blue-500/10 to-blue-500/0',
        border: 'border-blue-500/20 hover:border-blue-400/50',
        glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
        badge: 'bg-blue-500/10 text-blue-300 ring-blue-500/20',
    },
    CheckCircle: {
        gradient: 'from-green-500/10 to-green-500/0',
        border: 'border-green-500/20 hover:border-green-400/50',
        glow: 'group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]',
        badge: 'bg-green-500/10 text-green-300 ring-green-500/20',
    },
    Server: {
        gradient: 'from-indigo-500/10 to-indigo-500/0',
        border: 'border-indigo-500/20 hover:border-indigo-400/50',
        glow: 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]',
        badge: 'bg-indigo-500/10 text-indigo-300 ring-indigo-500/20',
    },
    SlidersHorizontal: {
        gradient: 'from-teal-500/10 to-teal-500/0',
        border: 'border-teal-500/20 hover:border-teal-400/50',
        glow: 'group-hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]',
        badge: 'bg-teal-500/10 text-teal-300 ring-teal-500/20',
    },
    Cog: {
        gradient: 'from-slate-400/10 to-slate-400/0',
        border: 'border-slate-400/20 hover:border-slate-300/50',
        glow: 'group-hover:shadow-[0_0_30px_rgba(148,163,184,0.15)]',
        badge: 'bg-slate-500/10 text-slate-300 ring-slate-500/20',
    },
    Palette: {
        gradient: 'from-pink-500/10 to-pink-500/0',
        border: 'border-pink-500/20 hover:border-pink-400/50',
        glow: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]',
        badge: 'bg-pink-500/10 text-pink-300 ring-pink-500/20',
    },
    FileText: {
        gradient: 'from-purple-500/10 to-purple-500/0',
        border: 'border-purple-500/20 hover:border-purple-400/50',
        glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
        badge: 'bg-purple-500/10 text-purple-300 ring-purple-500/20',
    },
    Globe: {
        gradient: 'from-yellow-500/10 to-yellow-500/0',
        border: 'border-yellow-500/20 hover:border-yellow-400/50',
        glow: 'group-hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]',
        badge: 'bg-yellow-500/10 text-yellow-300 ring-yellow-500/20',
    },
};

const DEFAULT_THEME = {
    gradient: 'from-teal-500/10 to-teal-500/0',
    border: 'border-teal-500/20 hover:border-teal-400/50',
    glow: 'group-hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]',
    badge: 'bg-teal-500/10 text-teal-300 ring-teal-500/20',
};

export default function Expertise() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section
            id="expertise"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Expertise & Technologies"
        >
            {/* Mobile sticky header */}
            <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Expertise
                </h2>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => {
                    const IconComp = IconMap[service.icon] || Code2;
                    const theme = themeMap[service.icon] || DEFAULT_THEME;
                    const isActive = activeIndex === index;

                    return (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            onClick={() => setActiveIndex(isActive ? null : index)}
                            className={`group relative cursor-pointer overflow-hidden rounded-2xl border bg-slate-800/30 backdrop-blur-sm transition-all duration-300 ${theme.border} ${theme.glow}`}
                        >
                            {/* Gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none`} />

                            {/* Card Content */}
                            <div className="relative p-5 space-y-3">
                                {/* Header row */}
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        {/* Icon container */}
                                        <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border bg-slate-900/60 transition-all duration-300 group-hover:scale-110 ${theme.border.split(' ')[0]}`}>
                                            <IconComp className={`h-5 w-5 ${service.color}`} />
                                        </div>

                                        <h3 className="text-sm font-semibold leading-tight text-slate-200 group-hover:text-white transition-colors">
                                            {service.title}
                                        </h3>
                                    </div>

                                    <ArrowRight
                                        className={`h-4 w-4 flex-shrink-0 text-slate-500 transition-all duration-300 ${isActive ? 'rotate-90 text-slate-300' : 'group-hover:translate-x-0.5 group-hover:text-slate-300'}`}
                                    />
                                </div>

                                {/* Description (always visible) */}
                                <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                                    {service.description}
                                </p>

                                {/* Expanded tech badges */}
                                <motion.div
                                    initial={false}
                                    animate={isActive ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-700/40">
                                        {service.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium ring-1 ring-inset transition-all ${theme.badge}`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Collapsed tag count pill */}
                                {!isActive && (
                                    <div className="flex items-center gap-1.5">
                                        <Code2 className="h-3 w-3 text-slate-600" />
                                        <span className="text-[10px] text-slate-500">
                                            {service.tags.length} technologies · tap to expand
                                        </span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
