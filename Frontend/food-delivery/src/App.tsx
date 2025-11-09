// File: src/App.tsx
import React from 'react';
// Import từ ĐÚNG ĐƯỜNG DẪN MỚI
import LoginForm from './features/auth/login/components/LoginForm';
import SignupForm from './features/auth/signup/components/SignupForm';

function App() {
  return (
    <div className="p-4">
      <LoginForm />
      <hr className="my-8 border-gray-300" />
      <SignupForm />
    </div>
  );
}
export default App;