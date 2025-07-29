import React, { useState, useRef } from "react";

const AudioTweet = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [otpInput, setOtpInput] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const mediaRecorderRef = useRef(null);
    const audioChunks = useRef([]);
    const audioBlob = useRef(null);

    const isWithinAllowedTime = () => {
        const now = new Date();
        const hoursIST = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })).getHours();
        return hoursIST >= 14 && hoursIST < 19;
    };

    const startRecording = async () => {
        setError("");
        if (!isWithinAllowedTime()) {
            setError("Audio uploads are allowed only between 2 PM and 7 PM IST.");
            return;
        }
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            audioChunks.current = [];

            mediaRecorderRef.current.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    audioChunks.current.push(e.data);
                }
            };

            mediaRecorderRef.current.onstop = () => {
                audioBlob.current = new Blob(audioChunks.current, { type: "audio/mp3" });
                if (audioBlob.current.size > 100 * 1024 * 1024) {
                    setError("Audio file is too large (max 100MB).");
                    return;
                }
                setAudioURL(URL.createObjectURL(audioBlob.current));
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
        } catch (err) {
            setError("Error accessing microphone: " + err.message);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    // Call backend to send OTP
    const sendOtp = async () => {
        if (!email) {
            setError("Please enter your email.");
            return;
        }
        const sendOtp = async () => {
    try {
        const res = await fetch("http://localhost:5000/send-otp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: "rbenisiya@gmail.com" }) // YOUR EMAIL
        });

        const data = await res.json();
        if (data.success) {
            alert("OTP sent to your email!");
            setOtpSent(true);
        } else {
            setError("Failed to send OTP: " + data.message);
        }
    } catch (err) {
        setError("Error sending OTP: " + err.message);
    }
};

    };

    const verifyOtp = async () => {
        try {
            const res = await fetch("http://localhost:5000/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ otp: otpInput }),
            });
            const data = await res.json();
            if (data.success) {
                alert("OTP Verified!");
                setOtpVerified(true);
            } else {
                alert("Invalid OTP!");
            }
        } catch (err) {
            setError("Error verifying OTP: " + err.message);
        }
    };

    const uploadAudio = () => {
        if (!otpVerified) {
            setError("Please verify OTP before uploading.");
            return;
        }
        alert("Audio uploaded successfully (mock)!");
    };

    return (
        <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Audio Tweet</h2>
            {error && <p className="text-red-500 mb-2">{error}</p>}

            {/* Recording Section */}
            {!isRecording ? (
                <button
                    onClick={startRecording}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                    Start Recording
                </button>
            ) : (
                <button
                    onClick={stopRecording}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                    Stop Recording
                </button>
            )}

            {audioURL && (
                <div className="mt-4">
                    <h3 className="font-semibold">Preview:</h3>
                    <audio controls src={audioURL} className="mt-2 w-full"></audio>
                </div>
            )}

            {/* OTP Section */}
            {!otpSent ? (
                <div className="mt-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 rounded-md w-full mb-2"
                    />
                    <button
                        onClick={sendOtp}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Send OTP
                    </button>
                </div>
            ) : !otpVerified ? (
                <div className="mt-4">
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otpInput}
                        onChange={(e) => setOtpInput(e.target.value)}
                        className="border p-2 rounded-md w-full"
                    />
                    <button
                        onClick={verifyOtp}
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Verify OTP
                    </button>
                </div>
            ) : (
                <button
                    onClick={uploadAudio}
                    className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
                >
                    Upload Audio
                </button>
            )}
        </div>
    );
};

export default AudioTweet;
