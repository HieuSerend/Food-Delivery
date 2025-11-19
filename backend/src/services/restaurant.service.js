const RestaurantRepository = require('../repositories/restaurant.repository');

function isWithinBusinessHours(current, open, close) {
  // current, open, close đều dạng "HH:MM"

  const toMinutes = (timeStr) => {
    const [h, m] = timeStr.split(":").map(Number);
    return h * 60 + m;
  };

  const cur = toMinutes(current);
  const op = toMinutes(open);
  const cl = toMinutes(close);

  // Trường hợp quán mở qua đêm (ví dụ 20:00 → 02:00)
  if (cl < op) {
    return cur >= op || cur < cl;
  }

  return cur >= op && cur < cl;
}

class RestaurantService {
  
  // get restaurant info 
  async getRestaurantInfo(restaurantId) {
    return await RestaurantRepository.getById(restaurantId);
  }

  async checkOpenTime(restaurant) {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5); // HH:MM

    return isWithinBusinessHours(currentTime, restaurant.opening_time, restaurant.closing_time);
  }

  
}

module.exports = new RestaurantService();