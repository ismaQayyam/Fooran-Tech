import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../Style/Topbar.css";

const Topbar = ({ onTalkClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1200);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      // clear any pending dropdown close timer when component unmounts
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
    };
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const closeTimerRef = useRef(null);

  const handleDropdownToggle = () => {
    // if there's a pending close timer, cancel it
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsDropdownOpen((prev) => !prev);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    // close after 2 seconds (2000ms)
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
      closeTimerRef.current = null;
    }, 500);
  };

  return (
    <header className="topbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={handleNavClick}>
            <img
              src="/Image/Frame 1 (1).png"
              alt="Fooran Technologies"
              className="frlo"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          {isMobile && (
            <div className="sidebar-logo">
              <Link to="/" onClick={handleNavClick}>
                <img
                  src="/Image/Frame 1 (1).png"
                  alt="Fooran Technologies"
                  style={{ height: "50px", width: "150px" }}
                />
              </Link>
            </div>
          )}

          <Link to="/aboutus" className="nav-item" onClick={handleNavClick}>
            About Us
          </Link>

          <div
            className="dropdown"
            onMouseEnter={!isMobile ? handleDropdownMouseEnter : undefined}
            onMouseLeave={!isMobile ? handleDropdownMouseLeave : undefined}
          >
            <span
              className={`dropdown-toggle nav-item ${isDropdownOpen ? "active" : ""}`}
              onClick={isMobile ? handleDropdownToggle : undefined}
            >
              Services ▾
            </span>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/services/mbl" onClick={handleNavClick}>Mobile Design</Link>
                <Link to="/services/web" onClick={handleNavClick}>Web Design</Link>
                <Link to="/services/iot" onClick={handleNavClick}>IOT</Link>
                <Link to="/services/emb" onClick={handleNavClick}>Embedded</Link>
                <Link to="/services/ui" onClick={handleNavClick}>UI/UX</Link>
                <Link to="/services/ecd" onClick={handleNavClick}>ECAD</Link>
                <Link to="/services/build" onClick={handleNavClick}>System/BoxBuild</Link>
              </div>
            )}
          </div>

          <Link to="/career" className="nav-item" onClick={handleNavClick}>
            Career
          </Link>
          <Link to="/contact" className="nav-item" onClick={handleNavClick}>
            Contact
          </Link>

          {/* Talk to Us */}
          <a
            className="nav-item talk-btn"
            onClick={onTalkClick}
          >
            Talk to Us
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <div
          className={`menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
