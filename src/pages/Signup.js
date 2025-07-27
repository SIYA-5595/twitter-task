import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    // Normal Signup with Email Verification
    const handleSignup = (e) => {
        e.preventDefault();
        if (!email || !email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }
        const otp = prompt(`We sent a verification code to ${email}. Enter OTP:`);
        if (otp === "1234") {
            alert("Email verified successfully!");
            navigate("/login");
        } else {
            alert("Invalid OTP. Please try again.");
        }
    };

    // Google Signup with Email Prompt
    const handleGoogleSignup = () => {
        const googleEmail = prompt("Choose your Google Email for signup:");
        if (googleEmail && googleEmail.includes("@")) {
            alert(`Google email verified: ${googleEmail}`);
            navigate("/login");
        } else {
            alert("Please enter a valid Google email.");
        }
    };

    return (
        <div className="flex h-screen">
            {/* LEFT SIDE IMAGE - 60% */}
            <div
                className="w-[60%] bg-cover bg-center"
                style={{ backgroundImage: "url('images/twitter-white.jpeg')" }}
            ></div>

            {/* RIGHT SIDE SIGNUP FORM - 40% */}
            <div className="w-[40%] flex items-center justify-center bg-gray-50">
                <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md">
                    <div className="flex flex-col items-center mb-6">
                        <img
                            src="/images/twitter-logo.png"
                            alt="Twitter Logo"
                            className="w-14 h-14 mb-3"
                        />
                        <h1 className="text-3xl font-bold text-gray-800">
                            Create your account
                        </h1>
                    </div>

                    {/* Signup Form */}
                    <form className="space-y-5" onSubmit={handleSignup}>
                        <input
                            type="text"
                            placeholder="@username"
                            className="w-full p-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />

                        <button
                            type="submit"
                            className="w-full bg-sky-500 text-white py-2 rounded-md font-semibold hover:bg-sky-600"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <span className="px-3 text-gray-500">OR</span>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>

                    {/* Google Signup */}
                    <button
                        onClick={handleGoogleSignup}
                        className="w-full border border-gray-300 py-3 rounded-md flex items-center justify-center hover:bg-gray-100"
                    >
                        <img
                            src="/images/google-icon.png"
                            alt="Google"
                            className="w-5 h-5 mr-2"
                        />
                        Sign Up with Google
                    </button>

                    <p className="mt-6 text-md text-gray-700 text-center">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-500 hover:underline">
                            Log In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
