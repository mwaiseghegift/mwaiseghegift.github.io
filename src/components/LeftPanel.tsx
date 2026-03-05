'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function LeftPanel() {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-20% 0px -60% 0px',
                threshold: 0.1
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

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
                        <a className={`group flex items-center py-3 ${activeSection === 'about' ? 'active' : ''}`} href="#about">
                            <span className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${activeSection === 'about' ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`}></span>
                            <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === 'about' ? 'text-slate-200' : 'text-slate-500'}`}>
                                About
                            </span>
                        </a>
                    </li>
                    <li>
                        <a className={`group flex items-center py-3 ${activeSection === 'skills' ? 'active' : ''}`} href="#skills">
                            <span className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${activeSection === 'skills' ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`}></span>
                            <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === 'skills' ? 'text-slate-200' : 'text-slate-500'}`}>
                                Skills
                            </span>
                        </a>
                    </li>
                    <li>
                        <a className={`group flex items-center py-3 ${activeSection === 'experience' ? 'active' : ''}`} href="#experience">
                            <span className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${activeSection === 'experience' ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`}></span>
                            <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === 'experience' ? 'text-slate-200' : 'text-slate-500'}`}>
                                Experience
                            </span>
                        </a>
                    </li>
                    <li>
                        <a className={`group flex items-center py-3 ${activeSection === 'projects' ? 'active' : ''}`} href="#projects">
                            <span className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${activeSection === 'projects' ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`}></span>
                            <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === 'projects' ? 'text-slate-200' : 'text-slate-500'}`}>
                                Projects
                            </span>
                        </a>
                    </li>
                    <li>
                        <a className={`group flex items-center py-3 ${activeSection === 'writing' ? 'active' : ''}`} href="#writing">
                            <span className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${activeSection === 'writing' ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`}></span>
                            <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === 'writing' ? 'text-slate-200' : 'text-slate-500'}`}>
                                Writing
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
