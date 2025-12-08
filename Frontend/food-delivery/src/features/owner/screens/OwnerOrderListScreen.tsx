import React, { useState } from 'react';
import OrderTable from '../components/OrderTable';
import type { Order, OrderStatus } from '../../../types/order';
import { ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

// Mock Data: Giả lập danh sách đơn hàng
const MOCK_ORDERS: Order[] = [
    { id: '1001', customerName: 'Nguyễn Văn A', items: '1x Phở Bò, 2x Trà đá', totalAmount: 65000, status: 'pending', createdAt: '10:30', paymentMethod: 'COD' },
    { id: '1002', customerName: 'Trần Thị B', items: '2x Cơm Rang Dưa Bò', totalAmount: 120000, status: 'cooking', createdAt: '10:15', paymentMethod: 'Banking' },
    { id: '1003', customerName: 'Lê Văn C', items: '1x Bún Chả', totalAmount: 45000, status: 'delivering', createdAt: '09:45', paymentMethod: 'COD' },
    { id: '1004', customerName: 'Phạm Thị D', items: '5x Trà Sữa Full Topping', totalAmount: 250000, status: 'completed', createdAt: '09:00', paymentMethod: 'Banking' },
];

const OwnerOrderListScreen: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);

    // Hàm xử lý cập nhật trạng thái
    const handleUpdateStatus = (id: string, newStatus: OrderStatus) => {
        // Cập nhật state
        const updatedOrders = orders.map(order =>
            order.id === id ? { ...order, status: newStatus } : order
        );
        setOrders(updatedOrders);

        // Logic phụ: Thông báo (sau này thay bằng API)
        if (newStatus === 'confirmed') alert(`Đã nhận đơn #${id}!`);
        if (newStatus === 'cancelled') alert(`Đã từ chối đơn #${id}.`);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                            <ClipboardDocumentListIcon className="w-8 h-8 mr-3 text-green-600" />
                            Quản lý Đơn hàng
                        </h1>
                        <p className="text-gray-500 mt-1 ml-11">Theo dõi và xử lý đơn hàng từ khách.</p>
                    </div>

                    {/* Thống kê nhanh */}
                    <div className="flex space-x-4">
                        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                            <span className="text-sm text-gray-500">Chờ xử lý</span>
                            <p className="text-xl font-bold text-yellow-600">
                                {orders.filter(o => o.status === 'pending').length}
                            </p>
                        </div>
                        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                            <span className="text-sm text-gray-500">Đang nấu</span>
                            <p className="text-xl font-bold text-blue-600">
                                {orders.filter(o => o.status === 'cooking').length}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bảng đơn hàng */}
                <OrderTable orders={orders} onUpdateStatus={handleUpdateStatus} />
            </div>
        </div>
    );
};

export default OwnerOrderListScreen;