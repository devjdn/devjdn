import Link from "next/link";

export default function Contact() {

    const socials = [
        { name: 'X', href: 'https://x.com/jdnquery', explanation: "On my X profile, I mainly post about the coding projects I'm taking on. Drop a follow to keep up with my progress!" },
        { name: 'Instagram', href: 'https://instagram.com/jaydenpriestley1', explanation: "On Instagram, I don't really post many actual posts. However, I do consistently post on my story. Mostly pictures of my daily activities, or memes I found funny!" },
        { name: 'Github', href: 'https://github.com/devjdn', explanation: "Github isn't really a social media platform, but you can view my coding activity there, so check it out!" },
    ]

    return(
        <>
        <section className="intro">
            <div className="section-text">
                <h1>Get in touch!</h1>
                <p>On this page, I have all my active social medias listed, as well as a form for you to directly email me.</p>
            </div>
        </section>
        <section className="socials">
            <div className="section-text">
                <h2>Socials</h2>
            </div>
            <div className="social-accounts">
                <ul className="account-list">
                    {socials.map((social, socialIndex) => (
                        <li key={socialIndex} className="social-list-item">
                            <Link href={social.href}>
                                <h3>{social.name}</h3>
                            </Link>
                            <p>{social.explanation}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        <section className="email">
            <div className="section-text">
                <h2>Drop me an email!</h2>
                <p>Below, you will find a form you can use to directly send me an email. Please feel free to ask any questions, I&apos;m also open to discussing any opportunities you may present to me!</p>
            </div>
        </section>
        </>
    );
}