import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaHome, FaUser, FaBell, FaHashtag, FaTwitter } from "react-icons/fa";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AudioTweet from "./pages/AudioTweet";
import Subscription from "./pages/Subscription";

function App() {
    const [showAll, setShowAll] = React.useState(false);

    const suggestions = [
        { name: "John Doe", username: "johndoe", img: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "Jane Smith", username: "janesmith", img: "https://randomuser.me/api/portraits/women/45.jpg" },
        { name: "Michael Lee", username: "mlee", img: "https://randomuser.me/api/portraits/men/76.jpg" },
        { name: "Sarah Brown", username: "sarahb", img: "https://randomuser.me/api/portraits/women/22.jpg" },
        { name: "Alex White", username: "alexwhite", img: "https://randomuser.me/api/portraits/men/11.jpg" },
        { name: "Emma Davis", username: "emmad", img: "https://randomuser.me/api/portraits/women/61.jpg" },
        { name: "Daniel Miller", username: "danielm", img: "https://randomuser.me/api/portraits/men/85.jpg" },
        { name: "Sophia Taylor", username: "sophiat", img: "https://randomuser.me/api/portraits/women/77.jpg" },
        { name: "Chris Johnson", username: "chrisj", img: "https://randomuser.me/api/portraits/men/18.jpg" },
        { name: "Olivia Brown", username: "oliviab", img: "https://randomuser.me/api/portraits/women/38.jpg" },
    ];

    return (
        <Router>
            <div className="flex bg-gray-100 min-h-screen">

                {/* LEFT SIDEBAR */}
                <aside className="w-1/5 p-4 bg-white border-r border-gray-200 shadow-md">
                    <div className="flex items-center gap-2 mb-8">
                        <FaTwitter className="text-sky-500 text-3xl" />
                        <span className="text-2xl font-bold text-sky-500">Twitter</span>
                    </div>
                    <nav className="space-y-6 text-lg font-bold text-gray-800">
                        <Link to="/" className="flex items-center gap-3 hover:text-sky-500">
                            <FaHome className="text-2xl" /> Home
                        </Link>
                        <Link to="/profile" className="flex items-center gap-3 hover:text-sky-500">
                            <FaUser className="text-2xl" /> Profile
                        </Link>
                        <Link to="/audio" className="flex items-center gap-3 hover:text-sky-500">
                            🎤 Audio Tweet
                        </Link>
                        <Link to="/subscription" className="flex items-center gap-3 hover:text-sky-500">
                            <FaBell className="text-2xl" /> Subscription
                        </Link>
                    </nav>
                </aside>

                {/* MAIN CONTENT */}
                <main className="flex-1 p-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/audio" element={<AudioTweet />} />
                        <Route path="/subscription" element={<Subscription />} />
                    </Routes>
                </main>

                {/* RIGHT SIDEBAR */}
                <aside className="w-1/4 p-4 bg-white border-l border-gray-200 shadow-md">
                    {/* Search Bar */}
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Search Twitter"
                            className="w-full p-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    {/* Trends Section */}
                    <div className="bg-gray-100 rounded-lg p-4 mb-4">
                        <h3 className="font-bold text-lg text-gray-800">Trends for you</h3>
                        <ul className="mt-3 space-y-2 text-gray-700">
                            <li><Link to="/trend/BreakingNews" className="hover:text-sky-500 cursor-pointer">#BreakingNews</Link></li>
                            <li><Link to="/trend/ReactJS" className="hover:text-sky-500 cursor-pointer">#ReactJS</Link></li>
                            <li><Link to="/trend/WorldNews" className="hover:text-sky-500 cursor-pointer">#WorldNews</Link></li>
                            <li><Link to="/trend/TailwindCSS" className="hover:text-sky-500 cursor-pointer">#TailwindCSS</Link></li>
                        </ul>
                    </div>

                    {/* Who to Follow */}
                    <div className="bg-gray-100 rounded-lg p-4">
                        <h3 className="font-bold text-lg text-gray-800">Who to follow</h3>
                        <ul className="mt-3 space-y-4">
                            {suggestions.slice(0, showAll ? suggestions.length : 3).map((user, index) => (
                                <li key={index} className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <img src={user.img} alt="profile" className="w-10 h-10 rounded-full" />
                                        <div>
                                            <p className="font-semibold">{user.name}</p>
                                            <p className="text-gray-500 text-sm">@{user.username}</p>
                                        </div>
                                    </div>
                                    <button className="px-3 py-1 bg-sky-500 text-white rounded-full hover:bg-sky-600">
                                        Follow
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-sky-500 mt-3 hover:underline"
                        >
                            {showAll ? "Show less" : "Show more"}
                        </button>
                    </div>
                </aside>

            </div>
        </Router>
    );
}

export default App;
