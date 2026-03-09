'use client';

import { useState, useMemo } from 'react';
import { ArrowLeft, ArrowUpRight, Search, X, ExternalLink, Layers } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolio } from '@/data/portfolio';
import ProjectDrawer, { Project } from '../../components/ui/ProjectDrawer';

// Enrich with year + madeAt
const archiveProjects: (Project & { year: string; madeAt: string })[] = portfolio.map(item => {
    let year = '2023';
    if (item.title.includes('2024')) year = '2024';
    if (item.title.includes('2022')) year = '2022';
    return {
        ...item,
        year,
        madeAt: item.title.includes('Taimba') || item.title.includes('Griffin') ? 'Griffin Global' : 'Freelance',
    };
});

// Collect all unique tags
const allTags = Array.from(new Set(archiveProjects.flatMap(p => p.tags))).sort();

export default function ArchivePage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [activeTag, setActiveTag] = useState<string | null>(null);

    const openDrawer = (project: Project, e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedProject(project);
        setIsDrawerOpen(true);
    };

    const filtered = useMemo(() => {
        return archiveProjects.filter(p => {
            const matchesSearch =
                !search ||
                p.title.toLowerCase().includes(search.toLowerCase()) ||
                p.description.toLowerCase().includes(search.toLowerCase()) ||
                p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
            const matchesTag = !activeTag || p.tags.includes(activeTag);
            return matchesSearch && matchesTag;
        });
    }, [search, activeTag]);

    return (
        <div className="relative min-h-screen bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(20,184,166,0.08),rgba(15,23,42,1))]">
            {/* Subtle noise overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
                style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}
            />

            {/* Ambient blobs */}
            <div className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />
            <div className="pointer-events-none absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />

            <div className="relative mx-auto max-w-6xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-16">

                {/* Back link */}
                <Link
                    className="group mb-8 inline-flex items-center gap-1.5 rounded-full border border-slate-700/60 bg-slate-800/40 px-4 py-2 text-sm font-semibold text-teal-300 backdrop-blur-sm transition-all hover:border-teal-500/40 hover:bg-slate-800/70"
                    href="/"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Portfolio
                </Link>

                {/* Hero header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 space-y-3"
                >
                    <div className="flex flex-wrap items-end gap-4">
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
                            Project{' '}
                            <span className="bg-gradient-to-r from-teal-300 to-indigo-400 bg-clip-text text-transparent">
                                Archive
                            </span>
                        </h1>
                        {/* Total count badge */}
                        <span className="mb-1 inline-flex items-center gap-1.5 rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1.5 text-sm font-semibold text-teal-300">
                            <Layers className="h-3.5 w-3.5" />
                            {archiveProjects.length} projects
                        </span>
                    </div>
                    <p className="max-w-xl text-base text-slate-400">
                        A full catalogue of my work — from shipped products to personal experiments.
                    </p>
                </motion.div>

                {/* Search + Filter bar */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="mb-8 space-y-4"
                >
                    {/* Search input */}
                    <div className="relative max-w-md">
                        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search projects or technologies…"
                            className="w-full rounded-xl border border-slate-700/60 bg-slate-800/40 py-2.5 pl-10 pr-10 text-sm text-slate-200 placeholder-slate-500 backdrop-blur-sm outline-none transition focus:border-teal-500/40 focus:ring-2 focus:ring-teal-500/10"
                        />
                        {search && (
                            <button
                                onClick={() => setSearch('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                                aria-label="Clear search"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>

                    {/* Tag filter pills */}
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setActiveTag(null)}
                            className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider transition-all ${activeTag === null
                                    ? 'border-teal-500/50 bg-teal-500/15 text-teal-300'
                                    : 'border-slate-700/60 bg-slate-800/40 text-slate-400 hover:border-slate-600 hover:text-slate-300'
                                }`}
                        >
                            All
                        </button>
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                                className={`rounded-full border px-3 py-1 text-[11px] font-medium transition-all ${activeTag === tag
                                        ? 'border-teal-500/50 bg-teal-500/15 text-teal-300'
                                        : 'border-slate-700/60 bg-slate-800/40 text-slate-400 hover:border-slate-600 hover:text-slate-300'
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* Results count */}
                    <p className="text-xs text-slate-500">
                        Showing <span className="text-slate-300 font-semibold">{filtered.length}</span> of {archiveProjects.length} projects
                        {(search || activeTag) && (
                            <button
                                onClick={() => { setSearch(''); setActiveTag(null); }}
                                className="ml-3 text-teal-400 hover:text-teal-300 transition-colors"
                            >
                                Clear filters ×
                            </button>
                        )}
                    </p>
                </motion.div>

                {/* Project Grid */}
                <AnimatePresence mode="popLayout">
                    {filtered.length === 0 ? (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center py-24 text-center space-y-3"
                        >
                            <div className="rounded-full border border-slate-700/50 bg-slate-800/40 p-4">
                                <Search className="h-6 w-6 text-slate-500" />
                            </div>
                            <p className="text-slate-400 font-medium">No projects match your filters.</p>
                            <button
                                onClick={() => { setSearch(''); setActiveTag(null); }}
                                className="text-sm text-teal-400 hover:text-teal-300 transition-colors"
                            >
                                Clear all filters
                            </button>
                        </motion.div>
                    ) : (
                        <motion.ul
                            key="grid"
                            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {filtered.map((project, index) => (
                                <motion.li
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.96, y: 16 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ delay: index * 0.04, duration: 0.35 }}
                                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:border-teal-500/25 hover:bg-slate-800/50 hover:shadow-xl hover:shadow-slate-900/50 cursor-pointer"
                                    onClick={(e) => openDrawer(project as Project, e)}
                                >
                                    {/* Thumbnail */}
                                    <div className="relative h-44 w-full overflow-hidden bg-slate-800">
                                        {project.image ? (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                                                <Layers className="h-10 w-10 text-slate-600" />
                                            </div>
                                        )}

                                        {/* Gradient overlay always */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                                        {/* Year badge top-left */}
                                        <span className="absolute top-3 left-3 rounded-full border border-slate-700/60 bg-slate-900/70 px-2.5 py-0.5 text-[10px] font-mono font-bold text-slate-400 backdrop-blur-sm">
                                            {project.year}
                                        </span>

                                        {/* madeAt badge top-right */}
                                        <span className="absolute top-3 right-3 rounded-full border border-slate-700/60 bg-slate-900/70 px-2.5 py-0.5 text-[10px] font-semibold text-slate-300 backdrop-blur-sm">
                                            {project.madeAt}
                                        </span>

                                        {/* External link button (hover) */}
                                        {project.link !== '#' && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={e => e.stopPropagation()}
                                                className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-slate-600/60 bg-slate-900/70 text-slate-400 opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100 hover:text-teal-400 hover:border-teal-500/40"
                                                aria-label={`Visit ${project.title}`}
                                            >
                                                <ExternalLink className="h-3.5 w-3.5" />
                                            </a>
                                        )}
                                    </div>

                                    {/* Card body */}
                                    <div className="flex flex-1 flex-col p-4 space-y-3">
                                        <h2 className="font-semibold text-slate-100 text-sm leading-snug group-hover:text-teal-300 transition-colors">
                                            {project.title}
                                            <ArrowUpRight className="ml-1 inline-block h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </h2>

                                        <p className="text-xs leading-relaxed text-slate-400 line-clamp-2 flex-grow">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {project.tags.map((tag, j) => (
                                                <span
                                                    key={j}
                                                    onClick={e => { e.stopPropagation(); setActiveTag(tag === activeTag ? null : tag); }}
                                                    className={`cursor-pointer rounded-full border px-2 py-0.5 text-[10px] font-medium transition-all ${activeTag === tag
                                                            ? 'border-teal-500/50 bg-teal-500/15 text-teal-300'
                                                            : 'border-teal-400/10 bg-teal-400/5 text-teal-300/70 hover:border-teal-400/30 hover:text-teal-300'
                                                        }`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>

            <ProjectDrawer
                project={selectedProject}
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            />
        </div>
    );
}
