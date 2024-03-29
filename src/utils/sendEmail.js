import { createTransport } from 'nodemailer';
import smtpTransport from'nodemailer-smtp-transport'

const transporter = createTransport(
  smtpTransport({
    service: "smtp.resend.com",
    host: "smtp.resend.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.RESEND_USER,
        pass: process.env.RESEND_API_KEY,
    },
  })
);


transporter.verify(function (error, success) {
    if (error) {
        console.log("Verify error",error);
    } else {
        console.log("Server is ready to take our messages",success);
    }
});

module.exports = {transporter};