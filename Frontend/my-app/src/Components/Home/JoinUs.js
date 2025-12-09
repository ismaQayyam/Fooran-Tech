import React from "react";
import { useNavigate } from "react-router-dom";
import GlobalButton from "../../Components/GlobalButton";
import "../../Style/Home/joinus.css";

const JoinUs = () => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate("/apply"); 
  };

  return (
    <section className="joinus-section">
      <h2 className="joinus-title">Want To Join Our Talent Pool?</h2>

      <p className="joinus-subtitle">
        Ready to ignite your career? Submit your CV/Resume and we'll notify you of job opportunities that match your skills.
      </p>

      <GlobalButton size="md" onClick={handleApply} style={{borderRadius:"30px", height:"37px"}}>
        Apply Now
      </GlobalButton>
    </section>
  );
};

export default JoinUs;
