import React from 'react';
import "../../Style/About Us/Overview.css";

const Overview = () => {
 const companyData = [
    { id: 1, text: "Privately owned technology company" },
    { id: 2, text: "Headquarters in Lahore, Pakistan with global client reach" },
    { id: 3, text: "Dedicated team of software and embedded professionals" },
    { id: 4, text: "Serving clients from startups to established enterprises" },
    { id: 5, text: "Proven track record of client satisfaction and retention" },
    { id: 6, text: "State-of-the-art development facilities" },
    { id: 7, text: "Consistent year-over-year growth" },
    { id: 8, text: "Delivering software solutions for diverse technology platforms" },
    { id: 9, text: "Self-funded and financially stable" },
    { id: 10, text: "Expertise across multiple technology domains and industries" }
];

  return (
    <div className="embedur-overview-wrapper">
      <div className="embedur-overview">
        
        <div className="embedur-content">
          <div className="embedur-header">
            <h1 className="embedur-title" style={{alignItemsa:"center"}}>Fooran Technologies at a Glance</h1>
            <div className="title-underline"></div>
          </div>

          <ul className="embedur-list">
            {companyData.map((item) => (
              <li key={item.id} className="embedur-list-item">
                <span className="list-bullet">✔</span>
                <span className="list-text">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="embedur-image">
          <img src="/Image/about3.webp" alt="Fooran Technologies Overview" />
        </div>

      </div>
    </div>
  );
}

export default Overview;
