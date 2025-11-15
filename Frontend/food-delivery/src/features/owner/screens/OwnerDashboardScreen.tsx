import React from 'react';
import OrderList from '../components/OrderList';
import OwnerDashboardLayout from '../OwnerDashboardLayout';
import { ChartBarIcon } from '@heroicons/react/24/outline';

const DashboardStats: React.FC = () => (
    <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-green-500 text-white p-4 rounded-xl shadow-lg">
            <p className="text-sm opacity-90">Tổng Doanh Thu (Hôm Nay)</p>
            <p className="text-2xl font-bold mt-1">1,500,000₫</p>
        </div>
        <div className="bg-blue-500 text-white p-4 rounded-xl shadow-lg">
            <p className="text-sm opacity-90">Đơn Hàng Mới</p>
            <p className="text-2xl font-bold mt-1">5 đơn</p>
        </div>
    </div>
);

const OwnerDashboardScreen: React.FC = () => {
    return (
        <OwnerDashboardLayout>
            <div className="p-4 pt-8 max-w-4xl mx-auto pb-20 md:pb-4">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-6 flex items-center">
                    <ChartBarIcon className="w-8 h-8 mr-2 text-orange-500" />
                    Bảng Điều Khiển Nhà Hàng
                </h1>

                <DashboardStats />
                <OrderList />
            </div>
        </OwnerDashboardLayout>
    );
};

export default OwnerDashboardScreen;

