'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import ProjectDrawer, { Project } from '../ui/ProjectDrawer';
import { portfolio as projects } from '@/data/portfolio';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = (project: Project, e: React.MouseEvent) => {
        e.preventDefault();
        setSelectedProject(project);
        setIsDrawerOpen(true);
    };

    return (
        <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Selected projects"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Projects
                </h2>
            </div>

            <ul className="space-y-5">
                {projects.map((project, i) => (
                    <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07, duration: 0.45 }}
                    >
                        <div
                            className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:border-teal-500/20 hover:bg-slate-800/50 hover:shadow-xl hover:shadow-slate-900/40 sm:flex-row"
                            onClick={(e) => openDrawer(project as Project, e as React.MouseEvent)}
                        >
                            {/* Thumbnail */}
                            {project.image && (
                                <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-auto sm:w-44">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, 176px"
                                    />
                                    {/* Dark overlay on hover */}
                                    <div className="absolute inset-0 bg-slate-900/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                    {/* Number badge */}
                                    <div className="absolute top-2 left-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/80 text-[10px] font-bold text-teal-400 border border-teal-500/30 backdrop-blur-sm">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                </div>
                            )}

                            {/* Content */}
                            <div className="flex flex-1 flex-col justify-between p-5 gap-3">
                                <div className="space-y-2">
                                    {/* Title row */}
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="font-semibold text-slate-100 text-sm leading-snug group-hover:text-teal-300 transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex shrink-0 items-center gap-1.5 mt-0.5">
                                            {project.link !== '#' && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="rounded-full p-1 text-slate-500 hover:text-teal-400 hover:bg-teal-400/10 transition-all"
                                                    aria-label={`Visit ${project.title}`}
                                                >
                                                    <ExternalLink className="h-3.5 w-3.5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Description — truncated */}
                                    <p className="text-xs leading-relaxed text-slate-400 line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tags */}
                                <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
                                    {project.tags.map((tag, j) => (
                                        <li key={j}>
                                            <span className="inline-flex items-center rounded-full bg-teal-400/10 border border-teal-400/10 px-2 py-0.5 text-[10px] font-medium text-teal-300">
                                                {tag}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Hover right arrow hint */}
                            <div className="absolute bottom-4 right-4 flex h-7 w-7 items-center justify-center rounded-full border border-slate-600/40 bg-slate-800/60 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:border-teal-500/30 group-hover:bg-teal-500/10">
                                <ArrowUpRight className="h-3.5 w-3.5 text-teal-400" />
                            </div>
                        </div>
                    </motion.li>
                ))}
            </ul>

            {/* View Archive CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-10"
            >
                <a
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-teal-300 transition-colors"
                    href="/archive"
                    aria-label="View Full Project Archive"
                >
                    <span className="border-b border-transparent pb-px transition group-hover:border-teal-300">
                        View Full Project Archive
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
            </motion.div>

            <ProjectDrawer
                project={selectedProject}
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            />
        </section>
    );
}
