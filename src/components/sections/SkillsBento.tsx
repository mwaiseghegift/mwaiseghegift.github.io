'use client';

import { motion } from 'framer-motion';
import { Database, LayoutTemplate, Server, Cloud, Code2, Smartphone, Blocks, Terminal } from 'lucide-react';

export default function SkillsBento() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section
            id="skills"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Skills & Technologies"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Skills
                </h2>
            </div>
            
            <motion.div 
                className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-4 md:grid-cols-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {/* Large Block - Frontend */}
                <motion.div 
                    variants={itemVariants}
                    className="col-span-2 row-span-2 group relative overflow-hidden rounded-2xl bg-slate-800/40 border border-slate-700/50 p-6 transition-colors hover:bg-slate-800/80 hover:border-teal-400/30"
                >
                    <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-teal-500/10 to-transparent blur-xl"></div>
                    <div className="relative z-10 flex h-full flex-col justify-between">
                        <LayoutTemplate className="h-8 w-8 text-teal-400 mb-6" />
                        <div>
                            <h3 className="text-xl font-bold text-slate-200">Frontend</h3>
                            <p className="mt-2 text-sm text-slate-400">Angular, React, Next.js, WebGL, Tailwind CSS, TypeScript</p>
                        </div>
                    </div>
                </motion.div>

                {/* Medium Block - Backend */}
                <motion.div 
                    variants={itemVariants}
                    className="col-span-2 group relative overflow-hidden rounded-2xl bg-slate-800/40 border border-slate-700/50 p-6 transition-colors hover:bg-slate-800/80 hover:border-teal-400/30"
                >
                    <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-indigo-500/10 to-transparent blur-xl"></div>
                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="flex items-center justify-between mb-4">
                            <Server className="h-6 w-6 text-indigo-400" />
                            <Code2 className="h-5 w-5 text-slate-500" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-200">Backend Systems</h3>
                            <p className="mt-1 text-sm text-slate-400">Node.js, .NET Core, Django, GraphQL, REST APIs</p>
                        </div>
                    </div>
                </motion.div>

                {/* Small Block - Database */}
                <motion.div 
                    variants={itemVariants}
                    className="col-span-1 group relative overflow-hidden rounded-2xl bg-slate-800/40 border border-slate-700/50 p-5 transition-colors hover:bg-slate-800/80 hover:border-teal-400/30"
                >
                    <div className="relative z-10">
                        <Database className="h-6 w-6 text-emerald-400 mb-3" />
                        <h3 className="text-sm font-bold text-slate-200">Database</h3>
                        <p className="mt-1 text-xs text-slate-400">MongoDB, PostgreSQL, SQL Server</p>
                    </div>
                </motion.div>

                {/* Small Block - Cloud/DevOps */}
                <motion.div 
                    variants={itemVariants}
                    className="col-span-1 group relative overflow-hidden rounded-2xl bg-slate-800/40 border border-slate-700/50 p-5 transition-colors hover:bg-slate-800/80 hover:border-teal-400/30"
                >
                    <div className="relative z-10">
                        <Cloud className="h-6 w-6 text-sky-400 mb-3" />
                        <h3 className="text-sm font-bold text-slate-200">Cloud & Ops</h3>
                        <p className="mt-1 text-xs text-slate-400">Azure, AWS, Docker, CI/CD</p>
                    </div>
                </motion.div>

                {/* Wide Strip - Extra Skills */}
                <motion.div 
                    variants={itemVariants}
                    className="col-span-2 sm:col-span-4 group relative flex items-center justify-between overflow-hidden rounded-2xl bg-slate-800/40 border border-slate-700/50 p-5 px-6 transition-colors hover:bg-slate-800/80 hover:border-teal-400/30"
                >
                    <div className="flex items-center gap-4">
                        <Terminal className="h-6 w-6 text-slate-300" />
                        <span className="font-semibold text-slate-200 text-sm sm:text-base">Specialized Skills</span>
                    </div>
                    <div className="flex items-center gap-3 md:gap-6 text-xs sm:text-sm font-medium text-slate-400">
                        <span className="hidden sm:flex items-center gap-2"><Smartphone className="h-4 w-4" /> Mobile-First UI</span>
                        <span className="flex items-center gap-2"><Blocks className="h-4 w-4" /> Component Arch</span>
                        <span className="flex items-center gap-2"><Code2 className="h-4 w-4" /> Clean Code</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
