import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import { Router } from "@reach/router";
import HomeSection from "../components/sections/HomeSection";
import ContactSection from "../components/sections/ContactSection";
import ProjectsSection from "../components/sections/ProjectsSection";

export default function Home() {
  return (
    <LayoutWrapper>
      <Router>
        <HomeSection path="/" />
        <ProjectsSection path="/projects" />
        <ContactSection path="/contact" />
      </Router>
    </LayoutWrapper>
  );
}
