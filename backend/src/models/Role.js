const mongoose = require('mongoose');

const RoleEnum = ['admin', 'customer', 'restaurant_owner', 'brand_admin'];

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: RoleEnum,
    default: 'customer',
  },
  description: {
    type: String,
  },
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
