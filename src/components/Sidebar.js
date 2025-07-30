import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaBell, FaHashtag, FaEllipsisH, FaEnvelope, FaBookmark, FaList } from "react-icons/fa";

const Sidebar = () => {
    return (
        <aside className="w-1/5 p-4 bg-white border-r border-gray-200 shadow-md flex flex-col justify-between min-h-screen">
            <div>
                <h1 className="text-2xl text-sky-500 font-bold mb-6">Twitter</h1>
                <nav className="space-y-6 text-lg font-bold text-gray-800">
                    <Link to="/" className="flex items-center gap-3 hover:text-sky-500">
                        <FaHome className="text-2xl" /> Home
                    </Link>
                    <Link to="/explore" className="flex items-center gap-3 hover:text-sky-500">
                        <FaHashtag className="text-2xl" /> Explore
                    </Link>
                    <Link to="/notifications" className="flex items-center gap-3 hover:text-sky-500">
                        <FaBell className="text-2xl" /> Notifications
                    </Link>
                    <Link to="/messages" className="flex items-center gap-3 hover:text-sky-500">
                        <FaEnvelope className="text-2xl" /> Messages
                    </Link>
                    <Link to="/bookmarks" className="flex items-center gap-3 hover:text-sky-500">
                        <FaBookmark className="text-2xl" /> Bookmarks
                    </Link>
                    <Link to="/lists" className="flex items-center gap-3 hover:text-sky-500">
                        <FaList className="text-2xl" /> Lists
                    </Link>
                    <Link to="/profile" className="flex items-center gap-3 hover:text-sky-500">
                        <FaUser className="text-2xl" /> Profile
                    </Link>
                    <p className="flex items-center gap-3 hover:text-sky-500 cursor-pointer">
                        <FaEllipsisH className="text-2xl" /> More
                    </p>
                </nav>
            </div>

            <button className="mt-6 w-full py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600">
                Tweet
            </button>
        </aside>
    );
};

export default Sidebar;
