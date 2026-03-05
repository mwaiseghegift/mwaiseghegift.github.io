'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Github } from 'lucide-react';
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
                        className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-md transition-opacity"
                        aria-hidden="true"
                    />

                    {/* Drawer Panel */}
                    <motion.div
                        ref={drawerRef}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-lg flex-col overflow-hidden border-l border-slate-700/50 bg-slate-900/90 shadow-2xl backdrop-blur-2xl sm:max-w-xl"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="drawer-title"
                    >
                        {/* Header & Close Button (Sticky) */}
                        <div className="z-10 flex items-center justify-between border-b border-slate-800/50 bg-slate-900/50 px-6 py-4 backdrop-blur-md sm:px-8">
                            <h2 id="drawer-title" className="text-lg font-bold tracking-tight text-slate-200">
                                Project Details
                            </h2>
                            <button
                                onClick={onClose}
                                className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300"
                                aria-label="Close panel"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto">
                            {/* Hero Image or Fallback Gradient */}
                            {project.image ? (
                                <div className="relative aspect-video w-full overflow-hidden bg-slate-800 border-b border-slate-800/50">
                                    <Image 
                                        src={project.image} 
                                        alt={`Screenshot of ${project.title}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 via-teal-900/20 to-slate-900 border-b border-slate-800/50">
                                    {/* Noise overlay */}
                                    <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}></div>
                                    <div className="absolute -inset-10 bg-gradient-to-r from-teal-500/10 via-transparent to-indigo-500/10 blur-3xl rounded-full"></div>
                                    <motion.span 
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="relative z-10 text-6xl font-extrabold tracking-tighter text-slate-700/50"
                                    >
                                        {project.title.substring(0, 2).toUpperCase()}
                                    </motion.span>
                                </div>
                            )}

                            {/* Staggered Content Container */}
                            <motion.div 
                                className="space-y-8 p-6 sm:p-8 relative"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: { staggerChildren: 0.1, delayChildren: 0.15 }
                                    }
                                }}
                            >
                                {/* Title and Links */}
                                <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                                    <h3 className="text-3xl font-bold leading-tight text-slate-100">
                                        {project.title}
                                    </h3>
                                    <div className="mt-5 flex flex-wrap gap-3">
                                        {project.link !== '#' && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group inline-flex items-center gap-2 rounded-full bg-teal-400/10 px-5 py-2 text-sm font-semibold text-teal-300 ring-1 ring-inset ring-teal-400/20 transition-all hover:bg-teal-400/20 hover:ring-teal-400/40"
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
                                                className="group inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-5 py-2 text-sm font-semibold text-slate-200 ring-1 ring-inset ring-slate-700 transition-all hover:bg-slate-700 hover:text-teal-300"
                                            >
                                                <Github className="h-4 w-4" />
                                                Source Code
                                            </a>
                                        )}
                                    </div>
                                </motion.div>

                                {/* Description */}
                                <motion.div 
                                    variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                                    className="prose prose-invert prose-slate max-w-none"
                                >
                                    <p className="text-base leading-relaxed text-slate-300">
                                        {project.longDescription || project.description}
                                    </p>
                                </motion.div>

                                {/* Tech Stack */}
                                <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
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
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
