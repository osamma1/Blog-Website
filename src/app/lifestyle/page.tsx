'use client'
import React, { useState } from "react";
import Image from "next/image";

const LifeStyle = () => {
  // State to store comments
  const [comments, setComments] = useState([
    { name: "Manahil", text: "This is amazing! I cant wait to try out some of these gadgets" },
    { name: "Sara", text: "I love smart home devices. The AI-powered assistant sounds great!" },
    { name: "Mariyam", text: "Great article! Would love to see more recommendations" },
  ]);

  // State for new comment input
  const [newComment, setNewComment] = useState("");

  // Handle form submission
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { name: "😊", text: newComment.trim() }]); // Add new comment to state
      setNewComment(""); 
    }
  };

  return (
    <div className="relative bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 text-white text-center py-4 rounded-md shadow-lg">
        <h1 className="text-3xl font-bold">Human Life Style</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto bg-black mt-8 p-6 rounded-lg shadow-md">
        {/* Blog Post */}
        <article className="flex flex-col md:flex-row items-center md:items-start">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">
              <strong>Human Life in 2024</strong>: Embracing Health and Wellness
            </h2>
            <p className="text-gray-100 leading-relaxed mb-4">
              In today fast-paced world, people are becoming increasingly aware of the importance of a healthy lifestyle. From <i>mental health</i> to <i>physical well-being</i>, individuals are prioritizing their overall health. Whether its through better nutrition, exercise, or mindfulness practices, everyone is striving for a balanced life.
            </p>
            <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">
              Key Aspects of a Healthy Lifestyle:
            </h3>
            <ul className="list-disc list-inside text-gray-100 space-y-2">
              <li><strong>Regular Exercise:</strong> A consistent workout routine not only improves physical health but also boosts mental clarity and <i>emotional well-being</i>.</li>
              <li><strong>Balanced Diet:</strong> Eating a variety of <i>nutrient-rich foods</i> helps the body perform its daily tasks efficiently.</li>
              <li><strong>Mindfulness and Meditation:</strong> These practices are proven to reduce stress, improve focus, and foster a peaceful mindset.</li>
              <li><strong>Social Connections:</strong> Building and nurturing relationships is essential for maintaining a positive outlook and emotional stability.</li>
              <li><strong>Rest and Recovery:</strong> Adequate sleep and rest are vital for the bodys recovery, helping to restore energy and improve mood.</li>
            </ul>
            <p className="text-gray-100 leading-relaxed mt-4">
              Living a healthy life is not about being perfect, but about making consistent choices that prioritize <strong>well-being</strong> in the long term. By focusing on both mental and physical health, humans are shaping a more fulfilling and balanced lifestyle in 2024.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
            <Image
              src="/images/lifestyle.jpg"
              alt="Healthy Lifestyle"
              width={500}
              height={500}
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </article>

        {/* Comments Section */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">Comments</h3>

          {/* Existing Comments */}
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow-sm ${
                  index % 2 === 0
                    ? "border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-900 text-white"
                    : "bg-gray-900 text-white"
                }`}
              >
                <p>
                  <strong>{comment.name}:</strong> {comment.text}
                </p>
              </div>
            ))}
          </div>

          {/* Comment Form */}
          <form className="mt-6 space-y-4" onSubmit={handleAddComment}>
            <textarea
              className="w-full p-4 border-2 text-black border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Write your comment here..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Submit Comment
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default LifeStyle;
