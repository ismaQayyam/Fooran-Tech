import React, { useEffect, useState } from "react";
import "../../Style/About Us/wedo.css";
import { FaPlay } from "react-icons/fa";

const WhatWeDo = () => {
  const [iconVisible, setIconVisible] = useState(false);

  useEffect(() => {
    // Fade in icon after component mounts
    const timer = setTimeout(() => setIconVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const openVideo = () => {
    window.open("https://www.youtube.com/watch?v=8Md6k7G6Y9E", "_blank");
  };

  return (
    <section className="what-we-do-section">
      <h2 className="we-title">
        <span className="we-back" aria-hidden="false">What</span> we <span className="we-highlight">do</span>
      </h2>

      <div className="content-wrapper container">
        <div className="image-container">
          <img src="/Image/about2.webp" alt="Innovation illustration" />

  <a
  className={`el-btn-video ${iconVisible ? "visible" : ""}`}
  href="https://www.youtube.com/watch?v=8Md6k7G6Y9E"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaPlay className="play-icon" />
</a>


        </div>

        <div className="text-content">
          <p>
            At Fooran Technologies, we specialize in AI, Edge Computing, IoT, Networking, and Cloud solutions. Leveraging our deep technical expertise and innovative approach, we develop cutting-edge products and solutions that solve complex challenges across multiple industries. Our technologies have been deployed across millions of devices worldwide, empowering enterprises including Fortune 500 companies to achieve operational excellence.
          </p>
          <p>
            Our vision is to build truly intelligent edge devices capable of adapting to dynamic environments with precision, making real-time decisions efficiently, and transforming the way businesses interact with technology. By integrating advanced analytics, connectivity, and automation, we aim to drive innovation that redefines efficiency, reliability, and scalability for our global clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
