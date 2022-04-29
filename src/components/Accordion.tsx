import React, { useRef, useState } from "react";

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("transform duration-700 ease");

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-ignore
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      active
        ? "transform duration-700 ease"
        : "transform duration-700 ease rotate-180"
    );
  }

  return (
    <div className="flex flex-col">
      <button
        className="box-border flex cursor-pointer appearance-none items-center justify-between py-6 focus:outline-none"
        onClick={toggleAccordion}
      >
        {/* <p className="text-footnote light inline-block">{title}</p> */}
        {/* <img
          src={`${appConfig.publicUrl}/img/icons/chevron-up.svg`}
          alt="Chevron icon"
          className={`${rotate} inline-block`}
        /> */}
        {title}
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="transition-max-height overflow-auto duration-700 ease-in-out"
      >
        <div className="pb-10">{content}</div>
      </div>
    </div>
  );
};
