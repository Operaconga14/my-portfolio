import Banner from '../components/Banner';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
export default function Home()
{
    return (
        <div>
            <Banner id='home' />
            <About id='about' />
            <Skills id='skills' />
            <Experience id='experience' />
            <Projects id='projects' />
            <Contact id='contact' />
        </div>
    )
}