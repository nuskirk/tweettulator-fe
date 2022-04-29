import clsx from "clsx";
import React from "react";

type FooterProps = React.HTMLAttributes<HTMLDivElement>;
export default function FooterComponent({ className, ...rest }: FooterProps) {
  return (
    <footer
      {...rest}
      className={clsx(className)}
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <div
        className="p-4 text-center text-gray-700"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2021 Copyright:
        <a className="text-gray-800" href="https://nustechnology.com/">
          NUS Technology
        </a>
      </div>
    </footer>
  );
}
