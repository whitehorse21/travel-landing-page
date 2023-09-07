import React from "react";

interface SelectionProps {
  figure: any;
  caption: string;
}

const Selection = ({ figure, caption }: SelectionProps) => {
  return (
    <figure className="relative">
      <img src={figure} alt={caption} className="w-full h-full object-cover" />
      <figcaption className="absolute z-10 bottom-2 left-2 text-white text-2xl font-bold">
        {caption}
      </figcaption>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
    </figure>
  );
};

export default Selection;
