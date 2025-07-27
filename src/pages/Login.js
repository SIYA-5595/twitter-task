import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !username) {
            alert("Please fill all fields");
            return;
        }

        alert("Login successful!");
        // Send email notification
        try {
            await fetch("http://localhost:5000/send-login-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, username }),
            });
        } catch (error) {
            console.error(error);
        }

        // Redirect to Home page
        navigate("/home");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Login
                </h1>
                <form onSubmit={handleLogin} className="space-y-5">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-sky-400"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-sky-400"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-sky-400"
                    />
                    <button
                        type="submit"
                        className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
