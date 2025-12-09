import React from "react";
import "../../Style/CarsolCard.css";

const CarsolCard = () => {
  const cards = [
    {
      id: 1,
      bg: "linear-gradient(170deg, #8ed1fc, #0693e3)",
      title: "Smart Connectivity",
      desc: "Integrate devices for real-time IoT communication securely.",
    },
 
    {
      id: 3,
      bg: "linear-gradient(170deg, #FFD929, #DB721A)",
      title: "Data Analytics",
      desc: "Convert IoT data into insights for better performance.",
    },
    {
      id: 4,
      bg: "linear-gradient(170deg, #E17866, #C7372F)",
      title: "Fleet Tracking",
      desc: "Track vehicle locations and stats in real time.",
    },
       {
      id: 2,
      bg: "linear-gradient(170deg, #5595A8, #27568E)",
      title: "Energy Efficiency",
      desc: "Optimize and visualize power usage with live dashboards.",
    },
  ];

  return (
    <div className="card-carousel-container">
      <div className="card-carousel-wrapper">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card-carousel-item"
            style={{ background: card.bg }}
          >
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsolCard;
