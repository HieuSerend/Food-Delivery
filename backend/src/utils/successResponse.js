module.exports = {
  success(res, message = '', data = { }, status = 200) {
    return res.status(status).json({
      success: true,
      message,
      data,
    })
  },

  created(res, message = 'Resource created successfully.', data) {
    if (!data) {
      console.warn("201 Created should return data of the new resource.");
    }
    return res.status(201).json({
      success: true,
      message,
      data: data || {},
    });
  },

  noContent(res) {
    // Theo chuẩn HTTP, 204 KHÔNG có body, chỉ có Header
    return res.status(204).end();
  },

  accepted(res, actionCode, message, data = {}) {
    return res.status(202).json({
      success: true,
      status: actionCode, // Sử dụng 'status' để chỉ trạng thái nghiệp vụ
      message,
      data,
    });
  }
}