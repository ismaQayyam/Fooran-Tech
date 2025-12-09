import React from "react";
import GlobalButton from "../GlobalButton";
import "../../Style/Career/carerop.css";

const CareerOpr = () => {
  const jobs = [
    {
      location: "Lahore, Pakistan",
      title: "Embedded Software Development Engineer",
      img: "/Image/carer1.webp",
    },
    {
      location: "Lahore, Pakistan",
      title: "Quality Assurance Engineer",
      img: "/Image/carer3.webp",
    },
    {
      location: "Lahore, Pakistan",
      title: "Cloud Development Engineer",
      img: "/Image/carer2.webp",
    },
    {
      location: "Lahore, Pakistan",
      title: "DevOps Engineer",
      img: "/Image/carer4.webp",
    },
  ];

  return (
    <section className="careeropr-section">
      <h2 className="careeropr-title">Explore Career Opportunities</h2>
      <p className="careeropr-sub">
        We seek innovative thinkers, team players and individuals who are
        passionate and ready to redefine the engineering landscape. Check out
        our current job openings and apply for a rewarding career at Fooran.
      </p>

      <div className="careeropr-card-wrapper">
  {jobs.map((job, index) => (
    <div className="careeropr-card" key={index}>
      {/* Image at the top, full width */}
 

      {/* Text content with padding */}
      <div className="careeropr-card-content">
        <div className="careeropr-tag">{job.location}</div>
        <h3 className="careeropr-job-title">{job.title}</h3>
      </div>
           <img src={job.img} alt={job.title} className="careeropr-img" />
    </div>
  ))}
</div>


      <div className="careeropr-btn-wrap" >
        <GlobalButton size="lg" style={{height:"40px", borderRadius:"30px"}}>Apply Now</GlobalButton>
      </div>
    </section>
  );
};

export default CareerOpr;
