import React, { useState } from "react";
import { FaRegComment, FaRetweet, FaHeart, FaShare, FaChartBar } from "react-icons/fa";

function Home() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            name: "Brie",
            username: "Skcth_ComedyFan",
            time: "3m",
            text: "Giving standup comedy a go. Open mic starts at 7, hit me up if you want a ticket #heregoesnothing",
            img: null,
            comments: 2,
            retweets: 3,
            likes: 10,
            views: 150
        },
        {
            id: 2,
            name: "Harold",
            username: "h_wang88",
            time: "10m",
            text: "Vacation is going great!",
            img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
            comments: 5,
            retweets: 1,
            likes: 25,
            views: 300
        },
    ]);

    const [newPost, setNewPost] = useState("");

    const handlePost = () => {
        if (newPost.trim() === "") return;
        const newTweet = {
            id: posts.length + 1,
            name: "You",
            username: "myself",
            time: "Now",
            text: newPost,
            img: null,
            comments: 0,
            retweets: 0,
            likes: 0,
            views: 0
        };
        setPosts([newTweet, ...posts]);
        setNewPost("");
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md">
            {/* What's happening input */}
            <div className="p-4 border-b border-gray-200">
                <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="What's happening?"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                ></textarea>
                <button
                    onClick={handlePost}
                    className="mt-2 px-4 py-2 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600"
                >
                    Tweet
                </button>
            </div>

            {/* Posts */}
            <div>
                {posts.map((post) => (
                    <div key={post.id} className="p-4 border-b border-gray-200">
                        <div className="flex items-start gap-3">
                            <img
                                src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.name}`}
                                alt={post.name}
                                className="w-10 h-10 rounded-full"
                            />
                            <div className="flex-1">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">{post.name}</span>
                                    <span className="text-gray-500">@{post.username}</span>
                                    <span className="text-gray-400 text-sm">• {post.time}</span>
                                </div>
                                <p className="mt-2">{post.text}</p>
                                {post.img && (
                                    <img
                                        src={post.img}
                                        alt="post"
                                        className="mt-3 rounded-lg border border-gray-300"
                                    />
                                )}
                                {/* Actions with counts */}
                                <div className="flex gap-6 mt-3 text-gray-500 text-sm">
                                    <div className="flex items-center gap-1 hover:text-sky-500 cursor-pointer">
                                        <FaRegComment /> {post.comments}
                                    </div>
                                    <div className="flex items-center gap-1 hover:text-green-500 cursor-pointer">
                                        <FaRetweet /> {post.retweets}
                                    </div>
                                    <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
                                        <FaHeart /> {post.likes}
                                    </div>
                                    <div className="flex items-center gap-1 hover:text-sky-500 cursor-pointer">
                                        <FaChartBar /> {post.views}
                                    </div>
                                    <div className="flex items-center gap-1 hover:text-sky-500 cursor-pointer">
                                        <FaShare />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
