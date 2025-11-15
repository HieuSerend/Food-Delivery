import React from 'react';
import RecommendList from './components/RecommendList';
import HeroSlider from './components/HeroSlider';
import AppLayout from '../../layouts/AppLayout';


const HomeScreen: React.FC = () => {
  return (
    <AppLayout>
      <div className="pt-4 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-6">
            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Tìm kiếm món ăn hoặc nhà hàng..."
                className="w-full py-3 pl-4 pr-4 border border-gray-300 rounded-xl"
              />
            </div>
          </header>

          <HeroSlider />

          <h2 className="text-2xl font-bold mt-8">Đề xuất hôm nay</h2>
          <RecommendList />

          <h2 className='text-2xl font-bold mt-8'>Nhà hàng Gần đây</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-48 bg-gray-200 rounded-lg border-2 border-gray-300 flex items-center justify-center text-gray-600 text-xs"
              >
                PLACEHOLDER {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HomeScreen;

