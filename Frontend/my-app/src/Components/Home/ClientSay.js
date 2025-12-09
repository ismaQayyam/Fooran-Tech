// import React, { useState, useEffect } from "react";
// import "../../Style/Home/clientsay.css";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const clientReviews = [
//   {
//     text: "Working with Fooran Technology helped us bring IoT connectivity into our products within months. Their expertise and dedication gave us a huge competitive edge.",
//     name: "A.T",
//     role: "VP, Product Management, Fortune 500 Company",
//   },
//   {
//     text: "We keep coming back to Fooran because their team always delivers. Mature leadership, strong communication, and flawless execution.",
//     name: "A.C",
//     role: "Senior Director of Engineering, Fortune 500 Company",
//   },
//   {
//     text: "Fooran has excelled again. Their dashboard and real-time data integration work perfectly. It’s simple, reliable, and just works.",
//     name: "B.I",
//     role: "President, Media and Communication Systems, Fortune 500 Company",
//   },
//   {
//     text: "Their engineering approach stands out. Clean architecture, well-defined APIs, and smooth execution end-to-end.",
//     name: "R.F",
//     role: "CTO, IoT Device Manufacturing Company",
//   },
//   {
//     text: "Fooran is not just a vendor, they are a true technology partner. They helped us optimize and scale efficiently.",
//     name: "M.K",
//     role: "Head of Cloud Platforms, Enterprise Solutions Company",
//   },
// ];

// const ClientSay = () => {
//   const [index, setIndex] = useState(0);
//   const [cardWidth, setCardWidth] = useState(30);

//   // update card width based on screen size
//   useEffect(() => {
//     const updateWidth = () => {
//       if (window.innerWidth <= 480) setCardWidth(85);
//       else if (window.innerWidth <= 768) setCardWidth(70);
//       else if (window.innerWidth <= 992) setCardWidth(45);
//       else setCardWidth(30);
//     };
//     updateWidth();
//     window.addEventListener("resize", updateWidth);
//     return () => window.removeEventListener("resize", updateWidth);
//   }, []);

//   // calculate progress bar width
//   const maxIndex = clientReviews.length - Math.floor(100 / cardWidth);
//   const progressWidth = (index / maxIndex) * 100;

//   const next = () => {
//     if (index < maxIndex) setIndex(index + 1);
//   };

//   const prev = () => {
//     if (index > 0) setIndex(index - 1);
//   };

//   return (
//     <section className="clientsay-section">
//       <div className="clientsay-container">
//         <h2 className="clientsay-title">
//          What Our Clients Say
//         </h2>
//         <p className="clientsay-subtitle">
//           Discover Fooran Technology through our clients' perspectives.
//         </p>

//         <div className="clientsay-slider-wrapper">
//           <div
//             className="clientsay-slider"
//             style={{ transform: `translateX(-${index * cardWidth}%)` }}
//           >
//             {clientReviews.map((review, i) => (
//               <div className="clientsay-card" key={i}>
//                 <p className="clientsay-text">{review.text}</p>
//                 <h4 className="clientsay-name">{review.name}</h4>
//                 <p className="clientsay-role">{review.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="help-arrow-controls">
//           <button className="help-bottom-arrow" onClick={prev}>
//             <FiChevronLeft size={22} />
//           </button>

//           <div className="help-progress-bar">
//             <div
//               className="help-progress-fill"
//               style={{ width: `${progressWidth}%` }}
//             ></div>
//           </div>

//           <button className="help-bottom-arrow" onClick={next}>
//             <FiChevronRight size={22} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientSay;
