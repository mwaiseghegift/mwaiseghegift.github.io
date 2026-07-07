'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Github, Lock } from 'lucide-react';
import Image from 'next/image';

export interface Project {
    title: string;
    link: string;
    description: string;
    tags: string[];
    github?: string;
    image?: string;
    longDescription?: string;
}

interface ProjectDrawerProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectDrawer({ project, isOpen, onClose }: ProjectDrawerProps) {
    const drawerRef = useRef<HTMLDivElement>(null);

    // Close on escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && project && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-slate-950/70 transition-opacity"
                        aria-hidden="true"
                    />

                    {/* Drawer Panel */}
                    <motion.div
                        ref={drawerRef}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-lg flex-col overflow-hidden border-l border-slate-700/60 bg-slate-900 sm:max-w-xl"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="drawer-title"
                    >
                        {/* Header & Close Button (Sticky) */}
                        <div className="z-10 flex items-center justify-between border-b border-slate-800 px-6 py-4 sm:px-8">
                            <h2 id="drawer-title" className="text-lg font-bold tracking-tight text-slate-200">
                                Project Details
                            </h2>
                            <button
                                onClick={onClose}
                                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300"
                                aria-label="Close panel"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto">
                            {/* Hero Image or Fallback */}
                            {project.image && !project.image.includes('#') ? (
                                <div className="relative aspect-video w-full overflow-hidden bg-slate-800 border-b border-slate-800/50">
                                    <Image 
                                        src={project.image} 
                                        alt={`Screenshot of ${project.title}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover"
                                        priority
                                        onError={(e) => {
                                            // Fallback if image fails to load
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent) {
                                                parent.className = "relative flex aspect-video w-full items-center justify-center overflow-hidden bg-slate-800 border-b border-slate-800/50";
                                                const span = document.createElement('span');
                                                span.className = "text-6xl font-extrabold tracking-tighter text-slate-700/50";
                                                span.innerText = project.title.substring(0, 2).toUpperCase();
                                                parent.appendChild(span);
                                            }
                                        }}
                                    />
                                </div>
                            ) : (
                                <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden border-b border-slate-800/50 bg-slate-800">
                                    <span className="relative z-10 text-6xl font-extrabold tracking-tighter text-slate-700/70">
                                        {project.title.substring(0, 2).toUpperCase()}
                                    </span>
                                </div>
                            )}

                            <div 
                                className="space-y-8 p-6 sm:p-8 relative"
                            >
                                {/* Title and Links */}
                                <div>
                                    <h3 className="text-3xl font-bold leading-tight text-slate-100">
                                        {project.title}
                                    </h3>
                                    <div className="mt-5 flex flex-wrap gap-3">
                                        {project.link !== '#' && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group inline-flex items-center gap-2 rounded-lg border border-teal-400/20 bg-teal-400/10 px-5 py-2 text-sm font-semibold text-teal-300 transition-colors hover:border-teal-400/40 hover:bg-teal-400/15"
                                            >
                                                View Live Site
                                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-5 py-2 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-700 hover:text-teal-300"
                                            >
                                                <Github className="h-4 w-4" />
                                                Source Code
                                            </a>
                                        )}
                                        {project.link === '#' && !project.github && (
                                            <span className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-800/40 px-5 py-2 text-sm font-medium text-slate-500">
                                                <Lock className="h-3.5 w-3.5" />
                                                Private project — no public link
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="prose prose-invert prose-slate max-w-none">
                                    <p className="text-base leading-relaxed text-slate-300">
                                        {project.longDescription || project.description}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                                        Technologies Used
                                    </h4>
                                    <ul className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, idx) => (
                                            <li
                                                key={idx}
                                                className="rounded bg-slate-800/50 px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-300 ring-1 ring-inset ring-slate-700/50"
                                            >
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
