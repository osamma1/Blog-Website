'use client';
import React, { useState } from "react";
import Image from "next/image";

const Travel = () => {
  const [comments, setComments] = useState([
    { name: "Ali", text: "This is amazing! I can't wait to explore these destinations!" },
    { name: "Sana", text: "I love traveling, and these tips are super helpful!" },
    { name: "Hadi", text: "Great article! Would love to see more destination ideas!" },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { name: "🤗", text: newComment.trim() }]);
      setNewComment("");
    }
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white text-center py-4 rounded-md shadow-lg">
        <h1 className="text-3xl font-bold">Travel Blog</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto bg-black mt-8 p-6 rounded-lg shadow-md">
        {/* Blog Post */}
        <article className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">
              Top 5 Travel Destinations to Visit in 2024
            </h2>
            <p className="text-gray-100 leading-relaxed mb-4">
              Traveling is not just a leisure activity; it’s a way to experience new cultures, cuisines, and landscapes. Here are some of the top destinations that promise adventure, relaxation, and unforgettable memories.
            </p>
            <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">Must-Visit Destinations:</h3>
            <ul className="list-disc list-inside text-gray-100 space-y-2">
              <li><strong>Paris, France:</strong> Experience the romance of the Eiffel Tower and indulge in French cuisine.</li>
              <li><strong>Bali, Indonesia:</strong> A tropical paradise known for its serene beaches and vibrant culture.</li>
              <li><strong>Kyoto, Japan:</strong> Discover ancient temples, stunning gardens, and traditional tea ceremonies.</li>
              <li><strong>Rome, Italy:</strong> Immerse yourself in history with iconic landmarks like the Colosseum and Vatican City.</li>
              <li><strong>Banff, Canada:</strong> Explore breathtaking mountain landscapes and crystal-clear lakes.</li>
            </ul>
            <p className="text-gray-100 leading-relaxed mt-4">
              Whether it’s a cultural adventure in Europe or a relaxing beach trip in Asia, these destinations cater to every kind of traveler. Start planning your dream vacation today!
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <Image
              src="/images/travel.jpg"
              alt="Travel Destinations"
              width={500}
              height={500}
              className="rounded-lg shadow-md w-full h-auto"
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
                    ? "border-yellow-400 bg-gray-800"
                    : "bg-gray-900"
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

export default Travel;
