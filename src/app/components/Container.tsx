/** @format */

import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto mt-20 bg-gray-200/10 rounded-xl p-10">
      {children}
    </div>
  );
}
