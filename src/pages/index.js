import React from "react";


import Layout from "../components/Layout";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import NavBar from "../components/NavBar";
import Cta from "../components/Cta";


export default function IndexPage() {
  return (
    <Layout>
      <Seo title="Astral Atlas" />
      <NavBar />
      <Cta />
    </Layout>
  );
}

const styles = {
  
}