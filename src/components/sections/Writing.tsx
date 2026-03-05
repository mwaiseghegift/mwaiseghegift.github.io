'use client';

import { motion } from 'framer-motion';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const articles = [
    {
        title: 'Building Scalable Web Apps with Angular and .NET Core',
        publication: 'Medium / Dev.to',
        date: 'Oct 2023',
        readTime: '6 min read',
        link: '#'
    },
    {
        title: 'State Management in React: Context API vs. Redux',
        publication: 'Personal Blog',
        date: 'Aug 2023',
        readTime: '8 min read',
        link: '#'
    },
    {
        title: 'Integrating Payment Gateways with Python',
        publication: 'Open Source Guide',
        date: 'Dec 2022',
        readTime: '5 min read',
        link: 'https://github.com/mwaiseghe/paystack4python'
    }
];

export default function Writing() {
    return (
        <section
            id="writing"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Selected Articles"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Writing
                </h2>
            </div>

            <ul className="group/list flex flex-col gap-4">
                {articles.map((article, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1, type: 'spring', damping: 20 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        className="group relative"
                    >
                        <a
                            href={article.link}
                            target="_blank"
                            rel="noreferrer"
                            className="block w-full text-left transition-all rounded-xl bg-slate-800/20 hover:bg-slate-800/60 sm:grid sm:grid-cols-[100px_1fr] gap-4 px-6 py-5 cursor-pointer focus:bg-slate-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50 border border-slate-700/30 hover:border-teal-500/30 shadow-sm"
                        >
                            <div className="text-sm font-medium text-slate-500 mb-2 sm:mb-0 translate-y-px">
                                {article.date}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-200 group-hover:text-teal-300 transition-colors mb-2">
                                    {article.title}
                                </h3>
                                <div className="flex items-center gap-3 text-sm font-medium text-slate-400">
                                    <span>{article.publication}</span>
                                    <span className="h-1 w-1 rounded-full bg-slate-600"></span>
                                    <span className="flex items-center gap-1.5 text-teal-400/80">
                                        <BookOpen className="h-3.5 w-3.5" />
                                        {article.readTime}
                                    </span>
                                </div>
                            </div>
                        </a>
                    </motion.li>
                ))}
            </ul>
            <div className="mt-12">
                <Link
                    href="/writing"
                    className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    aria-label="View Full Writing Archive"
                >
                    <span>
                        <span className="border-b border-transparent pb-px transition group-hover/link:border-teal-300 motion-reduce:transition-none">
                            View Full Writing
                        </span>
                        <span className="whitespace-nowrap">
                            <span className="border-b border-transparent pb-px transition group-hover/link:border-teal-300 motion-reduce:transition-none">
                                {' '}
                                Archive
                            </span>
                            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px" />
                        </span>
                    </span>
                </Link>
            </div>
        </section>
    );
}
