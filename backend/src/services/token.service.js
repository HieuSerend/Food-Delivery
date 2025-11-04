const TokenRepository = require('../repositories/token.repository');
const authHelper = require('../utils/authHelper');
const tokenConfig = require('../config/token.config');

class TokenService {
  async createVerifyPhoneToken(userId, phone) {
    // tạo otp 6 số
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // TTL: 2 phút
    const expiresAt = new Date(Date.now() + 2 * 60 * 1000);

    await TokenRepository.createToken({
      userId,
      type: 'verify_phone',
      deliveryMethod: 'sms',
      code: otp,
      expiresAt
    });

    return otp;
  }

  async verifyPhoneOTP(userId, otp) {
    const token = await TokenRepository.consumeToken(userId, otp);
    if (!token) throw new Error('Invalid or expired OTP!');
    return token;
  }

  async createEmailVerificationToken(userId, email) {
    const token = authHelper.generateEmailVerificationToken(userId, email);

    await TokenRepository.createToken({ 
      userId,
      type: 'verify_email',
      tokenHash: token,
      expiresAt: tokenConfig.calculateExpiresAt(tokenConfig.getTokenConfig().EMAIL_VERIFY.expiry)
    });

    return token;
  }
}




module.exports = new TokenService();