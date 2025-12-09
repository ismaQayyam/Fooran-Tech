import { pool } from "../config/db.js";

export async function submitContactForm(req, res) {
  try {
    const { name, email, phone, message, allowContact } = req.body;

    const query = `
      INSERT INTO contact_forms (name, email, phone, message, allow_contact)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const values = [
      name,
      email,
      phone || null,
      message,
      allowContact || false,
    ];

    const result = await pool.query(query, values);

    return res.status(201).json({
      success: true,
      message: "Form submitted successfully!",
      form: result.rows[0],
    });

  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
}
