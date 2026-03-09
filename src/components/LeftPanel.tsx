'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter, Phone } from 'lucide-react';
import { profile, contactInfo } from '@/data/portfolio';

// Icon Map for dynamic rendering
const IconMap: Record<string, React.ElementType> = {
    Mail,
    Github,
    Linkedin,
    Phone,
    Twitter
};

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

    const navLinks = [
        { id: 'about', label: 'About' },
        { id: 'expertise', label: 'Expertise' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
        { id: 'projects', label: 'Projects' },
        { id: 'writing', label: 'Writing' },
        { id: 'recommendations', label: 'Recommendations' },
    ];

    return (
        <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <Link href="/">{profile.name}</Link>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                {profile.title}
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-slate-400">
                {profile.summary.substring(0, 115)}...
            </p>

            <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                    {navLinks.map(link => (
                        <li key={link.id}>
                            <a className={`group flex items-center py-3 ${activeSection === link.id ? 'active' : ''}`} href={`#${link.id}`}>
                                <span className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${activeSection === link.id ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`}></span>
                                <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === link.id ? 'text-slate-200' : 'text-slate-500'}`}>
                                    {link.label}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
                {contactInfo.social.map((social, idx) => {
                    const IconComp = IconMap[social.icon] || Mail;
                    return (
                        <li key={idx} className="text-xs shrink-0">
                            <a
                                className="block hover:text-teal-400 transition-colors text-slate-400"
                                href={social.link}
                                target={social.type !== 'email' && social.type !== 'whatsapp' ? "_blank" : undefined}
                                rel={social.type !== 'email' && social.type !== 'whatsapp' ? "noreferrer" : undefined}
                                aria-label={social.label}
                                title={social.label}
                            >
                                <IconComp className="h-6 w-6" />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

