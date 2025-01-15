'use client';
import React, { useState } from "react";
import Image from "next/image";

const Technology = () => {
  const [comments, setComments] = useState([
    { name: "Alishba", text: "This is amazing! I can't wait to try out some of these gadgets." },
    { name: "Iqra", text: "I love smart home devices. The AI-powered assistant sounds great!" },
    { name: "Qirat", text: "Great article! Would love to see more recommendations." },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { name: "🤖", text: newComment.trim() }]);
      setNewComment("");
    }
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white text-center py-4 rounded-md shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold">Technology Blog</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto bg-black mt-8 p-4 md:p-6 rounded-lg shadow-md">
        {/* Blog Post */}
        <article className="flex flex-col md:flex-row items-center md:items-start">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
              The Impact of Technology on Our Daily Lives
            </h2>
            <p className="text-gray-100 leading-relaxed mb-4 text-sm md:text-base">
              Technology impacts every aspect of our lives, whether its our personal routines or professional tasks. Every new gadget is designed to <i>simplify life</i> and <i>enhance productivity</i>. Here are some key aspects of technology’s influence:
            </p>
            {/* Sections */}
            {[
              {
                title: "Smart Home Integration",
                text: "Smart home devices, like AI-powered assistants (Google Nest and Alexa), are no longer just luxuries but have become necessities. These devices provide convenience and promote energy efficiency.",
              },
              {
                title: "Healthcare Innovations",
                text: "Fitness trackers and wearable health gadgets monitor your health. Advanced sensors now track blood oxygen levels, heart rate, and stress levels, capabilities once limited to medical setups.",
              },
              {
                title: "Communication Simplified",
                text: "Innovations in smartphones, such as foldable screens and improved cameras, elevate user experiences. These devices are hubs for communication, photography, and entertainment.",
              },
              {
                title: "Digital Future for Education and Workspaces",
                text: "AR/VR headsets introduce new dimensions to education and professional setups. Immersive training sessions and virtual meetings are becoming the new norm.",
              },
              {
                title: "Environmental Sustainability",
                text: "Solar-powered devices and eco-friendly technologies represent a positive step for the environment. With green energy, we contribute to protecting the planet.",
              },
            ].map((section, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mt-6 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
            <Image
              src="/images/tech.jpg"
              alt="Tech Gadgets"
              width={500}
              height={500}
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </article>

        {/* Comments Section */}
        <section className="mt-8">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">Comments</h3>
          <div className="mt-6">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg shadow-sm mb-4 border-2 border-purple-600"
              >
                <p className="text-yellow-400 font-semibold">{comment.name}</p>
                <p className="text-gray-300">{comment.text}</p>
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
              className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition w-full sm:w-auto"
            >
              Submit Comment
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Technology;
