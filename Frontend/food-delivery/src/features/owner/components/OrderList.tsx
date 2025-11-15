import React, { useState } from 'react';
import { type Order, type OrderStatus } from '../../../types/food';
import OrderCard from './OrderCard';
import { ListBulletIcon } from '@heroicons/react/24/outline';

const MOCK_ORDERS: Order[] = [
    {
        id: 'o1001', customerName: 'NV A', customerAddress: '123 XYZ', totalAmount: 155000, status: 'PENDING',
        createdAt: new Date(Date.now() - 5 * 60000).toISOString(),
        items: [{ id: 'i1', foodName: 'Phở Cuốn', quantity: 2, price: 60000 }],
    },
    {
        id: 'o1002', customerName: 'TT B', customerAddress: '456 Lê Lợi', totalAmount: 90000, status: 'PREPARING',
        createdAt: new Date(Date.now() - 15 * 60000).toISOString(),
        items: [{ id: 'i3', foodName: 'Bánh Mì Chảo', quantity: 1, price: 90000 }],
    },
];

const OrderList: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);

    const handleUpdateStatus = (orderId: string, newStatus: OrderStatus) => {
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order.id === orderId ? { ...order, status: newStatus } : order
            )
        );
    };

    const pendingOrders = orders.filter(o => o.status === 'PENDING' || o.status === 'PREPARING');

    return (
        <div className="pt-4">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-orange-600">
                <ListBulletIcon className="w-6 h-6 mr-2" />
                Đơn hàng Đang chờ ({pendingOrders.length})
            </h2>
            <div className="space-y-4 mb-10">
                {pendingOrders.map(order => (
                    <OrderCard key={order.id} order={order} onUpdateStatus={handleUpdateStatus} />
                ))}
            </div>
        </div>
    );
};

export default OrderList;