"use client";
import React, { useEffect } from "react";

const CalendlyEmbed = ({ url }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
    script.setAttribute("type", "text/javascript");
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: document.querySelector(".calendly-inline-widget"),
          prefill: {},
          utm: {}
        });
      }
    };
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [url]);

  return (
    <div
      className="calendly-inline-widget h-[600px] w-full overflow-hidden" // Tailwind classes for height and overflow
    ></div>
  );
};

export default CalendlyEmbed;
