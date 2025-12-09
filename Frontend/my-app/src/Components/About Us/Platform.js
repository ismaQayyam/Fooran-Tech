import React from "react";
import "../../Style/About Us/platform.css";

import { FaCog } from "react-icons/fa";
import { MdApps, MdWifi } from "react-icons/md";
import { RiShieldCheckFill } from "react-icons/ri";
import { IoHardwareChip } from "react-icons/io5";
import { AiOutlineDatabase } from "react-icons/ai";

const platformData = [
  {
    icon: <FaCog fill="white" />,          // Gear for platform enablement
    gradient: "linear-gradient(170deg, #8ed1fc, #0693e3)",
    title: "Carrier Platform Enablement",
    desc: "We help service providers deliver scalable, reliable and cost-effective Wi-Fi and IoT services to homes and businesses."
  },
  {
    icon: <MdApps fill="white" />,         // Apps grid for components
    gradient: "linear-gradient(170deg, #FFD929, #DB721A)",
    title: "Licensable Platform Components",
    desc: "Accelerate service deployments, simplify new device onboarding, and maximize Wi-Fi and IoT platform agility."
  },
  {
    icon: <MdWifi fill="white" />,         // Wi-Fi icon for carrier access
    gradient: "linear-gradient(170deg, #E17866, #C7372F)",
    title: "Carrier Wi-Fi Access",
    desc: "Our Universal Carrier Wi-Fi platform delivers enterprise-grade Wi-Fi services across diverse CPE platforms and markets."
  },
  {
    icon: <RiShieldCheckFill fill="white" />, // Shield for assurance/security
    gradient: "linear-gradient(170deg, #5595A8, #27568E)",
    title: "Carrier Wi-Fi Assurance",
    desc: "Wi-Fi Service Assurance platform reduces operating costs by optimizing Wi-Fi user QoE on any Wi-Fi infrastructure."
  },
  {
    icon: <IoHardwareChip fill="white" />,   // Hardware chip for IoT platform
    gradient: "linear-gradient(135deg, #FF9A9E, #9e0000ff)",
    title: "Carrier IoT Platform",
    desc: "End-to-end components for scalable IoT platforms with device-agnostic data ingestion, analytics and management."
  },
  {
    icon: <AiOutlineDatabase fill="white" />, // Database icon for “more components”
    gradient: "linear-gradient(135deg, #F6D365, #ff5e31ff)",
    title: "More Components",
    desc: "Additional carrier-grade tools for analytics, onboarding, and platform management."
  }
];


const Platform = () => {
  return (
    <div className="platform-section">
      <h2 className="platform-heading">Platform Enablement & Analytics</h2>

      <div className="platform-grid">
        {platformData.map((item, index) => (
          <div className="platform-box" key={index}>
            <div className="icon-bg" style={{ background: item.gradient }}>
              <div className="platform-icon">{item.icon}</div>
            </div>

            <h3 className="platform-title">{item.title}</h3>
            <p className="platform-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platform;
