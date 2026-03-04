import { ArrowUpRight } from 'lucide-react';

const experiences = [
    {
        date: 'Oct 2023 — Present',
        title: 'Software Engineer',
        company: 'GRIFFIN Global Technologies',
        link: '#',
        description: 'Develop and maintain robust client-server applications using .NET Core, Angular, GraphQL, and Azure Functions on the Azure Cloud Platform for diverse global clients. Conduct comprehensive code reviews and implement coding best practices to consistently deliver high-quality solutions.',
        tags: ['.NET Core', 'Angular', 'GraphQL', 'Azure Functions', 'C#'],
    },
    {
        date: 'July 2023',
        title: 'Software QA/QE',
        company: 'THE JITU',
        link: '#',
        description: 'Developed and executed comprehensive test plans and test cases, resulting in a significant reduction in production bugs. Participated in code reviews to uphold regulatory standards and enhance software quality.',
        tags: ['Node.js', 'Jest', 'Cypress', 'vtest', 'k6'],
    },
    {
        date: 'July 2022 — Oct 2022',
        title: 'Full Stack Developer',
        company: 'EUJIM SOLUTIONS',
        link: '#',
        description: 'Collaborated in the design and deployment of systems using React and Django, focusing on REST API development, optimization, and the integration of a USSD application. Improved code quality through rigorous code reviews.',
        tags: ['React', 'Django', 'REST API', 'Python'],
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Experience
                </h2>
            </div>
            <div>
                <ol className="group/list">
                    {experiences.map((exp, i) => (
                        <li key={i} className="mb-12">
                            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <header
                                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                                    aria-label={exp.date}
                                >
                                    {exp.date}
                                </header>
                                <div className="z-10 sm:col-span-6">
                                    <h3 className="font-medium leading-snug text-slate-200">
                                        <span>
                                            <a
                                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                                href={exp.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={`${exp.title} at ${exp.company}`}
                                            >
                                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                <span>
                                                    {exp.title} ·{' '}
                                                    <span className="inline-block">
                                                        {exp.company}
                                                        <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                                                    </span>
                                                </span>
                                            </a>
                                        </span>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal">
                                        {exp.description}
                                    </p>
                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {exp.tags.map((tag, j) => (
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
                </ol>
                <div className="mt-12">
                    <a
                        className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href="/Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>
                            <span className="border-b border-transparent pb-px transition group-hover/link:border-teal-300 motion-reduce:transition-none">
                                View Full
                            </span>
                            <span className="whitespace-nowrap">
                                <span className="border-b border-transparent pb-px transition group-hover/link:border-teal-300 motion-reduce:transition-none">
                                    {' '}
                                    Resume
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
