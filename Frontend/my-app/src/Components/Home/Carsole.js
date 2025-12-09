import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import GlobalButton from "../../Components/GlobalButton";
import "../../Style/carsole.css";

const Carsole = () => {
const slides = [
  {
    img: "/Image/EmbedUR_banner2.webp",
    tag: (
      <>
        <span style={{ color: "#000", fontWeight: "700" }}>#Manzoor</span>{" "}
        <span style={{ color: "#dc3545", fontWeight: "700" }}>Labs</span>
      </>
    ),
    title: (
      <>
        <span style={{ color: "#000", fontWeight: "900" }}>
          Designing next-gen mobile{" "}
        </span>
        <span style={{ color: "#dc3545", fontWeight: "900" }}>
          experiences.
        </span>
      </>
    ),
    desc: "We create fast, responsive, and intuitive mobile applications tailored to user needs — blending performance with beautiful design",
    btnText: "Explore Mobile Solutions",
    btnLink: "/services/mbl",
  },
  {
    img: "/Image/EmbedUR_banner3 (1).webp",
    tag: (
      <>
        <span style={{ color: "#000", fontWeight: "700" }}>#Manzoor</span>{" "}
        <span style={{ color: "#dc3545", fontWeight: "700" }}>Labs</span>
      </>
    ),
    title: (
      <>
        <span style={{ color: "#000", fontWeight: "900" }}>
          Crafting powerful and scalable{" "}
        </span>
        <span style={{ color: "#dc3545", fontWeight: "900" }}>
          web platforms.
        </span>
      </>
    ),
    desc: "From dynamic web apps to complex enterprise portals — we build modern, high-performing solutions that drive results",
    btnText: "View Web Services",
    btnLink: "/services/web",
  },
  {
    img: "/Image/EmbedUR-banner1.webp",
    tag: (
      <>
         <span style={{ color: "#000", fontWeight: "700" }}>#Manzoor</span>{" "}
        <span style={{ color: "#dc3545", fontWeight: "700" }}>Labs</span>
      </>
    ),
    title: (
      <>
        <span style={{ color: "#000", fontWeight: "900" }}>
          Building intelligent IoT{" "}
        </span>
        <span style={{ color: "#dc3545", fontWeight: "900" }}>ecosystems.</span>
      </>
    ),
    desc: "We connect devices, data, and people through secure IoT platforms — enabling real-time monitoring and smart automation",
    btnText: "Discover IoT Solutions",
    btnLink: "/services/iot",
  },
  {
    img: "/Image/Home-page-banner-3-scaled-1.webp",
    tag: (
      <>
        <span style={{ color: "#000", fontWeight: "700" }}>#Manzoor</span>{" "}
        <span style={{ color: "#dc3545", fontWeight: "700" }}>Labs</span>
      </>
    ),
    title: (
      <>
        <span style={{ color: "#000", fontWeight: "bold" }}>
          Innovative ECAD and PCB{" "}
        </span>
        <span style={{ color: "#dc3545", fontWeight: "900" }}>
          design solutions.
        </span>
      </>
    ),
    desc: "We provide professional ECAD and PCB design services, ensuring precision, performance, and manufacturability",
    btnText: "Learn More About ECAD",
    btnLink: "/services/ecd",
  },
];


  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="carsole-fullscreen">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 100, damping: 25 },
            opacity: { duration: 0.4 },
          }}
          className="carsole-slide"
        >
          <div className="carsole-layout">
            <img
              src={slides[index].img}
              alt="carousel slide"
              className="carsole-image"
            />

            <div className="carsole-overlay">
              <div className="carsole-content">
                <p className="carsole-tag">{slides[index].tag}</p>
                <h1 className="carsole-title">{slides[index].title}</h1>
                <p className="carsole-desc">{slides[index].desc}</p>

                <Link to={slides[index].btnLink}>
                  <GlobalButton
                    style={{
                      "--btn-h": "50px",
                      "--btn-px": "28px",
                      "--btn-fs": "16px",
                      borderRadius: "25px",
                    }}
                  >
                    {slides[index].btnText}
                  </GlobalButton>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="carsole-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`dot ${i === index ? "active" : ""}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carsole;
