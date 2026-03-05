import About from './sections/About';
import SkillsBento from './sections/SkillsBento';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Writing from './sections/Writing';
import Contact from './sections/Contact';
export default function RightPanel() {
    return (
        <>
            <About />
            <SkillsBento />
            <Experience />
            <Projects />
            <Writing />
            <Contact />
        </>
    );
}
