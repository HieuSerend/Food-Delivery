const nodemailer = require('nodemailer');
const tokenConfig = require('../config/token.config');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  }
});

class EmailService {
  
  /**
 * Link format: {APP_URL}/verify?token=...&uid=...
 */
  async sendVerifyEmail(user, token) {
    const feBaseUrl = process.env.APP_URL;
    const verifyUrl = `${feBaseUrl.replace(/\/+$/, '')}/verify?token=${encodeURIComponent(token)}&uid=${user._id}`;

    const ttlMinutes = tokenConfig.convertExpiryToMinutes(tokenConfig.getTokenConfig().EMAIL_VERIFY.expiry);
    const subject = 'Verify your email';

    const text = [
      `Hi ${user.firstName || user.username || 'you'},`,
      `Click the following link to verify your email (expires in ${ttlMinutes} minutes):`,
      verifyUrl
    ].join('\n\n');

    const html = `
    <p>Hi ${user.name || user.username || 'you'},</p>
      <p>
        Click the following link to verify your email 
        (expires in <b>${ttlMinutes} minutes</b>):
      </p>
      <p>
        <a href="${verifyUrl}" target="_blank">${verifyUrl}</a>
      </p>
      <hr/>
      <p>If you did not request this, please ignore this email.</p>
    `;

    return transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: user.email,
      subject,
      text, 
      html
    });
  }
}

module.exports = new EmailService();

