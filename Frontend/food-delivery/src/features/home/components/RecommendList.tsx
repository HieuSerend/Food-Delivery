import React from 'react';
import { type Restaurant } from '../../../types/food';
import RestaurantCard from './RestaurantCard';
import { FireIcon } from '@heroicons/react/24/solid';

const MOCK_RESTAURANTS: Restaurant[] = [
  { id: 1, name: 'Phở Cuốn Hưng Bền', bannerUrl: 'https://picsum.photos/300/160?random=1', rating: 4.8, deliveryTime: 25, deliveryFee: 15000, address: 'Quận 1, TP.HCM', tags: ['Món Việt', 'Phở'] },
  { id: 2, name: 'Bánh Mì Chảo 30 Phút', bannerUrl: 'https://picsum.photos/300/160?random=2', rating: 4.5, deliveryTime: 35, deliveryFee: 0, address: 'Hà Nội', tags: ['Đồ ăn nhanh'] },
  { id: 3, name: 'Trà Sữa KOI', bannerUrl: 'https://picsum.photos/300/160?random=3', rating: 4.9, deliveryTime: 15, deliveryFee: 10000, address: 'Đà Nẵng', tags: ['Đồ uống', 'Trà sữa'] },
];

const RecommendList: React.FC = () => {
  return (
    <section className="mt-6">
      <div className="flex overflow-x-auto space-x-4 pb-4 px-4 scrollbar-hide">
        {MOCK_RESTAURANTS.map((restaurant) => (
          <div key={restaurant.id} className="flex-shrink-0 w-64">
            <RestaurantCard restaurant={restaurant} />
          </div>
        ))}
        <div className="flex-shrink-0 w-4 h-1"></div>
      </div>
    </section>
  );
};

export default RecommendList;