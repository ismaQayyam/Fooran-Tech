import React from "react";
import "../../Style/Home/WeShine.css";

const WeShine = () => {
  return (
    <section className="we-shine">
 <h2 className="shine-title">
  Where We <span className="highlight-text-bg"><span>Shine</span></span>
</h2>


      <p className="shine-subtitle">
        We are a leading embedded systems company that specializes in{" "}
        <span className="highlight-text">platform enablement</span> and in
        developing embedded firmware that seamlessly integrates with platform
        functionalities.
      </p>

      <div className="shine-content">

        {/* Circles */}
        <div className="shine-diagram">
        <img src="/Image/updated-diagram.webp" alt="Tech Diagram" style={{width:"450px"}} />
        </div>

        {/* Cards */}
        <div className="shine-cards">
          <div className="shine-card">
            <h4>SMART DEVICES</h4>
            <p>
              We put smart technology into even the smallest devices making
              them work brilliantly for you.
            </p>
            <a href="#">Visit Smart Devices Page →</a>
          </div>

          <div className="shine-card">
            <h4>AI & ML</h4>
            <p>
              We are experts in tiny AI & ML with application-ready models for
              solving problems on the Edge.
            </p>
            <a href="#">Check Our AI & ML Page →</a>
          </div>

          <div className="shine-card">
            <h4>CONNECTIVITY</h4>
            <p>
              We are experts at connecting smart devices using the best wired
              or wireless options.
            </p>
            <a href="#">View Connectivity Page →</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WeShine;
