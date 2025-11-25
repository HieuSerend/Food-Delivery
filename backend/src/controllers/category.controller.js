const categoryService = require('../services/category.service');
const ERR = require('../constants/errorCodes');
const ERR_RESPONSE = require('../utils/httpErrors');
const SUCCESS_RESPONSE = require('../utils/successResponse'); 


class CategoryController {
  async createCategory(req, res, next) {
    try {
      const { name, imageUrl, description } = req.body;

      if (!name) {
        throw new ERR_RESPONSE.BadRequestError("Require name to create category");
      }

      const category = await categoryService.createCategory({ name, imageUrl, description });

      return SUCCESS_RESPONSE.success(res, "Create new category successfully", category);
    } catch (err) {
      next(err);
    }
  }

  async getAllCategories(req, res, next) {
    try {
      const { page, limit } = req.query;

      const categories = await categoryService.getAllCategories({ page, limit });

      return SUCCESS_RESPONSE.success(res, "Get successfully", categories);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const { categoryId } = req.params;

      if (!categoryId) throw new ERR_RESPONSE.BadRequestError("Missing category id");

      const category = await categoryService.getById(categoryId);

      return SUCCESS_RESPONSE.success(res, "Get successfully", category);
    } catch (err) {
      next(err);
    }
  }

  async updateCategory(req, res, next) {
    try {
      const { categoryId } = req.params;

      if (!categoryId) throw new ERR_RESPONSE.BadRequestError("Missing category id");

      const data = req.body;

      if (!data || Object.keys(data).length === 0) {
        throw new ERR_RESPONSE.BadRequestError("No data provided");
      }

      const updated = await categoryService.update(categoryId, data);

      return SUCCESS_RESPONSE.success(res, "Update category successfully", updated);
    } catch (err) {
      next(err);
    }
  }

  async deactiveCategory(req, res, next) {
    try {
      const { categoryId } = req.params;

      if (!categoryId) throw new ERR_RESPONSE.BadRequestError("Missing category id");

      const updated = await categoryService.deactive(categoryId);

      return SUCCESS_RESPONSE.success(res, "Deactive successfully", updated);
    } catch (err) {
      next(err);
    }
  }

  async activeCategory(req, res, next) {
    try {
      const { categoryId } = req.params;

      if (!categoryId) throw new ERR_RESPONSE.BadRequestError("Missing category id");

      const updated = await categoryService.active(categoryId);

      return SUCCESS_RESPONSE.success(res, "Active successfully", updated);
    } catch (err) {
      next(err);
    }
  }

  async deleteCategory(req, res, next) {
    try {
      const { categoryId } = req.params;

      if (!categoryId) throw new ERR_RESPONSE.BadRequestError("Missing category id");

      await categoryService.deleteCategory(categoryId);

      return SUCCESS_RESPONSE.accepted(res, "Delete successfully");
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new CategoryController();