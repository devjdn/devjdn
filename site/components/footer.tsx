import Link from "next/link";

export default function Footer() {

    const links = [
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Github', href: 'https://github.com/devjdn' },
        { name: 'X', href: 'https://twitter.com/jdnquery' },
        { name: 'Instagram', href: 'https://instagram.com/jaydenpriestley1' },
        { name: 'Apple Music', href: 'https://music.apple.com/profile/jaydenpriestley' },
    ]

    return(
        <footer className="global-footer">
            <a href="/">
                <div className="logo">
                    <span>jdn.dev</span>
                </div>
            </a>
            <ul className="footer-nav-list">
                {links.map((link) => (
                    <li key={link.name} className="footer-nav-list-item">
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
            <p>Jayden Priestley 2024&copy; All rights reserved.</p>
        </footer>
    );
}