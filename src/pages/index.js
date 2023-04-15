import Head from "next/head";

import NavBar from "@/components/Navbar";
import HomeHero from "@/components/HomeHero";
import AboutUs from "@/components/AboutMe";
import SkillsShowcase from "@/components/SkillsShowcase";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin Tanzyl | Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        ></link>
      </Head>
      <NavBar />
      <main>
        <HomeHero />
        <AboutUs />
        <SkillsShowcase />
        <Projects />
        <ContactMe />
      </main>
    </>
  );
}
