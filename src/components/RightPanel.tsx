import About from './sections/About';
import Expertise from './sections/Expertise';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Writing from './sections/Writing';
import Recommendations from './sections/Recommendations';
import Contact from './sections/Contact';

export default function RightPanel() {
    return (
        <>
            <About />
            <Expertise />
            <Experience />
            <Education />
            <Projects />
            <Writing />
            <Recommendations />
            <Contact />
        </>
    );
}
