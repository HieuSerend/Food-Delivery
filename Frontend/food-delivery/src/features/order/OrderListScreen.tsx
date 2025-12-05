<<<<<<< HEAD
import type React from 'react'
import { useState, useMemo } from 'react'
import AppLayout from '../../layouts/AppLayout'
import OrderItem from './components/OrderItem'
import { mockOrders } from './mockData'
import type { OrderStatus } from '../../types/order'

type Status = 'all' | 'delivering' | 'completed' | 'canceled' | 'pending' | 'confirmed'

const OrderListScreen: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [status, setStatus] = useState<Status>('all')
  const [page, setPage] = useState(1)
  const pageSize = 10

  // Filter orders based on status
  const filteredOrders = useMemo(() => {
    if (status === 'all') return mockOrders
    return mockOrders.filter((o) => o.status === (status as OrderStatus))
  }, [status])

  const total = filteredOrders.length
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const orders = filteredOrders.slice((page - 1) * pageSize, page * pageSize)

  const handleStatusChange = (newStatus: Status) => {
    setStatus(newStatus)
    setPage(1)
  }

  return (
    <AppLayout>
      <div className={`${className} bg-gray-50 min-h-screen py-4`}>
        <div className="flex justify-center">
          <div className="w-full max-w-7xl px-4">
            {/* Filter Tabs */}
            <div className="flex gap-1 bg-white rounded-lg shadow-sm p-4 mb-6 border-b-2 border-gray-200 overflow-x-auto">
              <button
                className={`px-4 py-2 rounded-md font-medium transition whitespace-nowrap ${
                  status === 'all'
                    ? 'bg-emerald-100 text-emerald-600 border-b-2 border-emerald-600'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
                onClick={() => handleStatusChange('all')}
              >
                Tất cả
              </button>
              <button
                className={`px-4 py-2 rounded-md font-medium transition whitespace-nowrap ${
                  status === 'pending'
                    ? 'bg-emerald-100 text-emerald-600 border-b-2 border-emerald-600'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
                onClick={() => handleStatusChange('pending')}
              >
                Chờ xác nhận
              </button>
              <button
                className={`px-4 py-2 rounded-md font-medium transition whitespace-nowrap ${
                  status === 'delivering'
                    ? 'bg-emerald-100 text-emerald-600 border-b-2 border-emerald-600'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
                onClick={() => handleStatusChange('delivering')}
              >
                Đang vận chuyển
              </button>
              <button
                className={`px-4 py-2 rounded-md font-medium transition whitespace-nowrap ${
                  status === 'completed'
                    ? 'bg-emerald-100 text-emerald-600 border-b-2 border-emerald-600'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
                onClick={() => handleStatusChange('completed')}
              >
                Đã hoàn thành
              </button>
              <button
                className={`px-4 py-2 rounded-md font-medium transition whitespace-nowrap ${
                  status === 'canceled'
                    ? 'bg-emerald-100 text-emerald-600 border-b-2 border-emerald-600'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
                onClick={() => handleStatusChange('canceled')}
              >
                Đã hủy
              </button>
            </div>

            {/* Orders List */}
            {orders.length === 0 && (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <p className="text-gray-500">Không có đơn hàng nào</p>
              </div>
            )}
            {orders.length > 0 && (
              <div className="space-y-4">
                {orders.map((order) => (
                  <OrderItem key={order._id} order={order} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-6">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-3 py-2 rounded-md border border-gray-300 text-gray-600 disabled:opacity-50 hover:bg-gray-100"
                >
                  Trước
                </button>
                <span className="text-gray-600 text-sm">
                  Trang {page} / {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-3 py-2 rounded-md border border-gray-300 text-gray-600 disabled:opacity-50 hover:bg-gray-100"
                >
                  Tiếp
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default OrderListScreen
=======
import type React from "react";
import { useState } from "react";
import AppLayout from "../../layouts/AppLayout";

const OrderListScreen: React.FC<{className? : string}> = ({className = ''}) => {
    const [page, setPage] = useState("");

    return (
        <AppLayout>
            <div className={`${className} bg-color-gray-100 min-h-screen mt-4 p-4`}>
                <div className="flex justify-center">
                    <div className="flex flex-row w-full max-w-7xl justify-between items-center bg-white p-4 mb-4">
                        <button 
                            className={`p-2 hover:text-emerald-600 ${page === "all" ? "border-b-2 border-emerald-600 text-emerald-600" : ""}`}
                            onClick={() => setPage("all")}>
                            Tất cả
                        </button>
                        <button 
                            className={`p-2 hover:text-emerald-600 ${page === "shipping" ? "border-b-2 border-emerald-600 text-emerald-600" : ""}`}
                            onClick={() => setPage("shipping")}>
                            Đang vận chuyển
                        </button>
                        <button 
                            className={`p-2 hover:text-emerald-600 ${page === "completed" ? "border-b-2 border-emerald-600 text-emerald-600" : ""}`}
                            onClick={() => setPage("completed")}>
                            Đã hoàn thành
                        </button>
                        <button 
                            className={`p-2 hover:text-emerald-600 ${page === "canceled" ? "border-b-2 border-emerald-600 text-emerald-600" : ""}`}
                            onClick={() => setPage("canceled")}>
                            Đã hủy
                        </button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-full max-w-7xl justify-between items-center bg-white p-4 mb-4">
                        {page === "all" && <div>Hiển thị tất cả đơn hàng</div>}
                        {page === "shipping" && <div>Hiển thị đơn hàng đang vận chuyển</div>}
                        {page === "completed" && <div>Hiển thị đơn hàng đã hoàn thành</div>}
                        {page === "canceled" && <div>Hiển thị đơn hàng đã hủy</div>}
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default OrderListScreen;
>>>>>>> d7103587e57fc1540b0b86e25e554c6eba44da02
