import React from "react";
import Image from "./Image";
import { IImages } from "k-component";

const { useState, useEffect, useRef } = React;

const Carousel = ({ images }: { images: IImages }) => {
  const carousel = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    if (!carousel?.current) return;

    const nextIndex = index === images.length - 1 ? 0 : index + 1;
    const width = carousel.current.offsetWidth;
    const nextPosition = width * nextIndex * -1;

    setIndex(nextIndex);
    setPosition(nextPosition);
  };

  useEffect(() => {
    const handleResize = () => {
      if (!carousel?.current) return;

      const width = carousel.current.offsetWidth;
      const nextPosition = width * index * -1;

      setPosition(nextPosition);
    };

    window.addEventListener("resize", handleResize, false);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div ref={carousel} className="k-carousel">
      {images.map((image) => (
        <div
          key={image?.id}
          className="k-carousel-image"
          onClick={handleClick}
          style={{ transform: `translateX(${position}px)` }}
        >
          <Image src={image?.url} alt={image?.alternativeText} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
