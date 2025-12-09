import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "../../Style/Home/story.css";

const stories = [
  {
    id: 1,
    image: "/Image/field1.webp",
    badge: "Intelligent Edge",
    title: "Advancing IoT Connectivity with Modern Wi-Fi 6 Technology",
    desc: "Developed secure and high-speed wireless features to power next-generation IoT devices with efficient performance.",
    link: "#",
  },
  {
    id: 2,
    image: "/Image/field2.webp",
    badge: "Smart Systems",
    title: "Streamlining IoT Deployments with Scalable System Tools",
    desc: "Enabled smooth device onboarding, real-time monitoring, and reliable OTA updates for growing connected ecosystems.",
    link: "#",
  },
  {
    id: 3,
    image: "/Image/field3.webp",
    badge: "Wireless Innovation",
    title: "Enhancing Wi-Fi Module Reliability for Demanding Networks",
    desc: "Improved latency, throughput, and overall network stability to support high-performance edge computing solutions.",
    link: "#",
  },
];


const Story = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % stories.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + stories.length) % stories.length);

  return (
    <section className="story-section">
<h2 className="story-title">
  Stories From The <span className="highlight-story-bg"><span>Field</span></span>
</h2>


      <p className="story-subtitle">
        Real-world examples that highlight our ability to tackle challenges and deliver results that matter.
      </p>

      <div className="story-card">
        <div className="story-image">
          <img src={stories[current].image} alt="Story" />
        </div>

        <div className="story-content">
          <span className="story-badge">{stories[current].badge}</span>
          <h3 className="story-heading">{stories[current].title}</h3>
          <p className="story-description">{stories[current].desc}</p>
          <a href={stories[current].link} className="story-link">Read Full Story →</a>
        </div>
      </div>

     <div className="help-arrow-controls">
   <button className="help-bottom-arrow" onClick={prevSlide}>
     <FiChevronLeft size={22} />
   </button>
   
   <div className="help-progress-bar">
     <div
       className="help-progress-fill"
      style={{ width: `${((current + 1) / stories.length) * 100}%` }}
     ></div>
   </div>
   
   <button className="help-bottom-arrow" onClick={nextSlide}>
     <FiChevronRight size={22} />
   </button>
   
   
         </div>
    </section>
  );
};

export default Story;
