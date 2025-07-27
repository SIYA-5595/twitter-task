import React from "react";

function Subscription() {
    const checkPaymentTime = () => {
        const now = new Date();
        const hourIST = (now.getUTCHours() + 5 + Math.floor((now.getUTCMinutes() + 30) / 60)) % 24;
        return hourIST >= 10 && hourIST < 11;
    };

    const handlePayment = (plan) => {
        if (!checkPaymentTime()) {
            alert("Payment allowed only between 10 - 11 AM IST.");
            return;
        }
        alert(`Redirecting to payment for ${plan} plan.`);
        // Integrate Razorpay or Stripe
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">Subscription Plans</h2>
            <div className="mt-4 grid grid-cols-1 gap-4">
                <button onClick={() => handlePayment("Free")} className="bg-gray-300 p-3 rounded">Free Plan</button>
                <button onClick={() => handlePayment("Bronze")} className="bg-yellow-400 p-3 rounded">Bronze - ₹100/month</button>
                <button onClick={() => handlePayment("Silver")} className="bg-blue-400 p-3 rounded">Silver - ₹300/month</button>
                <button onClick={() => handlePayment("Gold")} className="bg-green-500 p-3 rounded">Gold - ₹1000/month</button>
            </div>
        </div>
    );
}

export default Subscription;
