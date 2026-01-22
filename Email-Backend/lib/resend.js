import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data) => {
  const { name, email, phone, message } = data;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "sahilkhandekar.mga@gmail.com",
      subject: "MGA Foundation | Contact Form Submission",
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}

Message:
${message}
      `.trim(),

      // HTML version
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #1a1a1a;">New Contact Form Submission</h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px; font-weight: bold;">Name</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Email</td>
              <td style="padding: 8px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Phone</td>
              <td style="padding: 8px;">${phone || "N/A"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <h3 style="margin-bottom: 8px;">Message</h3>
            <p style="white-space: pre-wrap; background: #f7f7f7; padding: 12px; border-radius: 4px;">
              ${message}
            </p>
          </div>

          <hr style="margin: 24px 0;" />

          <p style="font-size: 12px; color: #777;">
            This email was generated automatically from the MGA Foundation contact form.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
