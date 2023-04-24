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
        <meta property="og:title" content="Kevin Tanzyl | Web Developer"></meta>
        <meta
          property="og:description"
          content="Personal website showcasing my top projects and a summary of myself"
        ></meta>
        <meta property="og:image" content="../assets/profile-image.png"></meta>
        <meta
          property="og:image:alt"
          content="Kevin Tanzyl | Web Developer"
        ></meta>
        <meta property="og:image:width" content="1000"></meta>
        <meta property="og:image:height" content="700"></meta>
        <meta property="og:url" content="https://ktanzyl.netlify.app/"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          name="description"
          content="Personal website showcasing my top projects and a summary of myself"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="google-site-verification"
          content="JFiYK7-30EetcsS8Axti9pL0yksNaxNUBiwZpFh03Bc"
        ></meta>
        <link rel="icon" href="/favicon.png" />
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
