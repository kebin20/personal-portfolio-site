import Head from "next/head";

import NavBar from "@/components/Navigation/Navbar";
import HomeHero from "@/components/HomeHero";
import AboutUs from "@/components/AboutMe";
import SkillsShowcase from "@/components/SkillsShowcase";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin Tanzyl | Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>
        <HomeHero />
        <AboutUs />
        <SkillsShowcase />
        <Projects />
        <ContactMe />
        <Footer />
      </main>
    </>
  );
}
