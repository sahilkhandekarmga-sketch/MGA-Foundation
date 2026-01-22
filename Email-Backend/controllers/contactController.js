import { sendEmail } from "../lib/resend.js";
import Contact from "../models/contact.js";

export const contactController = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // send the email to the admin
    await sendEmail({
      name: `${firstName} ${lastName}`,
      email,
      phone,
      message,
    });

    // store the data in the database
    await Contact.create({
      name: `${firstName} ${lastName}`,
      email,
      phone,
      message,
    });

    res
      .status(200)
      .json({ message: "Contact form submitted successfully", success: true });
  } catch (error) {
    console.error("Error in contactController:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
