// import React, { useState } from "react";
// import "../../Style/Career/Employe.css";

// const employees = [
//   {
//     img: "/Image/yasir ammar.jpg",
//     name: "Yasir Ammar",
//     role: "CTO",
//     desc: "At Fooran Technologies, I enjoy leading a talented team and building innovative solutions that move the company forward.",
//   },
//   {
//     img: "/Image/rabia.jpg",
//     name: "Rabia",
//     role: "Full Stack Engineer",
//     desc: "Working here allows me to solve meaningful problems and grow my skills across both frontend and backend development.",
//   },
//   {
//     img: "/Image/jaffar.jpg",
//     name: "Jaffar Tayyar",
//     role: "Adviser",
//     desc: "I focus on guiding the team with the right strategies to ensure steady growth, better decisions, and strong project outcomes.",
//   },
//   {
//     img: "/Image/Ahmad.png",
//     name: "Muhammad Ahmad",
//     role: "Business Developer Manager",
//     desc: "I enjoy working in a collaborative environment where we build opportunities and create value for our clients and team.",
//   },
//   {
//     img: "/Image/Isma.jpeg",
//     name: "Isma Qayyum",
//     role: "Software Engineer",
//     desc: "This company has helped me grow as an engineer through real-world projects, teamwork, and continuous learning.",
//   },
//   {
//     img: "/Image/emp4.jpg",
//     name: "Muhammad Bilal",
//     role: "PCB Designer",
//     desc: "Designing hardware here is both challenging and rewarding, and the supportive environment makes the work enjoyable.",
//   }
// ];

// const Employe = () => {
//   const [index, setIndex] = useState(1); // middle card visible first

//   const nextSlide = () => {
//     setIndex((prev) => (prev + 1) % employees.length);
//   };

//   const prevSlide = () => {
//     setIndex((prev) =>
//       prev - 1 < 0 ? employees.length - 1 : prev - 1
//     );
//   };

//   return (
//     <section className="emp-section">
//       <h2 className="emp-title">Employee Perspectives</h2>
//       <p className="emp-subtitle">
//         Hear directly from our team about their experiences at Fooran Technologies.
//       </p>

//       {/* SLIDER */}
//       <div className="emp-slider-container">
//         <button className="emp-nav-btn left" onClick={prevSlide}>
//           ❮
//         </button>

//         <div className="emp-slider">
//           {employees.map((emp, i) => {
//             const isActive = i === index;
//             const isSide =
//               i === (index - 1 + employees.length) % employees.length ||
//               i === (index + 1) % employees.length;

//             return (
//               <div
//                 key={i}
//                 className={`emp-slide-card ${
//                   isActive ? "active" : isSide ? "side" : "hidden"
//                 }`}
//               >
//                 <div className="emp-img-wrapper">
//                   <img src={emp.img} alt={emp.name} className="emp-img" />
//                 </div>
//                 <h4 className="emp-name">{emp.name}</h4>
//                 <p className="emp-role">{emp.role}</p>
//                 <p className="emp-desc">{emp.desc}</p>
//               </div>
//             );
//           })}
//         </div>

//         <button className="emp-nav-btn right" onClick={nextSlide}>
//           ❯
//         </button>
//       </div>

//       {/* PROGRESS DOTS */}
//       <div className="emp-dots">
//         {employees.map((_, dotIndex) => (
//           <span
//             key={dotIndex}
//             className={`dot ${index === dotIndex ? "active-dot" : ""}`}
//             onClick={() => setIndex(dotIndex)}
//           ></span>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Employe;
