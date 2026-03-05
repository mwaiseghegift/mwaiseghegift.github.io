'use client';

import { ArrowLeft, BookOpen, Clock } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const allWritings = [
    {
        title: 'Building Scalable Web Apps with Angular and .NET Core',
        publication: 'Medium / Dev.to',
        date: 'Oct 2023',
        readTime: '6 min read',
        link: '#',
        description: 'An in-depth guide on architecting enterprise-grade applications using modern frontend frameworks and robust backend technologies.'
    },
    {
        title: 'State Management in React: Context API vs. Redux',
        publication: 'Personal Blog',
        date: 'Aug 2023',
        readTime: '8 min read',
        link: '#',
        description: 'Comparing different state management approaches in React applications and deciding when to use Context API over Redux.'
    },
    {
        title: 'Integrating Payment Gateways with Python',
        publication: 'Open Source Guide',
        date: 'Dec 2022',
        readTime: '5 min read',
        link: 'https://github.com/mwaiseghe/paystack4python',
        description: 'A comprehensive tutorial on integrating the Paystack API using Python, including handling webhooks and security best practices.'
    },
    {
        title: 'Mastering the Angular Router',
        publication: 'Tech Blog',
        date: 'Oct 2022',
        readTime: '10 min read',
        link: '#',
        description: 'Advanced routing techniques in Angular including lazy loading, guards, resolvers, and secondary routes.'
    },
    {
        title: 'Django REST Framework: Best Practices for API Design',
        publication: 'Medium',
        date: 'Jun 2022',
        readTime: '7 min read',
        link: '#',
        description: 'A look into how to build scalable, maintainable, and secure RESTful APIs using Django REST Framework.'
    }
];

export default function WritingPage() {
    return (
        <div className="relative min-h-screen bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.15),rgba(15,23,42,1))]">
            {/* Subtle background noise overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}></div>

            <div className="relative mx-auto max-w-7xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24">
                <Link
                    href="/"
                    className="group mb-2 inline-flex items-center font-semibold leading-tight text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                    <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
                    Back to Portfolio
                </Link>
                
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl mb-6">
                    All Writing
                </h1>
                
                <p className="max-w-2xl text-lg text-slate-400 mb-16">
                    A collection of my technical articles, tutorials, and thoughts on software engineering, architecture, and technology.
                </p>

                <div className="mt-8">
                    <ul className="group/list mt-4 flex flex-col gap-6">
                        {allWritings.map((article, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, type: 'spring', damping: 20 }}
                                whileHover={{ scale: 1.01, x: 4 }}
                                className="group relative"
                            >
                                <a
                                    href={article.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block w-full text-left transition-all rounded-3xl bg-slate-800/20 hover:bg-slate-800/40 hover:shadow-lg gap-6 px-6 py-8 sm:px-10 sm:py-10 cursor-pointer focus:bg-slate-800/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 border border-slate-700/50 hover:border-indigo-500/30 overflow-hidden relative"
                                >
                                    {/* Hover glow effect */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    
                                    <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div className="md:w-3/4">
                                            <div className="flex items-center gap-3 text-sm font-medium text-slate-400 mb-4">
                                                <span className="text-indigo-300/90">{article.date}</span>
                                                <span className="h-1 w-1 rounded-full bg-slate-600"></span>
                                                <span>{article.publication}</span>
                                            </div>
                                            
                                            <h2 className="text-2xl font-bold tracking-tight text-slate-200 group-hover:text-indigo-300 transition-colors mb-4">
                                                {article.title}
                                            </h2>
                                            
                                            <p className="text-slate-400 leading-relaxed text-base">
                                                {article.description}
                                            </p>
                                        </div>
                                        
                                        <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-700/50 shrink-0 w-fit">
                                            <Clock className="h-4 w-4 text-indigo-400/80" />
                                            {article.readTime}
                                        </div>
                                    </div>
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
