import Link from "next/link";

export default function Nav() {
    const links = [
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Hobbies', href: '/hobbies' },
        { name: 'X', href: 'https://twitter.com/jdnquery' },
        { name: 'Instagram', href: 'https://instagram.com/jaydenpriestley1' },
        { name: 'Apple Music', href: 'https://music.apple.com/profile/jaydenpriestley' },
    ]

    return(
        <nav className="global-nav">
            <ul className="global-nav-list">
                {links.map((link) => (
                    <li className="nav-list-item" key={link.name}>
                        <Link href={link.href}><h2>{link.name}</h2></Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}