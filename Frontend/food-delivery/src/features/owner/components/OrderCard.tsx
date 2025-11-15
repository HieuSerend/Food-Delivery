// src/features/owner/components/OrderCard.tsx
import React from 'react';
import { type Order, type OrderItem, type OrderStatus } from '../../../types/food';
import { MapPinIcon, CurrencyDollarIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid';

interface OrderCardProps {
    order: Order;
    onUpdateStatus: (orderId: string, newStatus: OrderStatus) => void;
}

const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
};

const getStatusClasses = (status: Order['status']) => {
    switch (status) {
        case 'PENDING': return 'bg-yellow-100 text-yellow-800';
        case 'PREPARING': return 'bg-blue-100 text-blue-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};

const OrderCard: React.FC<OrderCardProps> = ({ order, onUpdateStatus }) => {
    return (
        <div className="bg-white border rounded-xl shadow-lg p-5 mb-5">
            <div className="flex justify-between items-start border-b pb-3 mb-3">
                <h3 className="text-xl font-bold">Đơn hàng #{order.id.slice(-4)}</h3>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusClasses(order.status)}`}>
                    {order.status}
                </span>
            </div>

            <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-700 text-sm">
                    <ClockIcon className="w-4 h-4 mr-2 text-orange-500" />
                    Thời gian đặt: <span className="font-semibold ml-1">{formatTime(order.createdAt)}</span>
                </div>
                <div className="flex items-center text-lg font-bold text-green-700">
                    <CurrencyDollarIcon className="w-5 h-5 mr-2" />
                    Tổng tiền: {order.totalAmount.toLocaleString('vi-VN')}₫
                </div>
            </div>

            {order.status === 'PENDING' && (
                <button
                    onClick={() => onUpdateStatus(order.id, 'PREPARING')}
                    className="w-full flex items-center justify-center p-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-colors"
                >
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                    Xác nhận
                </button>
            )}
        </div>
    );
};

export default OrderCard;