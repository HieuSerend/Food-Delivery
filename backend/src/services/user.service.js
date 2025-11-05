
const TokenRepository = require('../repositories/token.repository');
const UserRepository = require('../repositories/user.repository');
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

}


module.exports = new UserService();