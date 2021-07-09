import React, { useEffect } from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import HomeSection from "../components/sections/HomeSection";
import ContactSection from "../components/sections/ContactSection";
import ProjectsSection from "../components/sections/ProjectsSection";

export default function Home() {

  // To change location.hash on scroll
  function changeRouteOnScroll() {
    const elementsArray = ["home", "projects", "contact"];
    let currentRoute = "home";
    document.addEventListener("scroll", event => {
      const scrollTop = document.documentElement.scrollTop;
      let elementDiff = [];

      elementsArray.forEach((value, index) => {
        const element = document.getElementById(value);
        elementDiff[index] = Math.abs(element.offsetTop - scrollTop);
      });

      const newRoute =
        elementsArray[elementDiff.indexOf(Math.min(...elementDiff))];

      if (newRoute !== currentRoute) {
        window.location.hash = newRoute;
        currentRoute = newRoute;
      }
    });
  }

  useEffect(() => {
    changeRouteOnScroll();
  }, []);

  return (
    <LayoutWrapper onScroll={changeRouteOnScroll}>
      <HomeSection />
      <ProjectsSection />
      <ContactSection />
    </LayoutWrapper>
  );
}
