import Nav from "@/components/nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="welcome">
      <h2>Hey! I&apos;m Jayden, an 18 year old frontend web developer from the UK</h2>
    </section>
    <section className="links">
      <Nav/>
    </section>
    </>
  );
}
