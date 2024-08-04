export default function SkillsList() {

    const skillsLists = [
        {
            webEnd: 'Frontend',
            skills: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'SASS/SCSS',
                'TypeScript',
                'Tailwind',
                'React',
                'Next.JS',
                'Tailwind CSS',
                'Git'
            ]
        },
        {
            webEnd: 'Backend',
            skills: [
                "I'm terrible at backend, but I will learn it :)",
            ]
        }
    ];

    return(
        <>
        {skillsLists.map((skillsList) => (
            <div key={skillsList.webEnd} className="skills-group">
                <h3>{skillsList.webEnd}</h3>
                <ul className="skills-list">
                    {skillsList.skills.map((skillIndex) => (
                        <li className="skills-list-item" key={skillIndex}>
                            <p>{skillIndex}</p>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
        </>
    );
}