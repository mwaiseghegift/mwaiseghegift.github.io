'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProjectDrawer, { Project } from '../../components/ui/ProjectDrawer';

const archiveProjects: (Project & { year: string; madeAt: string })[] = [
    {
        year: '2023',
        title: 'VMS System (Veterinary Management System)',
        madeAt: 'Freelance',
        tags: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js'],
        link: '#',
        description: 'A comprehensive web application for veterinary clinics and agricultural operations. Features real-time dashboards, management modules, secure authentication, responsive UI, and data visualization.',
    },
    {
        year: '2023',
        title: 'Onix Market – E-Commerce Platform',
        madeAt: 'Freelance',
        tags: ['Angular', 'Django', 'Python'],
        link: 'https://onixmarket.com',
        description: 'A full-stack E-commerce platform for businesses to set up online stores. Includes product management, customer tracking, order processing, and payment gateways.',
    },
    {
        year: '2023',
        title: 'Taimba WhatsApp CRM',
        madeAt: 'Freelance',
        tags: ['WhatsApp API', 'Node.js', 'Express.js'],
        link: 'https://taimba.com',
        description: 'Order Management System integrated with WhatsApp/Meta API. Enables real-time customer communication, order tracking, and seamless automated notifications.',
    },
    {
        year: '2023',
        title: 'Jake Tech Solution',
        madeAt: 'Freelance',
        tags: ['Angular', 'Django', 'DRF'],
        link: 'https://jaketech.com',
        description: 'Agricultural management system for farmers and cooperatives. Provides tools for farm operations, inventory management, and data-driven decision-making.',
    },
    {
        year: '2022',
        title: 'Paystack4Python',
        madeAt: 'Open Source',
        tags: ['Python', 'Paystack API'],
        link: 'https://github.com/mwaiseghe/paystack4python',
        github: 'https://github.com/mwaiseghe/paystack4python',
        description: 'Python client library for Paystack API. Simplifies integration for payments, customer management, transactions, and subscriptions with robust error handling.',
    },
    {
        year: '2022',
        title: 'Motorshop',
        madeAt: 'Freelance',
        tags: ['Next.js', 'C#', '.NET Core'],
        link: 'https://motorshop.app',
        description: 'Car listing platform for browsing, filtering, and managing vehicle listings. Offers detailed specs and price comparisons.',
    },
];

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
