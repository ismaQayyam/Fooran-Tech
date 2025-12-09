import React from "react";


export default function AboutSection({
  brandDark,
  brandAccent,
  title,
  highlight,
  description,
  imageSrc,
  imageAlt,
}) {
  return (
    <section className="ms-about-wrapper">
      <div className="ms-about-container">
        <div className="ms-about-text">
          <span className="ms-brand-dark">{brandDark}</span>
          <span className="ms-brand-accent">{brandAccent}</span>

          <h2 className="Iot-title">
            {title}
            <span className="ms-highlight"> {highlight}</span>
          </h2>

          <p className="Iot-description">{description}</p>
        </div>

        <div className="ms-about-img-wrapper">
          <img src={imageSrc} alt={imageAlt} className="ms-about-img" />
        </div>
      </div>
    </section>
  );
}