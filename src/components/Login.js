import React from 'react';

function Login() {
    return (
        <div className="flex flex-col items-center text-center">
            {/* Twitter Logo */}
            <img
                src="/images/twitter-logo.png"
                alt="Twitter"
                className="w-16 h-16 mb-6"
            />

            {/* Texts */}
            <h2 className="text-3xl font-bold mb-6 text-white">Happening now</h2>
            <h3 className="text-lg font-semibold mb-4 text-white">Join Twitter today</h3>

            {/* Login Form */}
            <div className="w-full max-w-xs">
                <input className="block w-full p-2 border rounded mb-2 text-black" placeholder="@username" />
                <input className="block w-full p-2 border rounded mb-2 text-black" placeholder="Full Name" />
                <input className="block w-full p-2 border rounded mb-2 text-black" placeholder="Email" />
                <input className="block w-full p-2 border rounded mb-2 text-black" placeholder="Password" type="password" />
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full mb-4">
                    Sign Up
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full">
                    Sign in with Google
                </button>
            </div>
        </div>
    );
}

export default Login;
