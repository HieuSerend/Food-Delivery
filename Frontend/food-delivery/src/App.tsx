// import React from 'react';
// import { AuthProvider } from './contexts/AuthContext';
// import AppRoutes from './routes/AppRoutes';

// function App() {
//   return (
//     <AuthProvider>
//       <AppRoutes />
//     </AuthProvider>
//   );
// }

// export default App;

// src/App.tsx
// src/App.tsx (CHẾ ĐỘ TEST: Cả Info Screen và Add Food)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import 2 màn hình cần test
import OwnerRestaurantInfoScreen from './features/owner/screens/OwnerRestaurantInfoScreen';
import AddFoodScreen from './features/owner/screens/AddFoodScreen';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Màn hình chính: Thông tin nhà hàng */}
        <Route path="/" element={<OwnerRestaurantInfoScreen />} />

        {/* Màn hình đích: Thêm món ăn (Nút bấm sẽ dẫn tới đây) */}
        <Route path="/owner/add-food" element={<AddFoodScreen />} />
      </Routes>
    </Router>
  );
};

export default App;