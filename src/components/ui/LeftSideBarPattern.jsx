import React, { useState, useEffect } from "react";

function LeftSideBarPattern({ size }) {
  const mockShapes = [
    {
      color: "bg-primary-lightYellow",
      shape: "clip-rectangular",
    },
    {
      color: "bg-primary-orange",
      shape: "clip-left-bottom-triangle",
    },
    {
      color: "bg-primary-darkGreen",
      shape: "clip-right-bottom-triangle",
    },
    {
      color: "bg-primary-lightYellow",
      shape: "clip-rectangular",
    },
    {
      color: "bg-primary-orangeGold",
      shape: "clip-left-top-triangle",
    },
    {
      color: "bg-primary-lightYellow",
      shape: "clip-rectangular",
    },
    {
      color: "bg-primary-orange",
      shape: "clip-left-bottom-triangle",
    },
    {
      color: "bg-primary-darkGreen",
      shape: "clip-right-bottom-triangle",
    },
    {
      color: "bg-primary-lightYellow",
      shape: "clip-rectangular",
    },
    {
      color: "bg-primary-orangeGold",
      shape: "clip-left-top-triangle",
    },
      {
      color: "bg-primary-lightYellow",
      shape: "clip-rectangular",
    },
    {
      color: "bg-primary-orange",
      shape: "clip-left-bottom-triangle",
    },
    {
      color: "bg-primary-darkGreen",
      shape: "clip-right-bottom-triangle",
    },
    {
      color: "bg-primary-lightYellow",
      shape: "clip-rectangular",
    },
    {
      color: "bg-primary-orangeGold",
      shape: "clip-left-top-triangle",
    },
  ];

  const [myShapes, setMyShapes] = useState(mockShapes);

  const sizeChecker = () => {
    const windowWidth = window.innerWidth;
    let numShapesToDisplay = 5; // Default number of shapes

    if (size && size >= 5) {
      // If a specific size is provided as a prop (for laptops), use that size
      numShapesToDisplay = size;
    } else if (windowWidth < 640) {
      // Smaller screens, display more shapes
      numShapesToDisplay = 10; // Show the specified number of shapes
    } else if (windowWidth < 1024) {
      // Medium-sized screens, you can adjust this as well
      numShapesToDisplay = 10;
    } else if (windowWidth > 1024 && size == 3) {
      numShapesToDisplay = 3;
    }

    setMyShapes(mockShapes.slice(0, numShapesToDisplay));
  };

  useEffect(() => {
    sizeChecker(); // Call the size checker initially
    window.addEventListener("resize", sizeChecker); // Listen for window resize events

    return () => {
      // Cleanup: remove the resize event listener when the component unmounts
      window.removeEventListener("resize", sizeChecker);
    };
  }, [size]); // Include size in the dependency array to handle changes to the size prop

  return (
    <div className="grid grid-rows-auto gap-0 m-0 h-full w-[10%] sm:w-[10%] absolute top-0 left-0">
      {myShapes.map((shape, index) => (
        <div
          key={index}
          className={`w-full h-full ${shape.color} ${shape.shape}`}
        />
      ))}
    </div>
  );
}

export default LeftSideBarPattern;
