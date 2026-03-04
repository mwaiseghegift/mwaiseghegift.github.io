import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'All Projects',
    description: 'A comprehensive archive of software development projects by Gift Mwaiseghe, including web apps, APIs, and client work.',
    openGraph: {
        title: 'All Projects | Gift Mwaiseghe',
        description: 'A comprehensive archive of software development projects by Gift Mwaiseghe.',
    },
};

const archiveProjects = [
    {
        year: '2023',
        project: 'VMS System (Veterinary Management System)',
        madeAt: 'Freelance',
        builtWith: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js'],
        link: { url: '#', label: 'github.com/vms' },
    },
    {
        year: '2023',
        project: 'Onix Market – E-Commerce Platform',
        madeAt: 'Freelance',
        builtWith: ['Angular', 'Django', 'Python'],
        link: { url: '#', label: 'onixmarket.com' },
    },
    {
        year: '2023',
        project: 'Taimba WhatsApp CRM',
        madeAt: 'Freelance',
        builtWith: ['WhatsApp API', 'Node.js', 'Express.js'],
        link: { url: '#', label: 'taimba.com' },
    },
    {
        year: '2023',
        project: 'Jake Tech Solution',
        madeAt: 'Freelance',
        builtWith: ['Angular', 'Django', 'DRF'],
        link: { url: '#', label: 'jaketech.com' },
    },
    {
        year: '2022',
        project: 'Paystack4Python',
        madeAt: 'Open Source',
        builtWith: ['Python', 'Paystack API'],
        link: { url: 'https://github.com/mwaiseghe/paystack4python', label: 'github.com/mwaiseghe/paystack4python' },
    },
    {
        year: '2022',
        project: 'Motorshop',
        madeAt: 'Freelance',
        builtWith: ['Next.js', 'C#', '.NET Core'],
        link: { url: '#', label: 'motorshop.app' },
    },
];

export default function ArchivePage() {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:py-24">
                <Link
                    className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
                    href="/"
                >
                    <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
                    Gift Mwaiseghe
                </Link>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    All Projects
                </h1>
                <table className="mt-12 w-full border-collapse text-left">
                    <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                        <tr>
                            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Made at</th>
                            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
                            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {archiveProjects.map((project, index) => (
                            <tr key={index} className="border-b border-slate-300/10 last:border-none">
                                <td className="py-4 pr-4 align-top text-sm">
                                    <div className="translate-y-px">{project.year}</div>
                                </td>
                                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                                    <div>
                                        <div className="block sm:hidden">
                                            <a
                                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                                href={project.link.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={project.project}
                                            >
                                                <span>
                                                    <span className="inline-block">
                                                        {project.project}
                                                        <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="hidden sm:block">{project.project}</div>
                                    </div>
                                </td>
                                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                                    <div className="translate-y-px whitespace-nowrap">{project.madeAt}</div>
                                </td>
                                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                                    <ul className="flex -translate-y-1.5 flex-wrap">
                                        {project.builtWith.map((tech, techIndex) => (
                                            <li key={techIndex} className="my-1 mr-1.5">
                                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                    {tech}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="hidden py-4 align-top sm:table-cell">
                                    <ul className="translate-y-1">
                                        <li className="mb-1 flex items-center">
                                            <a
                                                className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm"
                                                href={project.link.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={project.link.label}
                                            >
                                                <span>
                                                    <span className="inline-block">
                                                        {project.link.label}
                                                        <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5 translate-y-px" />
                                                    </span>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
