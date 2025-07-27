import React, { useState } from "react";

function AudioTweet() {
    const [file, setFile] = useState(null);
    const [otp, setOtp] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState("");

    const checkTime = () => {
        const now = new Date();
        const hourIST = (now.getUTCHours() + 5 + Math.floor((now.getUTCMinutes() + 30) / 60)) % 24;
        return hourIST >= 14 && hourIST < 19; // 2 PM - 7 PM
    };

    const handleUpload = () => {
        if (!checkTime()) {
            setError("Audio upload is allowed only between 2 PM - 7 PM IST.");
            return;
        }
        if (!verified) {
            setError("Please verify with OTP before uploading.");
            return;
        }
        if (file && file.size > 100 * 1024 * 1024) {
            setError("File size exceeds 100MB.");
            return;
        }
        // Upload to backend
        setError("");
        alert("Audio uploaded successfully!");
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold">Upload Audio Tweet</h2>
            <input type="file" accept="audio/*" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={() => alert("OTP sent to email")} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
                Send OTP
            </button>
            <input type="text" placeholder="Enter OTP" className="border p-2 mt-2" onChange={(e) => setOtp(e.target.value)} />
            <button onClick={() => setVerified(true)} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                Verify OTP
            </button>
            <button onClick={handleUpload} className="mt-2 px-4 py-2 bg-sky-500 text-white rounded">
                Upload Audio
            </button>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}

export default AudioTweet;
