import React, { useState } from "react";
import "../Style/TalkUsModel.css";
import GlobalButton from "./GlobalButton";

const TalkUsModel = ({ isOpen, onClose }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    allowContact: false,
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // Early return if modal is closed
  if (!isOpen) return null;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:1793/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMsg("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          allowContact: false,
        });
      } else {
        setMsg(data.error || "Something went wrong.");
      }
    } catch (err) {
      setMsg("Server error. Try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="talkus-overlay" onClick={onClose}>
      <div className="talkus-modal" onClick={(e) => e.stopPropagation()}>
        <button className="talkus-close" onClick={onClose}>×</button>

        <h1 className="talkus-title">Edge Ahead with Fooran Technologies</h1>
        <p className="talkus-sub">
          Discover the power of Fooran Technologies. Share your vision, and we’ll turn it into reality!
        </p>

        <form className="talkus-form" onSubmit={handleSubmit}>
          <div className="talkus-row">
            <input
              type="text"
              name="name"
              className="talkus-input"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="talkus-input"
              placeholder="Email ID*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              className="talkus-input"
              placeholder="+92"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            className="talkus-textarea"
            placeholder="Tell us how we can help*"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <label className="talkus-checkbox">
            <input
              type="checkbox"
              name="allowContact"
              checked={formData.allowContact}
              onChange={handleChange}
            />
            It’s okay to call or email me!
          </label>

          <GlobalButton
            type="submit"
            className="global-button"
            style={{
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "30px",
              height: "39px",
            }}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Start the Conversation"}
          </GlobalButton>

          {msg && <p className="form-message">{msg}</p>}
        </form>
      </div>
    </div>
  );
};

export default TalkUsModel;
