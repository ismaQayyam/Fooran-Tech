import React from 'react'

import SectionBlock from "../../Components/SectionBlock";
const IotServices = () => {
  return (
  <div className="services-root">

      {/* Section 1 */}
      <SectionBlock
        theme="light"
        title="Connecting the IoT World"
        cards={[
          {
            heading: "IoT Device Integration",
            text:
              "We help you seamlessly connect your IoT devices to cloud platforms, ensuring reliable data transfer and efficient device management. From smart sensors to industrial IoT devices, we make integration simple and secure.",
          },
          {
            heading: "IoT Data Analytics",
            text:
              "Our team enables you to unlock insights from your IoT ecosystem. By analyzing sensor data in real-time, we help optimize operations, predict maintenance, and enhance decision-making across devices and systems.",
          },
        ]}
      />

      {/* Section 2 */}
      <SectionBlock
        theme="pink"
        title="IoT Services"
        cards={[
          {
            heading: "Smart IoT Solutions",
            text:
              "From concept to deployment, we design IoT solutions tailored to your needs. Our expertise includes sensor networks, edge computing, real-time monitoring, and cloud integration to build scalable smart systems.",
          },
          {
            heading: "IoT AI & Automation",
            text:
              "We integrate AI into IoT devices to enable predictive analytics, automation, and intelligent decision-making at the edge. This ensures low-latency responses, energy-efficient operation, and enhanced device performance.",
          },
        ]}
      />

    </div>

  )
}

export default IotServices
