import React from "react";

const Subscription = () => {
    const handlePayment = async () => {
        try {
            const res = await fetch("http://localhost:5000/create-order", {
                method: "POST",
            });
            const data = await res.json();

            const options = {
                key: "YOUR_RAZORPAY_KEY_ID", // Replace with Razorpay Key
                amount: data.amount,
                currency: data.currency,
                order_id: data.id,
                name: "Twitter Clone",
                description: "Premium Subscription",
                handler: function (response) {
                    alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (err) {
            console.error("Payment Error:", err);
        }
    };

    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Premium Subscription</h2>
            <button
                onClick={handlePayment}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
                Subscribe Now
            </button>
        </div>
    );
};

export default Subscription;
