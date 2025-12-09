import React from "react";
import "../../Style/Career/CEOMessage.css";

const CEOMessage = () => {
  return (
    <section className="ceo-section">
      <div className="ceo-card">

        {/* Title */}
        <h2 className="ceo-title">
        <span>CEO</span> Message
        </h2>

        {/* Description */}
        <p className="ceo-text">
          At <strong>Fooran Tech</strong>, our mission is to empower customers to stay
          ahead in a rapidly evolving landscape by delivering innovative solutions in
          <strong> software development, ECAD, IoT, and embedded systems</strong>. Through
          our collaborative service-delivery platform, we provide top-tier IT services
          that enable seamless project management and efficient resource utilization.
        </p>

        <p className="ceo-text">
          As we grow, we remain focused on crafting
          <em> tailored, cutting-edge solutions</em> that help our clients thrive in
          competitive markets. With advanced technology and unwavering support,
          Fooran Tech is dedicated to helping clients achieve their goals and lead the
          way in their industries.
        </p>

        <p className="ceo-text">
          <strong>Core strengths:</strong> end-to-end product engineering, IoT
          integration, embedded firmware, and ECAD-driven hardware validation —
          backed by a customer-first approach and agile delivery model.
        </p>

      </div>
    </section>
  );
};

export default CEOMessage;
