import React from "react";

const Premium = () => {
    const handleSubscribe = async () => {
        const res = await fetch("http://localhost:5000/create-order", { method: "POST" });
        const data = await res.json();

        if (!data.id) {
            alert("Failed to create order!");
            return;
        }

        const options = {
            key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
            amount: data.amount,
            currency: "INR",
            name: "Twitter Premium",
            description: "Premium Subscription",
            order_id: data.id,
            handler: function (response) {
                alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
            },
            theme: { color: "#3399cc" },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white shadow rounded-lg text-center">
            <h1 className="text-2xl font-bold mb-4">Premium Subscription</h1>
            <button
                onClick={handleSubscribe}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
                Subscribe Now
            </button>
        </div>
    );
};

export default Premium;
