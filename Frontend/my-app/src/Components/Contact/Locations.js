import React from "react";
import "../../Style/Contact/locations.css";

const Locations = () => {
  return (
    <section className="ft-locations">
      <h2 className="ft-locations__title">Our Locations</h2>

      <div className="ft-locations__cards">
        {/* === Pakistan Office === */}
        <div className="ft-locations__card">
       
          <div className="ft-locations__info">
            <div className="ft-locations__item">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h3>Office Address</h3>
                <p>
                  Arfa Software Technology Park <br />
                  Level # 8, Room-7, Ferozepur Road <br />
                  Lahore, Punjab, Pakistan 54000
                </p>
              </div>
            </div>

            <div className="ft-locations__item">
              <i className="fa-solid fa-phone"></i>
              <div>
                <h4>Phone Numbers</h4>
                <p>+92 331 9097707</p>
                <p>+92 322 8479709</p>
              </div>
            </div>

            <div className="ft-locations__item">
              <i className="fa-solid fa-clock"></i>
              <div>
                <h4>Office Hours</h4>
                <p>Mon – Fri: 11:00 AM – 9:00 PM</p>
                <p>Sat: 11:00 AM – 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* === Sales & Technical Support === */}
        <div className="ft-locations__card">
          <h3>Sales & Technical Support</h3>
          <div className="ft-locations__info">
            <div className="ft-locations__item">
              <i className="fa-solid fa-envelope"></i>
              <div>
                <h4>Email Us</h4>
                <p>help@fooran.com</p>
                <p>ahmad@fooran.com</p>
              </div>
            </div>

            <div className="ft-locations__item">
              <i className="fa-solid fa-headset"></i>
              <div>
                <h4>Software Sales & Product Demos</h4>
                <p>
                  Get in touch for project consultations, <br />
                  enterprise licensing, or custom software solutions.
                </p>
              </div>
            </div>

            <div className="ft-locations__item">
              <i className="fa-solid fa-wrench"></i>
              <div>
                <h4>Technical Assistance</h4>
                <p>
                  Our engineering team provides remote support <br />
                  for deployments, integrations, and maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Map Section === */}
      <div className="ft-map__container">
        <iframe
          title="Arfa Karim Tower Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13613.640486056736!2d74.3230569!3d31.4822086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904d090b08041%3A0x7b33f420d22a3c7e!2sArfa%20Software%20Technology%20Park!5e0!3m2!1sen!2s!4v1709876543210!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Locations;
