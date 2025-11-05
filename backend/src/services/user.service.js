
const TokenRepository = require('../repositories/token.repository');
const UserRepository = require('../repositories/user.repository');
const authHelper = require('../utils/authHelper');

class UserService {
  async createUser(data) {
    return await UserRepository.createUser(data);
  }

  async findByUsernameOrPhone(username, phone) {
    return await UserRepository.findByUsernameOrPhone(username, phone);
  }

  async findByPhone(phone) {
    return await UserRepository.findByPhone(phone);
  }

  async markPhoneVerified(userId) {
    return await UserRepository.updateUser(userId, {
      phoneVerifiedAt: new Date()
    });
  }

  async markEmailVerified(userId, email) {
    const user = await UserRepository.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    if (user.email !== email) {
      throw new Error('Email mismatch - cannot verify this email');
    }

    // nếu đã verify rồi thì bỏ qua
    if (user.emailVerifiedAt) {
      return user;
    }

    return await UserRepository.verifyEmail(userId);
  }

  async getById(userId) {
    return await UserRepository.findById(userId);
  }

  async resetPassword(userId, newPassword) {
    const user = await UserRepository.findById(userId);

    if (!user) throw new Error('User not found');

    const passwordHash = await authHelper.hashPassword(newPassword);

    return await UserRepository.updateUser(userId, { passwordHash });
  }

}


module.exports = new UserService();