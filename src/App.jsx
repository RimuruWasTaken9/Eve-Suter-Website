import React from "react";
import { seasonalImages } from "./assets/imageURLs.js";
import "./App.css";

function App() {
  return (
    <div className="gallery-container">
      <h1 className="main-title">Eve Suter's Portfolio</h1>
      {seasonalImages.map((group, groupIndex) => (
        <div key={groupIndex} className="group-container">
          <h2 className="group-title">{group.title}</h2>
          <div className="image-row">
            {group.images.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Artwork ${groupIndex + 1}-${index + 1}`}
                className="image"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
