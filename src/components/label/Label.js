import React from "react";

// Styles
import "./Label.css";

const Labels = ({ sectionName }) => {
  function Color(color) {
    return <div className="colors" style={{ backgroundColor: color }}>{sectionName}</div>;
  }

  switch (sectionName) {
    case "National":
      return <div>{Color("var(--nation-color)")}</div>;
    case "World":
     return <div>{Color("var(--world-color)")}</div>;
    case "Politics":
      return <div>{Color("var(--politics-color)")}</div>;
    case "Business":
      return <div>{Color("var(--business-color)")}</div>;
    case "Regional":
      return <div>{Color("var(--regional-color)")}</div>;
    case "Culture":
      return <div>{Color("var(--culture-color)")}</div>;
    case "Food":
      return <div>{Color("var(--food-color)")}</div>;
    case "Family":
      return <div>{Color("var(--family-color)")}</div>;
    case "Health":
      return <div>{Color("var(--health-color)")}</div>;
    case "Weather":
      return <div>{Color("var(--weather-color)")}</div>;
    case "Sports":
      return <div>{Color("var(--sports-color)")}</div>;
    case "Science":
      return <div>{Color("var(--science-color)")}</div>;
    case "Music":
      return <div>{Color("var(--science-color)")}</div>;
    case "Tech":
     return <div>{Color("var(--tech-color)")}</div>;
    default:
      return null;
  }

};

export default Labels;
