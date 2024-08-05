import Image from "next/image";

export default function About() {
    return(
        <>
        <section className="intro">
            <div className="section text">
                <h1>About me</h1>
                <p>On this page you&apos;ll learn a bit more about me in comparison to what you saw on the home page.</p>
            </div>
        </section>
        <section className="gaming">
            <div className="section-text">
                <h2>Gaming</h2>
            </div>
            <div className="section-text">
                <h3>Childhood favourites</h3>
                <p>Ever since I was a kid I have had an affinity for video games. I genuinely can&apos;t remember the first game I played, but what I can remember is that it was on the DS Lite, what a throwback that is! Back when I was on the DS, I was mainly hooked on the LEGO games, like Star Wars TCS and LEGO Pirates of the Caribbean, so I definitely wasn&apos;t as hardcore as my modern gaming habits may seem.</p>
            </div>
            <div className="section-text">
                <h3>What I play now</h3>
                <p>Since my early teens, I&apos;ve been hooked on Call of Duty; more specifically competitive CoD. The thrill of the high stakes matches, and the unbelievable plays that players make have always kept me on the edge of my seat. As I&apos;m nowhere near good enough to compete with pro players, I play ranked play and pretend that I am instead! I also love playing games like Halo, and even like to dabble in a bit of Minecraft if I get bored enough :)</p>
                <p>*if anyone is curious who I support in CoD, the answer is Atlanta FaZe.</p>
            </div>
        </section>
        <section className="music">
            <div className="section-text">
                <h2>Music</h2>
                <p>I personally can&apos;t code, game, go out on walks, or do anything productively without music playing. It keeps me in the zone, and concentrated on what I&apos;m doing, (that may be a problem, but oh well!). This has allowed me to really find the music I love the most, and I have it all in playlists for you to check out on my <a href="https://music.apple.com/profile/jaydenpriestley">Apple Music profile</a> if you want :)</p>
            </div>
            <div className="section-text">
                <h3>My music taste in a nutshell</h3>
                <p>To be honest, my playlists are an absolute mess. I tend to listen to just about anything that isn&apos;t death metal or drum and bass. I have a love for older music, mainly from the 70s and 80s. Artists like Prince, Michael Jackson, Billy Ocean, amongst many others. In terms of modern music, I have one main artist who&apos;s music I absolutely adore. That is The Weeknd (XOTWOD).</p>
            </div>
        </section>
        <section className="walks">
            <div className="section-text">
                <h2>Going out on walks</h2>
                <p>There isn&apos;t really too much I can say for this one! When I spend so much time staring at a screen, it&apos;s refreshing to go out and touch some grass.</p>
            </div>
        </section>
        <section className="go-away">
            <div className="section-text">
                <h2>That&apos;s enough about me though.</h2>
            </div>
            <a href="/projects">Go check out some of my projects!</a>
        </section>
        </>
    );
}