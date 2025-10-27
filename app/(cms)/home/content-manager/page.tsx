"use client";
import { useState } from "react";
import Packages from "./Packages";

export default function Writing() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <div className="my-4">
        <div
          role="tablist"
          aria-label="Tabbed navigation"
          className="grid grid-cols-12 gap-2 mb-4"
        >
          <button
            role="tab"
            id="tab1"
            aria-controls="panel1"
            aria-selected="true"
            className={`bg-gray-100 px-2 py-1 rounded text-sm hover:cursor-pointer  ${
              activeTab === "tab1" && "bg-gray-200"
            }`}
            onClick={() => setActiveTab("tab1")}
          >
            Packages
          </button>
          <button
            role="tab"
            id="tab2"
            aria-controls="panel2"
            aria-selected="false"
            className={`bg-gray-100 px-2 py-1 rounded text-sm hover:cursor-pointer  ${
              activeTab === "tab2" && "bg-gray-200"
            }`}
            onClick={() => setActiveTab("tab2")}
          >
            Stats
          </button>
          <button
            role="tab"
            id="tab3"
            aria-controls="panel3"
            aria-selected="false"
            className={`bg-gray-100 px-2 py-1 rounded text-sm hover:cursor-pointer  ${
              activeTab === "tab3" && "bg-gray-200"
            }`}
            onClick={() => setActiveTab("tab3")}
          >
            Testimonial
          </button>
          <button
            role="tab"
            id="tab4"
            aria-controls="panel4"
            aria-selected="false"
            className={`bg-gray-100 px-2 py-1 rounded text-sm hover:cursor-pointer  ${
              activeTab === "tab4" && "bg-gray-200"
            }`}
            onClick={() => setActiveTab("tab4")}
          >
            Members
          </button>
          <button
            role="tab"
            id="tab5"
            aria-controls="panel5"
            aria-selected="false"
            className={`bg-gray-100 px-2 py-1 rounded text-sm hover:cursor-pointer  ${
              activeTab === "tab5" && "bg-gray-200"
            }`}
            onClick={() => setActiveTab("tab5")}
          >
            Blog
          </button>
        </div>
        <div>{activeTab === "tab1" && <Packages />}</div>
      </div>
    </>
  );
}
