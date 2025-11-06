import React from 'react';
import AppLayout from '../../layouts/AppLayout';
import HeroSlider from './components/HeroSlider';
import RestaurantCardList from './components/RestaurantCardList';

const HomeScreen: React.FC = () => {
  return (
    <AppLayout>
        <HeroSlider />
        <div className="mt-8 text-left px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold">Recommended Restaurants List</h2>
            {/* Add recommended restaurant listings here */}
            <h2 className='text-2xl font-bold'> Restaurants card lists </h2>
            <RestaurantCardList />
        </div>
    </AppLayout>
  );
};

export default HomeScreen;