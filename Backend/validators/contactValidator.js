export function validateContactForm(req, res, next) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Name, Email, and Message are required.",
    });
  }

  next();
}
