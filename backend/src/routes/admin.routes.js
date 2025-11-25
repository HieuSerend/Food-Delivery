const router = require('express').Router();

const restaurantRequestController = require('../controllers/restaurantRequest.controller');

// get pending request
router.get("/restaurant-requests", restaurantRequestController.listPending);

router.get("/restaurant-requests/:requestId", restaurantRequestController.getById);

router.patch("/restaurant-requests/:requestId/approve", restaurantRequestController.approve);

router.patch("/restaurant-requests/:requestId/reject", restaurantRequestController.reject);


module.exports = router;