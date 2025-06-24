import React, { useState } from "react";

function HoverZoomText({ children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <h1
      style={{
        transform: hovered ? "scale(1.1)" : "scale(1)",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </h1>
  );
}

export default HoverZoomText;