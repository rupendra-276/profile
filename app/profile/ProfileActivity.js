"use client";
import { useState } from "react";
import { FaRegThumbsUp, FaRegComment, FaRegBookmark } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function ProfileActivity() {
  const [activeTab, setActiveTab] = useState("Post");

  // Dummy Posts Data
  const posts = [
    {
      id: 1,
      type: "poll",
      user: { name: "Alex Chen", username: "alexdev", time: "2h" },
      content: "Poll Options with Explanations:\n4. Cache-Control ➤ Defines caching policies to control how responses are stored and reused.",
      poll: {
        question: "Poll Options with Explanations?",
        options: ["Content-Type", "Cache-Control", "Authorization", "Accept"],
        votes: 431,
        timeLeft: "20h left",
      },
    },
    {
      id: 2,
      type: "image",
      user: { name: "Rupendra", username: "rupendra", time: "3h" },
      content: "My new UI design concept 🚀",
      image: "/AboutDumImg.jpeg", // put image in public folder
    },
    // {
    //   id: 3,
    //   type: "text",
    //   user: { name: "Sneha", username: "sneha_ui", time: "5h" },
    //   content: "Learning Next.js is fun! 🔥",
    // },
  ];

  const tabs = ["Post", "Comments", "Like", "Documents"];

  return (
    <div className="min-h-screen bg-white  p-6">
      <div>
         {/* Header */}
      <div className="w-full flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Activity</h1>
        <button className="bg-black text-white px-4 py-2 rounded-full">
          Create Post
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-1 border rounded-full ${
              activeTab === tab ? "bg-black text-white" : "border-black text-black"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-2xl shadow-sm p-4 bg-white">
            {/* User Info */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-300"></div>
              <div>
                <h2 className="font-semibold">{post.user.name}</h2>
                <span className="text-sm text-gray-500">@{post.user.username}</span>
              </div>
             <div className="text-blue-500"> {post.user.time}</div>
            </div>

            {/* Post Content */}
            <p className="text-sm my-6 whitespace-pre-line">{post.content}</p>

            {/* Conditional Rendering */}
            {post.type === "poll" && (
              <div className="border rounded-lg p-4">
                <p className="mb-3 font-medium">{post.poll.question}</p>
                {post.poll.options.map((opt, idx) => (
                  <button
                    key={idx}
                    className="w-full border rounded-full px-3 py-2 mb-2 flex justify-between text-sm hover:bg-gray-100"
                  >
                    <span>{opt}</span>
                    <span>✅</span>
                  </button>
                ))}
                <p className="text-xs text-gray-500">
                  {post.poll.votes} votes • {post.poll.timeLeft}
                </p>
              </div>
            )}

            {post.type === "image" && (
              <div className="rounded-lg overflow-hidden">
                <img src={post.image} alt="post" className="w-full object-cover" />
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-between items-center mt-4 text-gray-600">
              <FaRegThumbsUp />
              <FaRegComment />
              <FiSend />
              <FaRegBookmark />
            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="mt-6 text-center">
        <button className="text-black font-medium underline">View All →</button>
      </div>

      </div>
     
    </div>
  );
}
