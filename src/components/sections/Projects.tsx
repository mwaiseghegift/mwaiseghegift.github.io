import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: 'VMS System (Veterinary Management System)',
        link: '#',
        description: 'A comprehensive web application for veterinary clinics and agricultural operations. Features real-time dashboards, management modules, secure authentication, responsive UI, and data visualization.',
        tags: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'PrimeNG'],
    },
    {
        title: 'Onix Market – E-Commerce Platform',
        link: '#',
        description: 'A full-stack E-commerce platform for businesses to set up online stores. Includes product management, customer tracking, order processing, and payment gateways.',
        tags: ['Angular', 'Django', 'Python'],
    },
    {
        title: 'Taimba WhatsApp CRM',
        link: '#',
        description: 'Order Management System integrated with WhatsApp/Meta API. Enables real-time customer communication, order tracking, and seamless automated notifications.',
        tags: ['WhatsApp API', 'Node.js', 'Express.js'],
    },
    {
        title: 'Jake Tech Solution',
        link: '#',
        description: 'Agricultural management system for farmers and cooperatives. Provides tools for farm operations, inventory management, and data-driven decision-making.',
        tags: ['Angular', 'Django', 'DRF'],
    },
    {
        title: 'Paystack4Python',
        link: 'https://github.com/mwaiseghe/paystack4python',
        description: 'Python client library for Paystack API. Simplifies integration for payments, customer management, transactions, and subscriptions with robust error handling.',
        tags: ['Python', 'Paystack API'],
    },
    {
        title: 'Motorshop',
        link: '#',
        description: 'Car listing platform for browsing, filtering, and managing vehicle listings. Offers detailed specs and price comparisons.',
        tags: ['Next.js', 'C#', '.NET Core'],
    }
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Selected projects"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Projects
                </h2>
            </div>
            <div>
                <ul className="group/list">
                    {projects.map((project, i) => (
                        <li key={i} className="mb-12">
                            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <div className="z-10 sm:col-span-8">
                                    <h3 className="font-medium leading-snug text-slate-200">
                                        <span>
                                            <a
                                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={project.title}
                                            >
                                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                <span>
                                                    {project.title}
                                                    {project.link !== '#' && (
                                                        <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                                                    )}
                                                </span>
                                            </a>
                                        </span>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal">
                                        {project.description}
                                    </p>
                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                        {project.tags.map((tag, j) => (
                                            <li key={j} className="mr-1.5 mt-2">
                                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                    {tag}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-12">
                    <a
                        className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href="/archive"
                        aria-label="View Full Project Archive"
                    >
                        <span>
                            <span className="border-b border-transparent pb-px transition group-hover/link:border-teal-300 motion-reduce:transition-none">
                                View Full Project
                            </span>
                            <span className="whitespace-nowrap">
                                <span className="border-b border-transparent pb-px transition group-hover/link:border-teal-300 motion-reduce:transition-none">
                                    {' '}
                                    Archive
                                </span>
                                <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px" />
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
