import Link from "next/link";
import Image from "next/image";
import { FaArrowCircleRight, FaReact, FaLaptop, FaHeart, FaPlane } from "react-icons/fa";

const NewPost = () => {
  const posts = [
  {
    id: '1',
    title: 'Beauty Bliss Website',
    date: 'Nov 23, 2024',
    excerpt:
      "Beauty Bliss Website - Explore an elegant platform dedicated to beauty and skincare. From product reviews to expert tutorials, immerse yourself in the ultimate beauty experience.",
    image: '/images/makeup.jpg',
  },
  {
    id: '2',
    title: 'Auto Zone Website',
    date: 'Nov 24, 2024',
    excerpt:
      'Auto Zone Website - A go-to hub for car lovers, featuring in-depth reviews, specifications, and the latest deals. Navigate through a seamless experience to find your dream car.',
    image: '/images/car.jpg',
  },
  {
    id: '3',
    title: 'Gourmet Gateway Website',
    date: 'Nov 25, 2024',
    excerpt:
      'Gourmet Gateway Website - Uncover a treasure trove of recipes, food blogs, and cooking hacks. Perfect for foodies and aspiring chefs looking to elevate their culinary game.',
    image: '/images/d.png',
  },
  {
    id: '4',
    title: 'Smart Resume Creator',
    date: 'Nov 26, 2024',
    excerpt:
      'Smart Resume Creator - Build professional resumes effortlessly with this intuitive tool. Stand out in your job applications with tailor-made templates and guided customization.',
    image: '/images/r.jpg',
  },
  {
    id: '5',
    title: 'Next.js Insights Blog',
    date: 'Nov 27, 2024',
    excerpt:
      'Next.js Insights Blog - Discover cutting-edge features and best practices for Next.js development. This blog offers insights to create dynamic and scalable web applications.',
    image: '/images/n.png',
  },
  {
   id: '6',
    title: 'Travel Explorer Website',
    date: 'Nov 22, 2024',
    excerpt:
      'Travel Explorer Website - Plan your next adventure with ease. From travel guides to destination reviews, this website is your ultimate companion for unforgettable journeys.',
    image: '/images/travel.jpeg',
  },
];


  return (
    <div id="posts" className="relative bg-gray-900 text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section id="home">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Latest Posts</h2>

          {/* Buttons for the new sections */}
          <div className="mt-12 flex justify-center space-x-4 flex-wrap">
            <Link
              href="/technology"
              className="flex items-center px-4 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 space-x-2"
            >
              <FaLaptop className="text-lg" />
              <span>Technology</span>
            </Link>
            <Link
              href="/lifestyle"
              className="flex items-center px-4 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300 space-x-2"
            >
              <FaHeart className="text-lg" />
              <span>Lifestyle</span>
            </Link>
            <Link
              href="/traveling"
              className="flex items-center px-4 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 space-x-2"
            >
              <FaPlane className="text-lg" />
              <span>Traveling</span>
            </Link>
          </div>

          {/* Post Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/posts/${post.id}`}
                className="bg-gradient-to-br from-gray-800 via-gray-700 to-black border-2 border-white text-white p-6 shadow-xl rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2 hover:border-gray-600"
              >
                <div className="mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-md"
                  />
                </div>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-yellow-500 mb-4">{post.date}</p>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center space-x-2 text-yellow-400 font-semibold transition duration-300">
                  <p>Read More</p>
                  <FaArrowCircleRight className="text-xl" />
                  <FaReact className="text-blue-400 text-xl" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewPost;
