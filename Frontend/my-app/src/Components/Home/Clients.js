// // src/components/Home/Clients.js
// import React, { useState } from "react";
// import "../../Style/Home/Clients.css";
// import GlobalButton from "../../Components/GlobalButton";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const teamMembers = [
//   { id: 1, name: "Anand Oswal", role: "Advisory Board Member", img: "/Image/client1.webp" },
//   { id: 2, name: "Michael Hurlston", role: "Advisory Board Member", img: "/Image/client2.webp" },
//   { id: 3, name: "Rajesh C. Subramaniam", role: "CEO & Founder", img: "/Image/client3.webp" },
//   { id: 4, name: "New Member 1", role: "Senior Engineer", img: "/Image/client4.webp" },
//   { id: 5, name: "New Member 2", role: "Project Lead", img: "/Image/client5.webp" },
//   { id: 6, name: "New Member 3", role: "Manager", img: "/Image/client6.webp" },
//   { id: 7, name: "New Member 4", role: "CTO", img: "/Image/client7.webp" },
// ];

// const Clients = () => {
//   const [current, setCurrent] = useState(0);

//   const next = () => setCurrent((prev) => (prev + 1) % teamMembers.length);
//   const prev = () => setCurrent((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

//   const getVisibleMembers = () => {
//     const prevIndex = (current - 1 + teamMembers.length) % teamMembers.length;
//     const nextIndex = (current + 1) % teamMembers.length;
//     return [teamMembers[prevIndex], teamMembers[current], teamMembers[nextIndex]];
//   };

//   const visibleMembers = getVisibleMembers();

//   const progressWidth = ((current + 1) / teamMembers.length) * 100;

//   return (
//     <section className="team-wrapper">
//       <h2 className="team-title">
//         Meet Our <span className="team-highlight">Clients</span>
//       </h2>
//       <p className="team-subtitle">Get to know the people who make embedUR exceptional.</p>

//       <div className="team-slider">
//         {visibleMembers.map((member, index) => (
//           <div key={member.id} className={`team-card ${index === 1 ? "focus" : "dim"}`}>
//             <img src={member.img} alt={member.name} />
//             <h3>{member.name}</h3>
//             <p>{member.role}</p>
//           </div>
//         ))}
//       </div>

//      <div className="help-arrow-controls">
// <button className="help-bottom-arrow" onClick={prev}>
//   <FiChevronLeft size={22} />
// </button>

// <div className="help-progress-bar">
//   <div
//     className="help-progress-fill"
//    style={{ width: `${progressWidth}%` }}
//   ></div>
// </div>

// <button className="help-bottom-arrow" onClick={next}>
//   <FiChevronRight size={22} />
// </button>


//       </div>





//       <GlobalButton style={{ width: "120px", height: "40px", marginTop: "30px" ,borderRadius:"30px"}}> 
//         Know More
//       </GlobalButton>
//     </section>
//   );
// };

// export default Clients;
