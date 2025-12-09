import React from "react";
import "../../Style/Home/LifeInFooran.css";
import { FaHandsHelping, FaUsers, FaRegSmileBeam } from "react-icons/fa";

const LifeInFooran = () => {
  return (
    <section className="life-section">
      <h2 className="life-title">Life @ Fooran Technologies</h2>

      <p className="life-subtitle">
        Get a down-to-earth perspective on life at Fooran from our seasoned engineers.
        Learn about career growth, autonomy, and real-world project exposure —
        all while creating impact together.
      </p>

      <div className="life-cards">
        
        <div className="life-card">
          <div className="life-icon icon-blue">
            <FaHandsHelping size={35} />
          </div>
          <h3 className="life-card-title">Fooran's Culture</h3>
          <p className="life-card-text">
            We value focus, commitment, and responsiveness. Our culture promotes
            trust, friendliness, and open communication.
          </p>
        </div>

        <div className="life-card">
          <div className="life-icon icon-yellow">
            <FaUsers size={35} className="iccons" />
          </div>
          <h3 className="life-card-title">Team Collaboration</h3>
          <p className="life-card-text">
            Our team members support and guide each other, building a strong
            environment where everyone thrives and grows.
          </p>
        </div>

        <div className="life-card">
          <div className="life-icon icon-red">
            <FaRegSmileBeam size={35} />
          </div>
          <h3 className="life-card-title">Vibrant Workplace</h3>
          <p className="life-card-text">
            We celebrate achievements and host regular engagement activities
            to keep the workplace energetic and joyful.
          </p>
        </div>

      </div>
    </section>
  );
};

export default LifeInFooran;
