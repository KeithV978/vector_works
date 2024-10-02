import * as React from "react";
import { Hero } from "./Hero";
import { About } from "./About";
import { Projects } from "./Projects";
import { Faqs } from "./Faqs";

const Sections = ({ selection }) => {
  return (
    <div>
      {(() => {
        switch (selection) {
          case "hero":
            return <Hero />;

          case "about":
            return <About />;

          case "projects":
            return <Projects />;

          case "faqs":
            return <Faqs />;

          default:
            break;
        }
      })()}
    </div>
  );
};

export default Sections;
