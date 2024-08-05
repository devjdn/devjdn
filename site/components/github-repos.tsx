interface Repository {
    id: number;
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    homepage: string;
    language: [];
}

const fetchRepository = async (): Promise<Repository[]> => {
    const githubApiKey = process.env.GITHUB_KEY;

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

    return response.json();
};

const GithubRepos = async () => {
    try {
        const repos = await fetchRepository();

        return (
                <>
                {repos.map((repo) => (
                    <section className="project-repository" key={repo.id}>
                        <div className="section-text">
                            <h2>{repo.name}</h2>
                        </div>
                        <div className="repo-info">
                            <h4>Repository information</h4>
                            <p>Full repository name: {repo.full_name}</p>
                            <p>{repo.description}</p>
                            <p>Most used language: {repo.language}</p>
                        </div>
                        <div className="links">
                            <h4>Repository links</h4>
                            <ul className="repo-link-list">
                                <li className="repo-link-list-item">
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                                </li>
                                <li className="repo-link-list-item">
                                    <a href={repo.homepage}target="_blank" rel="noopener noreferrer">View the live site</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                ))}
            </>
        );
    } catch (error) {
        return <section className="error"><h2>Error loading Github repositories.</h2></section>;
    }
};

export default GithubRepos;