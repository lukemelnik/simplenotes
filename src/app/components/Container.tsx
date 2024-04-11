/** @format */

import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto m-20 bg-gray-200/10 rounded-xl p-10 shadow-2xl shadow-purple-800 border-4 border-white">
      {children}
    </div>
  );
}
