import React, { useState } from "react";
import "../../Style/Home/bottom.css";
import GlobalButton from "../../Components/GlobalButton";

const Bottom = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    allowContact: false,
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // Handle inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Submit Form
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
    <div className="bottom-section">
      <h1 className="bottom-title">
        <span className="highlight">Edge Ahead</span> with Fooran Technologies
      </h1>

      <p className="bottom-subtitle">
        Discover the power of innovation with Fooran Technologies. Share your vision,
        and we'll turn it into reality!
      </p>

      <form className="bottom-form" onSubmit={handleSubmit}>

        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email ID*"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="+92"
            className="form-input"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="message"
          placeholder="Tell us how we can help*"
          className="form-textarea"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <div className="form-checkbox">
          <input
            type="checkbox"
            id="contact-ok"
            name="allowContact"
            checked={formData.allowContact}
            onChange={handleChange}
          />
          <label htmlFor="contact-ok">It's okay to call or email me!</label>
        </div>

        <GlobalButton
          type="submit"
          size="md"
          fullWidth={true}
          style={{ width: "250px", borderRadius: "30px" }}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Start the Conversation"}
        </GlobalButton>

        {msg && <p className="form-message">{msg}</p>}
      </form>
    </div>
  );
};

export default Bottom;
