import React, { useEffect, useState, useRef } from "react";
import LayoutWrapper from "../components/common/LayoutWrapper";
import HomeSection from "../components/home";
import ContactSection from "../components/contacts";
import ProjectsSection from "../components/projects";
import basicInformation from "../content/basic_information.json";
import {
  HOME_SECTION,
  PROJECTS_SECTION,
  CONTACT_SECTION,
} from "../utils/constants";

export default function Home() {
  const { name_proper_case } = basicInformation;
  const [activeHashRoute, setActiveHashRoute] = useState();
  const activeRoute = useRef(activeHashRoute);

  // History API on modern browsers with fallback on old ones
  const updateRoute = route => {
    if (window.history.replaceState) {
      window.history.replaceState(null, null, `#${route}`);
    } else {
      window.location.hash = route;
    }
    setActiveHashRoute(route);
  };

  // To update the browser history on scroll
  function changeRouteOnScroll() {
    const elementsArray = [HOME_SECTION, PROJECTS_SECTION, CONTACT_SECTION];
    document.addEventListener("scroll", event => {
      const scrollTop = document.documentElement.scrollTop;
      let elementDiff = [];

      elementsArray.forEach((value, index) => {
        const element = document.getElementById(value);
        elementDiff[index] = Math.abs(element.offsetTop - scrollTop);
      });

      const newRoute =
        elementsArray[elementDiff.indexOf(Math.min(...elementDiff))];

      if (newRoute !== activeRoute.current) {
        updateRoute(newRoute);
      }
    });
  }

  useEffect(() => {
    // updateRoute(HOME_SECTION);
    changeRouteOnScroll(activeHashRoute);
  }, []);

  useEffect(() => {
    activeRoute.current = activeHashRoute;
  }, [activeHashRoute]);

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>{name_proper_case}</title>
      </head>
      <body>
        <LayoutWrapper
          onScroll={changeRouteOnScroll}
          activeHashRoute={activeHashRoute}
        >
          <HomeSection />
          <ProjectsSection />
          <ContactSection />
        </LayoutWrapper>
      </body>
    </html>
  );
}
