import GithubRepos from "@/components/github-repos";
import RepoSearch from "@/components/repo-search";


export default function Projects({searchParams}: {searchParams?: {
    query?: string;
    page?: string;
};
}) {
    const query = searchParams?.query || '';
    return(
        <>
        <section className="intro">
            <div className="section-text">
                <h1>Projects</h1>
                <p>This is where you can see my projects, an explanation of what they are, as well as the technologies used to build them.</p>
            </div>    
        </section>
        <RepoSearch placeholder="Search repositories"/>
        <GithubRepos query={query}/>
        </>
    );
}