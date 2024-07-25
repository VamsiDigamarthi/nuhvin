import React, { useEffect, useState } from "react";
import "./Image.css";
const Image = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, currentTarget } = event;
      const screenWidth = currentTarget.clientWidth;
      const mouseXPercentage = clientX / screenWidth;

      // Calculate the offset based on mouse position
      const newOffset = (mouseXPercentage - 0.5) * -40; // -20px to 20px range
      setOffset(newOffset);
    };

    const section = document.querySelector(".image-mover-section");
    section.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="image-mover-section">
      <img
        src="/images/4-x-3-inches-Deepa.jpg" // Replace with your image path
        alt="Moving"
        className="moving-image"
        style={{ transform: `translateX(${offset}px)` }}
      />
    </div>
  );
};

export default Image;
