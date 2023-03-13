import React from "react";

const SectionTitle = ({ tagline, titleText }) => {
  return (
    <div className="section-title mb-12 text-center">
      <h5>{tagline}?</h5>
      <h2 className="before:left-[50%] before:translate-x-[-50%]">
        {titleText}
      </h2>
    </div>
  );
};

export default SectionTitle;
