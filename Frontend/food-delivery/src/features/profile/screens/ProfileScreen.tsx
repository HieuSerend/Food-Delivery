import React from 'react';
import { type UserProfile } from '../../../types/user';
import AppLayout from '../../../layouts/AppLayout';

const MOCK_USER: UserProfile = {
    id: 'u123', username: 'foodlover99', email: 'khachhang@example.com', fullName: 'Nguyễn Văn A',
    phone: '0901234567', role: 'customer', avatarUrl: 'https://i.pravatar.cc/150?img=1',
};

const ProfileScreen: React.FC = () => {
    return (
        <AppLayout>
            <div className="p-8 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
                <h1 className="text-2xl font-bold text-gray-900">Thông tin cá nhân</h1>
                <div className="flex items-center space-x-4">
                    <img className="w-16 h-16 rounded-full" src={MOCK_USER.avatarUrl} alt="Avatar" />
                    <div>
                        <p className="text-xl font-medium text-gray-800">{MOCK_USER.fullName}</p>
                        <p className="text-gray-500">{MOCK_USER.email}</p>
                    </div>
                </div>
                <button className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Đăng Xuất</button>
            </div>
        </AppLayout>
    );
};

export default ProfileScreen;

