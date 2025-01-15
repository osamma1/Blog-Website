'use client';
import { useState } from 'react';

interface PostProps {
  title: string;
  date: string;
  excerpt: string;
  postId: string;
}

const Post: React.FC<PostProps> = ({ title, date, excerpt, postId }) => {
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const comment = (e.target as HTMLFormElement).comment.value;
    setComments([...comments, comment]);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <article className="bg-gray-800 p-6 mb-8 shadow-lg rounded-lg border border-gray-700">
      <h2 className="text-3xl font-bold text-black">{title}</h2>
      <p className="text-gray-400 text-sm">{date}</p>
      <p className="mt-4 text-gray-300">{excerpt}</p>
      <a
        href={`#${postId}`}
        className="text-blue-400 hover:text-blue-500 font-medium mt-4 inline-block transition-colors duration-200"
      >
        Read More
      </a>

      {/* Comment Section */}
      <div id={postId} className="mt-8">
        <h3 className="text-xl font-semibold text-white">Comments</h3>
        <form onSubmit={handleCommentSubmit} className="mt-4">
          <textarea
            name="comment"
            className="w-full p-3 bg-gray-900 border border-gray-600 rounded-md text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Your comment..."
            required
          ></textarea>
          <button
            type="submit"
            className="mt-3 bg-blue-500 text-white px-5 py-2 rounded-md shadow-md hover:bg-blue-600 transition-all duration-200"
          >
            Submit Comment
          </button>
        </form>
        <div className="mt-6">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 p-4 rounded-md my-3 text-gray-300"
            >
              <p>{comment}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Post;
