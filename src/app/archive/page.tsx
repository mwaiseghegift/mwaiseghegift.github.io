'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { portfolio } from '@/data/portfolio';
import ProjectDrawer, { Project } from '../../components/ui/ProjectDrawer';

const archiveProjects: (Project & { year: string; madeAt: string })[] = portfolio.map(item => {
    // Infer year from title or just use 2023/2024 as default since portfolio.ts doesn't have years
    // A more robust way would be to update portfolio.ts to include years, 
    // but for now I'll map them to the format expected by this page.
    let year = '2023';
    if (item.title.includes('2024')) year = '2024';
    if (item.title.includes('2022')) year = '2022';

    return {
        ...item,
        year: year,
        madeAt: item.title.includes('Taimba') || item.title.includes('Griffin') ? 'Griffin Global' : 'Freelance',
    };
});

export default function ArchivePage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = (project: Project) => {
        setSelectedProject(project);
        setIsDrawerOpen(true);
    };

    return (
        <div className="relative min-h-screen bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(20,184,166,0.1),rgba(15,23,42,1))]">
            {/* Subtle background noise overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}></div>

            <div className="relative mx-auto max-w-7xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24">
                <Link
                    className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
                    href="/"
                >
                    <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
                    Back to Portfolio
                </Link>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
                    All Projects
                </h1>

                <div className="mt-16 md:mt-24 sm:mt-12">
                    {/* Header Row (Hidden on small screens) */}
                    <div className="hidden sm:grid sm:grid-cols-[100px_minmax(200px,1fr)_150px_minmax(200px,1fr)] gap-6 border-b border-slate-700/50 px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                        <div>Year</div>
                        <div>Project</div>
                        <div>Made at</div>
                        <div>Built with</div>
                    </div>

                    <ul className="group/list mt-4 flex flex-col gap-2">
                        {archiveProjects.map((project, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, type: 'spring', damping: 20 }}
                                whileHover={{ scale: 1.01, x: 4 }}
                                className="group relative"
                            >
                                <button
                                    onClick={() => openDrawer(project)}
                                    className="block w-full text-left transition-all rounded-xl hover:bg-slate-800/40 hover:shadow-lg sm:grid sm:grid-cols-[100px_minmax(200px,1fr)_150px_minmax(200px,1fr)] gap-6 px-6 py-6 sm:py-8 cursor-pointer focus:bg-slate-800/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50 border border-transparent hover:border-slate-700/50"
                                >
                                    {/* Year */}
                                    <div className="text-base font-mono font-medium text-slate-500/70 mb-2 sm:mb-0">
                                        {project.year}
                                    </div>
                                    
                                    {/* Title */}
                                    <div className="text-lg font-bold text-slate-200 group-hover:text-teal-300 transition-colors mb-3 sm:mb-0">
                                        {project.title}
                                    </div>

                                    {/* Made At */}
                                    <div className="text-sm font-medium text-slate-400 mb-4 sm:mb-0">
                                        <span className="inline-flex items-center rounded-md bg-slate-800/50 px-2 py-1 text-xs font-medium text-slate-300 ring-1 ring-inset ring-slate-700/50">
                                            {project.madeAt}
                                        </span>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex} 
                                                className="inline-flex items-center rounded-full bg-teal-400/5 px-3 py-1 text-xs font-medium text-teal-300/80 group-hover:bg-teal-400/10 group-hover:text-teal-300 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </button>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <ProjectDrawer
                project={selectedProject}
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            />
        </div>
    );
}
