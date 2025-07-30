import React from "react";
import { FaRegComment, FaRetweet, FaHeart, FaShare } from "react-icons/fa";

const Post = ({ user, time, content, image }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-start gap-4">
                <img src={user.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-bold text-gray-800">{user.name}</p>
                            <p className="text-gray-500 text-sm">@{user.username} • {time}</p>
                        </div>
                    </div>
                    <p className="mt-2 text-gray-800">{content}</p>
                    {image && <img src={image} alt="post" className="mt-3 rounded-lg max-h-80 w-full object-cover" />}
                    <div className="flex justify-between mt-4 text-gray-500">
                        <FaRegComment className="cursor-pointer hover:text-sky-500" />
                        <FaRetweet className="cursor-pointer hover:text-green-500" />
                        <FaHeart className="cursor-pointer hover:text-red-500" />
                        <FaShare className="cursor-pointer hover:text-sky-500" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
