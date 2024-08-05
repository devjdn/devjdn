interface Repository {
    id: number;
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    homepage: string;
    language: [];
    languages_url: string;
    languages: Record<string, number>;
}

const githubApiKey = process.env.GITHUB_KEY;

if (!githubApiKey) {
    throw new Error('GitHub API Key is missing');
}

const fetchRepoLanguages = async (languagesUrl: string): Promise<Record<string, number>> => {
    const response = await fetch(languagesUrl, {
        headers: {
            Authorization: `token ${githubApiKey}`
        },
        next: { revalidate: 60 },
    });

    if (!response.ok) {
        const error = await response.text();
        console.error('API Error:', error);
        throw new Error('Failed to fetch repositories');
    }

    return response.json();
}

const fetchRepository = async (): Promise<Repository[]> => {

    if (!githubApiKey) {
        throw new Error('GitHub API Key is missing');
    }

    const response = await fetch('https://api.github.com/users/devjdn/repos', {
        headers: {
            Authorization: `token ${githubApiKey}`,
        },
        next: { revalidate: 60 }, // Optional: cache for 60 seconds (revalidate if needed)
    });

    if (!response.ok) {
        const error = await response.text();
        console.error('API Error:', error);
        throw new Error('Failed to fetch repositories');
    }

    const repos: Repository[] = await response.json();

    const reposWithLanguages = await Promise.all(
        repos.map(async (repo) => {
            const languages = await fetchRepoLanguages(repo.languages_url);
            return { ...repo, languages };
        })
    );

    return reposWithLanguages;
};

const GithubRepos = async ({ query }: { query: string }) => {
    try {
        const repos = await fetchRepository();

        // Filter repositories based on the query
        const filteredRepos = repos.filter(repo => 
            repo.name.toLowerCase().includes(query.toLowerCase())
        );

        return (
            <>
                {filteredRepos.length > 0 ? (
                    filteredRepos.map((repo) => (
                        <section className={`project-repository ${repo.name}`} key={repo.id}>
                            <div className="section-text">
                                <h2>{repo.name}</h2>
                            </div>
                            <div className="repo-directory">
                                <h4>Repository directory</h4>
                                <p>{repo.full_name}</p>
                            </div>
                            <div className="repo-info">
                                <h4>Description</h4>
                                <p>{repo.description}</p>
                            </div>
                            <div className="repo-languages">
                                <h4>Languages used</h4>
                                <ul className="language-list">
                                    {repo.languages && Object.entries(repo.languages).map(([language, bytes]) => (
                                        <li className="language-list-item" key={language}>
                                            <p>{language} ({bytes} bytes)</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="links">
                                <h4>Repository links</h4>
                                <ul className="repo-link-list">
                                    <li className="repo-link-list-item">
                                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                                    </li>
                                    <li className="repo-link-list-item">
                                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer">View the live site</a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    ))
                ) : (
                    <section className="no-results">
                        <h2>No repositories found.</h2>
                    </section>
                )}
            </>
        );
    } catch (error) {
        return <section className="error"><h2>Error loading GitHub repositories.</h2></section>;
    }
};


export default GithubRepos;