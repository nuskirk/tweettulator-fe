import clsx from "clsx";
import React from "react";

type FooterProps = React.HTMLAttributes<HTMLDivElement>;
export default function FooterComponent({ className, ...rest }: FooterProps) {
  return (
    <footer {...rest} className={clsx(className, "h-10")}>
      Copyright (c) {new Date().getFullYear()}
    </footer>
  );
}
