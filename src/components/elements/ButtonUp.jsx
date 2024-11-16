import React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ButtonUp() {
  // Smooth scrolls to the element with id 'intro'
  const handleScrollToTop = () => {
    const introElement = document.getElementById("intro");
    introElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-[70px] right-4 z-10">
      <button
        onClick={handleScrollToTop}
        className="p-3 rounded-full bg-primary text-secondary shadow-lg focus:outline-none"
        aria-label="Scroll to Top"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
}
