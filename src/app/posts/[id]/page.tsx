'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  title: string;
  date: string;
  content: string;
  imageUrl: string;
  projectLink: string;
}

export default function PostDetail({ params }: { params: { id: string } }) {
  const { id } = params;


  const post: Post | null = getPostById(id);

  const [comments, setComments] = useState<{ name: string; comment: string }[]>([
    { name: 'Ali', comment: 'This is an amazing project!' },
    { name: 'Peter', comment: 'Great job! Really inspiring.' },
    { name: 'Nobita', comment: 'Love the design and functionality!' },
  ]);

  if (!post) {
    return notFound(); 
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const comment = (form.elements.namedItem('comment') as HTMLTextAreaElement).value;
    setComments([...comments, { name, comment }]);
    form.reset();
  };

  return (
    <div className="max-w-full mx-auto p-6 relative bg-gray-900 text-white">
      <article className=" relative bg-gray-900 text-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col md:flex-row">
          {/* Left Section: Content */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl font-bold text-white">{post.title}</h2>
            <br />
            <p className="text-gray-300 text-sm">{post.date}</p>
            <div className="mt-6 text-gray-100">
              <p>{post.content}</p>
              <Link
                href={post.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-500 mt-4 inline-block font-semibold text-lg"
              >
                Visit Project..
              </Link>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="md:w-1/2 p-6 flex items-center justify-center">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={500}
              height={500}
              className="w-full max-w-sm h-auto object-cover rounded-lg shadow-md border-4 border-yellow-400"
            />
          </div>
        </div>

        {/* Comment Section */}
        <div className="mt-8 p-6">
          <h3 className="text-2xl font-semibold text-white">Comments</h3>
          <form onSubmit={handleCommentSubmit} className="mt-4">
            <input
              type="text"
              name="name"
              className="w-full p-4 border-2 text-black border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-2"
              placeholder="Your Name"
              required
            />
            <textarea
              name="comment"
              className="w-full p-4 border-2 text-black border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Add your comment here..."
              required
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-yellow-500 border-2 border-yellow-600 text-black px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
            >
              Submit Comment
            </button>
          </form>

          {/* Display Comments */}
          <div className="mt-6">
            {comments.map((comment, index) => (
              <div
                key={index}
                className=" bg-gray-900  p-4 rounded-lg shadow-sm mb-4 border-2 border-purple-600"
              >
                <p className="text-yellow-400 font-semibold">{comment.name}</p>
                <p className="text-gray-300">{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}


const getPostById = (id: string) => {
  const posts: Post[] = [
    {
      title: 'Project 1 - Makeup Website',
      date: 'Nov 17, 2024',
      content: `Step into the world of glamour and creativity with our Makeup Website. Designed as the ultimate online destination for makeup enthusiasts and beauty professionals, it offers everything from tutorials and product reviews to the latest trends in cosmetics.

      Find expert advice, tips for creating stunning looks, and product recommendations tailored to different skin types. We also provide a curated selection of beauty products, including foundations, lipsticks, and skincare, to help users find the perfect match for their needs.
    
      Whether you're a beginner or a seasoned artist, our website offers all the tools to enhance your creativity and stay updated with the latest trends in beauty.`,
      imageUrl: '/images/makeup.jpg',
      projectLink: 'https://e-commerce-s-nine.vercel.app/',
    },
    {
      title: 'Project 2 - Car Website',
      date: 'Nov 17, 2024',
      content: `Welcome to our Car Website, the ultimate online platform for car enthusiasts, buyers, and professionals. Whether you're looking to explore the latest car models, compare prices, or read reviews, our website has everything you need.
    
      Discover detailed specifications, user reviews, and expert opinions on various car brands and models. We provide in-depth information about performance, features, and the latest advancements in automotive technology, helping you make an informed decision before your next purchase.
    
      Our platform also offers a seamless car-buying experience with a variety of options, including new and pre-owned vehicles. You can easily filter by make, model, price range, and location to find the perfect car that fits your needs and budget.
    
      Whether you're in the market for a luxury car, a family sedan, or an eco-friendly electric vehicle, our Car Website is your go-to destination for all things automotive. Stay updated with the latest news, reviews, and trends in the car industry.`,
      imageUrl: '/images/car.jpg',
      projectLink: 'https://car-website-sakeena.vercel.app/',
    },    
    {
      title: 'Project 3 - Food Hub Website',
      date: 'Nov 19, 2024',
      content: `Welcome to our Food Hub Website, the ultimate destination for food lovers, home cooks, and restaurant enthusiasts! Whether you're looking to try out new recipes, discover local restaurants, or order food online, our platform brings the best of food all in one place.
    
      Explore a variety of recipes for every occasion, from quick snacks to gourmet meals. With easy-to-follow instructions and a wide range of ingredients, cooking has never been more fun. You can also find detailed information about nutritional value, cooking tips, and food pairings to help you make healthier and tastier choices.
    
      In addition to recipes, we offer restaurant reviews, menus, and the ability to order your favorite dishes directly through our website. Whether you're in the mood for a cozy meal at home or a fine dining experience, our platform connects you to the best local eateries and delivery services.
    
      Whether you're a foodie, a budding chef, or someone who loves trying new cuisines, our Food Hub Website provides all the inspiration and resources you need to satisfy your cravings and explore the world of food.`,
      imageUrl: '/images/d.png',
      projectLink: 'https://food-hub-website-seven.vercel.app/',
    },
  {
  title: 'Project 4 - Resume Builder Website',
  date: 'Nov 20, 2024',
  content: `Create the perfect resume with ease using our Resume Builder Website. Designed for job seekers, professionals, and students, this platform helps you build a polished and professional resume in just a few simple steps. Whether your a seasoned expert or just starting your career, our tool simplifies the resume creation process and provides helpful templates and suggestions to highlight your skills and experience.

  Our website offers a variety of customizable resume templates that suit different industries and job types. You can easily choose a template, input your personal details, work experience, education, skills, and certifications, and watch your resume come to life. The platform also offers real-time previews, so you can instantly see how your resume looks as you make changes.

  Not only does our Resume Builder provide ready-made templates, but it also offers valuable tips for writing impactful resumes. With guidance on everything from writing effective bullet points to choosing the right keywords for Applicant Tracking Systems (ATS), we ensure your resume stands out to potential employers.

  Whether your crafting your first resume or updating your current one, our Resume Builder Website gives you the tools to create a professional resume that will impress hiring managers and increase your chances of landing the job you want.`,
  imageUrl: '/images/r.jpg',
  projectLink: 'https://hackathon-4-xyz.vercel.app/',
},
{
  title: 'Project 5 - Blog Website',
  date: 'Nov 21, 2024',
  content: `Welcome to our Next.js Blog Website, a platform designed for writers, bloggers, and content creators to share their thoughts, ideas, and stories with the world. Built using Next.js, this website offers a fast, responsive, and SEO-friendly experience for both creators and readers.

  Explore a wide range of blog topics, including technology, lifestyle, travel, and more. Whether you're looking for insightful articles, personal stories, or expert opinions, our blog has something for everyone. The clean and minimal design ensures a smooth reading experience, allowing you to focus on the content without distractions.

  Our platform also features interactive comment sections, allowing readers to engage with the authors and other users, creating a sense of community. Authors can easily manage their posts, update content, and track user interactions through a simple and intuitive dashboard.

  Powered by Next.js, our blog website ensures optimal performance and SEO ranking. The fast loading times and responsive design make it the perfect platform for users to browse, comment, and share posts on any device, whether on desktop, tablet, or mobile.

  Whether you're an aspiring writer or a seasoned blogger, the Next.js Blog Website offers all the tools you need to create and share your content with the world.`,
  imageUrl: '/images/next.webp',
  projectLink: 'https://next-js-15-blog.vercel.app/',
},

{
  title: 'Project 6 - Portfolio Website',
  date: 'Nov 22, 2024',
  content: `Welcome to my **Personal Portfolio Website**, a creative space where I showcase my skills, projects, and experiences as a **web developer**. Designed with a clean, modern look, this portfolio reflects my passion for coding, design, and continuous learning. Whether you're a potential employer, client, or fellow developer, my portfolio provides an overview of my work, technical abilities, and personal journey in the world of development.

  On this website, you'll find a collection of **projects I have worked on, from small personal projects to professional web applications. Each project is accompanied by detailed descriptions, challenges faced, and solutions implemented, giving you a comprehensive understanding of my capabilities. 

  The portfolio is designed to be user-friendly and responsive, ensuring it looks great on any device, whether it's a desktop, tablet, or mobile phone. I have used Next.js for its optimized performance, smooth navigation, and SEO-friendly architecture, ensuring that my website is fast and easy to find.

  In addition to my projects, you can learn more about my skills, including technologies like JavaScript, React, Next.js, and Tailwind CSS. I have also included a contact form for anyone looking to get in touch for collaborations, job opportunities, or just to have a conversation about tech.

  Whether you are here to check out my work or just to get to know me better, my Personal Portfolio Website is the perfect way to see how I can help bring your next project to life.`,
  imageUrl: '/images/p.png',
  projectLink: 'https://sakeenaxyz.vercel.app/',
},

  ];

  return posts.find((post) => post.title.toLowerCase().includes(id.toLowerCase())) || null;
};
