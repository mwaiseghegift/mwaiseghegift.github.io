export default function About() {
    return (
        <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    About
                </h2>
            </div>
            <div>
                <p className="mb-4">
                    I&apos;m a Software Developer passionate about crafting fast, accessible, and beautiful digital experiences. My journey involves working with a diverse set of technologies, ranging from front-end frameworks like <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">Angular</span> and <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">React</span>, to robust back-end systems built with <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">.NET Core</span>, <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">Django</span>, and <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">Node.js</span>.
                </p>
                <p className="mb-4">
                    Currently, I am a Software Engineer at <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">GRIFFIN Global Technologies</span>, where I develop and maintain scalable client-server applications on the Azure Cloud Platform. I focus on ensuring software quality, optimizing performance, and integrating RESTful and GraphQL APIs seamlessly.
                </p>
                <p>
                    Whether I&apos;m automating CI/CD pipelines, optimizing technical SEO, or designing mobile-first user interfaces, my goal is always to deliver clean, efficient, and user-centric solutions that exceed client expectations.
                </p>
            </div>
        </section>
    );
}
