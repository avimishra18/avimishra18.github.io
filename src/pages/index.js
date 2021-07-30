import React, { useEffect } from "react";
import LayoutWrapper from "../components/common/LayoutWrapper";
import HomeSection from "../components/home";
import ContactSection from "../components/contacts";
import ProjectsSection from "../components/projects";

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
