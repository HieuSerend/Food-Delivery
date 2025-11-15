import React, { type ReactNode } from 'react';

interface OwnerDashboardLayoutProps {
    children: ReactNode;
}

const OwnerDashboardLayout: React.FC<OwnerDashboardLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar Placeholder */}
            <aside className="w-64 bg-white shadow-xl p-4 hidden md:block">
                <h3 className="text-lg font-bold">Sidebar Quản lý</h3>
            </aside>

            {/* Content area */}
            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    );
};

export default OwnerDashboardLayout;