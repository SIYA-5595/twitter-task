import React from "react";
import { FaRegComment, FaRetweet, FaHeart, FaChartBar } from "react-icons/fa";

const posts = [
    {
        id: 1,
        name: "Brie",
        username: "Skcth_ComedyFan",
        time: "3m",
        text: "Giving standup comedy a go. Open mic starts at 7, hit me up if you want a ticket #heregoesnothing",
        image: "",
        comments: 1,
        retweets: 2,
        likes: 10,
        views: 100,
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        id: 2,
        name: "Harold",
        username: "h_wang88",
        time: "10m",
        text: "Vacation is going great!",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
        comments: 3,
        retweets: 5,
        likes: 14,
        views: 250,
        avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    {
        id: 3,
        name: "Andrea",
        username: "andy_landerson",
        time: "3m",
        text: "How many lemons do I need to make lemonade?",
        image: "",
        comments: 0,
        retweets: 1,
        likes: 5,
        views: 90,
        avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    },
];

const Home = () => {
    return (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md">
            {/* What's happening box */}
            <div className="p-4 border-b border-gray-200">
                <input
                    type="text"
                    placeholder="What's happening?"
                    className="w-full p-2 border rounded-lg bg-gray-100 focus:outline-none"
                />
                <button className="mt-2 px-4 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600">
                    Tweet
                </button>
            </div>

            {/* Posts List */}
            {posts.map((post) => (
                <div key={post.id} className="p-4 border-b border-gray-200">
                    <div className="flex items-start gap-3">
                        <img
                            src={post.avatar}
                            alt={post.name}
                            className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <p className="font-bold">{post.name}</p>
                                <p className="text-gray-500">@{post.username} • {post.time}</p>
                            </div>
                            <p className="mt-1">{post.text}</p>
                            {post.image && (
                                <img
                                    src={post.image}
                                    alt="post"
                                    className="mt-3 rounded-lg w-full max-h-80 object-cover"
                                />
                            )}
                            {/* Actions */}
                            <div className="flex justify-between text-gray-500 mt-3 text-sm">
                                <span className="flex items-center gap-1">
                                    <FaRegComment /> {post.comments}
                                </span>
                                <span className="flex items-center gap-1">
                                    <FaRetweet /> {post.retweets}
                                </span>
                                <span className="flex items-center gap-1">
                                    <FaHeart /> {post.likes}
                                </span>
                                <span className="flex items-center gap-1">
                                    <FaChartBar /> {post.views}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
