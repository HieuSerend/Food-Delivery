// File: src/features/auth/signup/components/SignupForm.tsx
import React, { useState } from 'react';

const SignupForm = (props: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Mật khẩu không khớp!");
            return;
        }
        console.log("SIGNUP DATA:", { email, password });
    };

    return (
        <div className="max-w-md mx-auto my-12 p-6 border rounded-lg bg-gray-50 shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Đăng Ký (Signup Form)</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold text-gray-700">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold text-gray-700">Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-2 border rounded-md" />
                </div>
                <div className="mb-6">
                    <label className="block mb-1 font-semibold text-gray-700">Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="w-full p-2 border rounded-md" />
                </div>
                <button type="submit" className="w-full p-2 bg-green-600 text-white rounded-md hover:bg-green-700">Sign Up</button>
            </form>
        </div>
    );
};
export default SignupForm;