import React from "react";
import { Link } from "react-router-dom";

const Trends = ({ suggestions, showAll, setShowAll }) => {
    return (
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
    );
};

export default Trends;
