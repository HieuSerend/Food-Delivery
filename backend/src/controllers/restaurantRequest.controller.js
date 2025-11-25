const restaurantRequestService = require('../services/restaurantRequest.service');
const ERR = require('../constants/errorCodes');
const ERR_RESPONSE = require('../utils/httpErrors');
const SUCCESS_RESPONSE = require('../utils/successResponse');

class RestaurantRequestController {
  async submit(req, res, next) {
    try {
      const userId = req.userId;
      const data = req.body;

      if (!data) {
        throw new ERR_RESPONSE.BadRequestError("Missing Required Data");
      }

      const result = await restaurantRequestService.submitRequest(userId, data);
      return SUCCESS_RESPONSE.success(res, "Send Request Successfully", result); 
    } catch (err) {
      next(err);
    }
  }

  async listPending(req, res, next) {
    try {
      const data = await restaurantRequestService.getPendingRequests();
      
      return SUCCESS_RESPONSE.success(res, "Get pending request successfully", { data });
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const { requestId } = req.params;
      if (!requestId) throw new ERR_RESPONSE.BadRequestError("Missing request id");

      const request = await restaurantRequestService.getById(requestId);

      return SUCCESS_RESPONSE.success(res, "Get Request Successfully", { request });
    } catch (err) {
      next(err);
    }
  }

  async approve(req, res, next) {
    try {
      const { requestId } = req.params;
      if (!requestId) throw new ERR_RESPONSE.BadRequestError("Missing request id");

      const result = await restaurantRequestService.approveRequest(requestId);

      return SUCCESS_RESPONSE.success(res, "Approve this request successfully", { result });
    } catch (err) {
      next(err);
    }
  }

  async reject(req, res, next) {
    try {
      const { requestId } = req.params;
      const { reason } = req.body;
      if (!requestId) throw new ERR_RESPONSE.BadRequestError("Missing request id");

      const result = await restaurantRequestService.rejectRequest(requestId, reason);
      return SUCCESS_RESPONSE.success(res, "Reject this request successfully", { result });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new RestaurantRequestController();