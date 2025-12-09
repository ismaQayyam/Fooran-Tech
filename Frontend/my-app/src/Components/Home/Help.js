import React, { useState } from "react";
import "../../Style/Home/Help.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Help = () => {
  const cards = [
    {
      img: "/Image/AI-overview.webp",
      title: "Artificial Intelligence",
      desc: "Specializing in AI/ML, we analyze big data in IoT...",
      link: "Explore AI Services →",
    },
    {
      img: "/Image/help image2.webp",
      title: "Enhancements",
      desc: "Juggling upgrades and innovation? Our cost-efficient...",
      link: "Explore Enhancements →",
    },
    {
      img: "/Image/help img.webp",
      title: "SQA & Test",
      desc: "For a robust final product, integration of testing...",
      link: "Explore SQA Solutions →",
    },
    {
      img: "/Image/help img4.webp",
      title: "Automation",
      desc: "Streamlining workflows and boosting productivity...",
      link: "Explore Automation →",
    },
 
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(cards[(index + i) % cards.length]);
    }
    return visible;
  };

  return (
    <section className="help-section" style={{backgroundColor: "#f4f5ff"}}>
    <h2 className="help-title">
  How We Help{" "}
  <span className="highlight-help-bg">
    <img src="/Image/dot.png" alt="highlight" className="highlight-help-img" />
    <span>You</span>
  </span>
</h2>


      <p className="help-subtitle">
        Experience innovation and enhance product value with embedUR, where
        quality assurance meets meticulous testing and top-tier support.
      </p>

      <div className="help-carousel-wrapper">
        <div className="help-carousel">
          {getVisibleCards().map((card, i) => (
            <div className="help-card" key={i}>
              <img src={card.img} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <a href="#">{card.link}</a>
            </div>
          ))}
        </div>
      </div>

    

      <div className="help-arrow-controls">
<button className="help-bottom-arrow" onClick={prevSlide}>
  <FiChevronLeft size={22} />
</button>

<div className="help-progress-bar">
  <div
    className="help-progress-fill"
    style={{ width: `${((index + 1) / cards.length) * 100}%` }}
  ></div>
</div>

<button className="help-bottom-arrow" onClick={nextSlide}>
  <FiChevronRight size={22} />
</button>


      </div>
    </section>
  );
};

export default Help;
