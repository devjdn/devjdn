import GithubRepos from "@/components/github-repos";


export default function Projects() {
    return(
        <>
        <section className="intro">
            <div className="section-text">
                <h1>Projects</h1>
                <p>This is where you can see my projects, explained in detail, as well as the technologies used to build them.</p>
            </div>    
        </section>
        <GithubRepos/>
        </>
    );
}