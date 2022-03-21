import React from "react";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import "../pages/HomePage.css";

const HomePage = () => {
  return (
    <div className="main-page">
      <div className="sections">
        <section id="header">
          <Header />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
};
export default HomePage;
