'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function LeftPanel() {
    return (
        <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Gift Mwaiseghe</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Software Developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
                I&apos;m a Software Developer passionate about crafting fast, accessible, and beautiful digital experiences.
            </p>

            <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                    <li>
                        <a className="group flex items-center py-3 active" href="#about">
                            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                About
                            </span>
                        </a>
                    </li>
                    <li>
                        <a className="group flex items-center py-3" href="#experience">
                            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                Experience
                            </span>
                        </a>
                    </li>
                    <li>
                        <a className="group flex items-center py-3" href="#projects">
                            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                Projects
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>

            <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
                <li className="text-xs shrink-0">
                    <a
                        className="block hover:text-slate-200"
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        title="GitHub"
                    >
                        <Github className="h-6 w-6" />
                    </a>
                </li>
                <li className="text-xs shrink-0">
                    <a
                        className="block hover:text-slate-200"
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                    >
                        <Linkedin className="h-6 w-6" />
                    </a>
                </li>
                <li className="text-xs shrink-0">
                    <a
                        className="block hover:text-slate-200"
                        href="mailto:mwaiseghe.dev@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Mail"
                        title="Mail"
                    >
                        <Mail className="h-6 w-6" />
                    </a>
                </li>
            </ul>
        </div>
    );
}
