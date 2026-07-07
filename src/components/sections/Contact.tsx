'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, Github, Linkedin, Phone, Twitter } from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

// Icon Map for dynamic rendering
const IconMap: Record<string, React.ElementType> = {
    Mail,
    Github,
    Linkedin,
    Phone,
    Twitter
};

export default function Contact() {
    return (
        <section
            id="contact"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Contact Section"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/95 px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Contact
                </h2>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-8 text-center sm:p-12"
            >
                <div className="flex flex-col items-center">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-teal-400/20 bg-teal-400/10">
                        <Mail className="h-6 w-6 text-teal-300" />
                    </div>

                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
                        Let&apos;s Build Something Together
                    </h2>

                    <p className="mx-auto mb-8 max-w-md text-lg text-slate-400">
                        {contactInfo.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <a
                            href={`mailto:${contactInfo.email}`}
                            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-slate-100 px-8 py-4 font-bold text-slate-900 transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                        >
                            Say Hello
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-slate-700/50 pt-8 w-full max-w-sm">
                        {contactInfo.social.map((social, idx) => {
                            const IconComp = IconMap[social.icon] || Mail;
                            return (
                                <a
                                    key={idx}
                                    href={social.link}
                                    target={social.type !== 'email' && social.type !== 'whatsapp' ? "_blank" : undefined}
                                    rel={social.type !== 'email' && social.type !== 'whatsapp' ? "noreferrer" : undefined}
                                    className="text-slate-500 hover:text-teal-400 transition-colors"
                                    aria-label={social.label}
                                >
                                    <IconComp className="h-6 w-6" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
