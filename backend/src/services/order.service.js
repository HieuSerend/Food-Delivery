const orderRepository = require('../repositories/order.repository');

const ERR_RESPONSE = require('../utils/httpErrors');
const ERR = require('../constants/errorCodes');
const menuItemService = require('./menuItem.service');
const restaurantService = require('./restaurant.service');

class OrderService {

  async createOrder(cart) {
    const userId = cart.userId;
    const restaurantId = cart.restaurantId;

    // Validate restaurant
    const restaurant = await restaurantService.getRestaurantInfo(restaurantId);
    if (!restaurant) {
      throw new ERR_RESPONSE.NotFoundError(
        "Restaurant not found",
        ERR.RESTAURANT_NOT_FOUND
      );
    }
  
    if (!restaurant.isAcceptingOrders) {
      throw new ERR_RESPONSE.UnprocessableEntityError(
        "Restaurant is not accepting orders at the moment",
        ERR.RESTAURANT_NOT_ACCEPTING_ORDERS
      );
    }

    if (!restaurantService.checkOpenTime(restaurant)) {
      throw new ERR_RESPONSE.UnprocessableEntityError(
        "Restaurant is currently closed (outside business hours)",
        ERR.RESTAURANT_OUTSIDE_BUSINESS_HOURS,
      )
    }

    // Validate menu price changed
    const priceErrors = [];
    for (const item of cart.items) {
      const freshMenuItem = await menuItemService.getMenuItemInfo(item.menuItemId);

      if (!freshMenuItem) {
        priceErrors.push({
          menuItemId: item.menuItemId,
          reason: 'Item not found'
        });
        continue;
      }

      if (freshMenuItem.price !== item.basePrice) {
        priceErrors.push({
          menuItemId: item.menuItemId,
          name: item.name,
          oldPrice: item.basePrice,
          newPrice: freshMenuItem.price,
        });
      }
    }

    if (priceErrors.length > 0) {
      throw new ERR_RESPONSE.ConflictError(
        "Price has been updated for some items",
        ERR.MENUITEM_PRICE_CHANGED,
        { items: priceErrors }
      );
    }

    // Calculate total price
    const totalFoodPrice = cart.items.reduce(
      (acc, item) => acc + item.finalPrice,
      0
    );

    const shippingFee = 0; // hiện tại chưa xử lí 

    // Build order items
    const orderItems = cart.items.map((item)=> ({
      menuItemId: item.menuItemId,
      name: item.name,
      imageUrl: item.imageUrl,
      quantity: item.qty,
      finalPrice: item.finalPrice,
      selectedOptions: item.selectedOptions,
    }));

    // Create order 
    const order = await orderRepository.create({
      userId,
      restaurantId,
      items: orderItems,
      totalFoodPrice,
      shippingFee,
      discountAmount: 0,
      status: "pending",
      note: "",
    });

    return order;
  }
}

module.exports = new OrderService();