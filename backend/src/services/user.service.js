
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

  async markEmailVerified(userId) {
    return await UserRepository.updateUser(userId, {
      emailVerifiedAt: new Date()
    });
  }

  async getById(userId) {
    return await UserRepository.findById(userId);
  }
}


module.exports = new UserService();