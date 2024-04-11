/** @format */

import { ArrowRightIcon } from "@radix-ui/react-icons";
import React from "react";

export default function Button({
  children,
  type = "submit",
}: {
  children: React.ReactNode;
  type: "submit" | "button" | "reset";
}) {
  return (
    <button
      type={type}
      className="rounded px-4 py-2 bg-gray-300 text-gray-950 hover:bg-gray-400 flex gap-3 items-center justify-center mt-3"
    >
      {children}
      <ArrowRightIcon />
    </button>
  );
}
