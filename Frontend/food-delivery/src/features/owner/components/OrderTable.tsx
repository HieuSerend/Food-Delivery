import React from 'react';
import type { Order, OrderStatus } from '../../../types/order';
import AcceptRejectButtons from './AcceptRejectButtons';
import StatusUpdateControls from './StatusUpdateControls';

interface Props {
    orders: Order[];
    onUpdateStatus: (id: string, status: OrderStatus) => void;
}

const OrderTable: React.FC<Props> = ({ orders, onUpdateStatus }) => {
    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
                <thead className="bg-gray-50 text-left font-semibold text-gray-900">
                    <tr>
                        <th className="px-4 py-3">Mã đơn</th>
                        <th className="px-4 py-3">Khách hàng</th>
                        <th className="px-4 py-3">Món ăn</th>
                        <th className="px-4 py-3">Tổng tiền</th>
                        <th className="px-4 py-3">Thanh toán</th>
                        <th className="px-4 py-3">Hành động / Trạng thái</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {orders.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-50 transition">
                            <td className="px-4 py-3 font-medium text-gray-900">
                                #{order.id}
                                <br />
                                <span className="text-xs text-gray-500 font-normal">{order.createdAt}</span>
                            </td>
                            <td className="px-4 py-3 text-gray-700">{order.customerName}</td>
                            <td className="px-4 py-3 text-gray-600 max-w-xs truncate" title={order.items}>
                                {order.items}
                            </td>
                            <td className="px-4 py-3 font-bold text-gray-900">
                                {order.totalAmount.toLocaleString()}đ
                            </td>
                            <td className="px-4 py-3 text-gray-500">
                                <span className="inline-block px-2 py-0.5 rounded text-xs bg-gray-100 border border-gray-200">
                                    {order.paymentMethod}
                                </span>
                            </td>
                            <td className="px-4 py-3">
                                {order.status === 'pending' ? (
                                    // Nếu là Pending -> Hiện nút Nhận/Từ chối
                                    <AcceptRejectButtons
                                        onAccept={() => onUpdateStatus(order.id, 'confirmed')}
                                        onReject={() => onUpdateStatus(order.id, 'cancelled')}
                                    />
                                ) : (
                                    // Nếu đã nhận -> Hiện Dropdown chuyển trạng thái
                                    <StatusUpdateControls
                                        currentStatus={order.status}
                                        onChangeStatus={(newStatus) => onUpdateStatus(order.id, newStatus)}
                                    />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {orders.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                    Chưa có đơn hàng nào.
                </div>
            )}
        </div>
    );
};

export default OrderTable;