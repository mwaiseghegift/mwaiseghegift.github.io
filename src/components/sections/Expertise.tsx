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

export default function Expertise() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section
            id="expertise"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Expertise & Technologies"
        >
            {/* Mobile sticky header */}
            <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-slate-900/95 px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Expertise
                </h2>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => {
                    const IconComp = IconMap[service.icon] || Code2;
                    const isActive = activeIndex === index;

                    return (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            onClick={() => setActiveIndex(isActive ? null : index)}
                            className="group relative cursor-pointer overflow-hidden rounded-lg border border-slate-700/50 bg-slate-800/30 transition-colors duration-200 hover:border-slate-600 hover:bg-slate-800/45"
                        >
                            {/* Card Content */}
                            <div className="relative p-5 space-y-3">
                                {/* Header row */}
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        {/* Icon container */}
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-slate-700/60 bg-slate-900/60">
                                            <IconComp className="h-5 w-5 text-teal-400" />
                                        </div>

                                        <h3 className="text-sm font-semibold leading-tight text-slate-200 transition-colors group-hover:text-slate-100">
                                            {service.title}
                                        </h3>
                                    </div>

                                    <ArrowRight
                                        className={`h-4 w-4 flex-shrink-0 text-slate-500 transition-transform duration-200 ${isActive ? 'rotate-90 text-slate-300' : 'group-hover:text-slate-300'}`}
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
                                                className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-900/40 px-2.5 py-0.5 text-[10px] font-medium text-slate-300"
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
