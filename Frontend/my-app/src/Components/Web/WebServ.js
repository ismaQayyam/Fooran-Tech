import React from 'react'
import SectionBlock from "../../Components/SectionBlock";

const WebServ = () => {
return (
  <div className="services-root">

    {/* Section 1 */}
    <SectionBlock
      theme="light"
      title="Crafting Modern Web Experiences"
      cards={[
        {
          heading: "Custom Web Development",
          text:
            "We build high-performance, scalable, and secure web applications tailored to your business needs. From interactive dashboards to enterprise-grade systems, our solutions deliver speed, reliability, and a seamless user experience.",
        },
        {
          heading: "Frontend Engineering",
          text:
            "Our team specializes in creating responsive and visually stunning interfaces using React, Next.js, and modern UI frameworks. We ensure smooth navigation, fast load times, and pixel-perfect designs across all devices.",
        },
      ]}
    />

    {/* Section 2 */}
    <SectionBlock
      theme="pink"
      title="Web Development Services"
      cards={[
        {
          heading: "Backend APIs & Architecture",
          text:
            "We build robust backend systems powered by Node.js and Express. Our APIs are secure, scalable, and optimized for real-time data, ensuring your platform can handle both growth and high-traffic workloads effortlessly.",
        },
        {
          heading: "Full-Stack Solutions",
          text:
            "From database design to frontend deployment, we deliver complete full-stack web solutions. Whether you're building an admin portal, SaaS product, or data-driven application, we ensure seamless end-to-end integration.",
        },
      ]}
    />

  </div>
)

}

export default WebServ
