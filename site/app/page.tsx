import Image from "next/image";
import SPACEViewer from "@/public/spaceviewer-preview.png"
import SkillsList from "@/components/skills-list";


export default function Home() {
  return (
    <main>
      <section className="intro">
        <div className="section text">
          <h1>Hey! I&apos;m Jayden.</h1>
          <p>I&apos;m an 18 year old web developer from the UK. I specialize in frontend development, with a heavy focus on Next.JS and SCSS applications.</p>
        </div>
      </section>
      <section className="about">
        <div className="section-text">
          <h2>A little about me</h2>
          <p>As mentioned above, I&apos;m an 18 year old web developer based in the UK. I study IT at the moment, and currently doing my university course, with hopes of getting a degree from it. The course being a broad IT course means that my learning doesn&apos;t just cover web development, however that is my main interest, and the thing I want to pursue a career in.</p>
          <p>Outide of sitting on VS Code, or scrolling endless documentation, I have a number of keen interests. Most notably of them is probably gaming! But I also love things like listening to music, meeting friends, and going on walks to refresh my mind.</p>
        </div>
        <a href="/about" className="page-link">
        Read about my interests in a little more detail by clicking here
        </a>
      </section>
      <section className="skills">
        <div className="section-text">
          <h2>My skills</h2>
          <p>In my relatively short time learning web development, I have taught myself how to use a series of web technologies through the use of tutorials, forums, documentation, and also the use of ChatGPT, which gives a lot more straight forward answers than Google!</p>
        </div>
        <SkillsList/>
      </section>
      <section className="projects">
        <div className="section-text">
          <h2>Quick look at my projects</h2>
          <p>Here is a sneak peak at some of the projects I&apos;ve worked on over my time learning and developing. They use a variety of different web technologies from regular HTML, to Next.JS.</p>
        </div>
        <div className="project-snippets">
          <div className="project-img-container">
            <Image fill={true} src={SPACEViewer} alt="A preview image of my SPACEViewer website, which you can visit at spaceviewer.vercel.app."/>
          </div>
        </div>
        <a href="/projects" className="page-link">
        View my projects and all relative information about them by clicking here
        </a>
      </section>
    </main>
  );
}
