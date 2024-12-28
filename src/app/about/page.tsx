import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-6 lg:px-16 py-10 lg:py-20 space-y-8 lg:space-y-0 lg:space-x-10">
   
      <div className="relative w-full lg:w-1/2 h-96">
        <Image
          src="/images/about.jpeg"
          alt="A vibrant collage of travel, technology, real estate, and more"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Exploring the All In One Blogs
        </h1>
        <p className="text-gray-600 leading-relaxed">
          At <strong>Exploring the All In One Blogs</strong>, we believe that the world is full of fascinating topics
          waiting to be discovered. Our mission is to bring you high-quality, diverse content that informs, inspires,
          and engages you. From breathtaking travel destinations to the latest breakthroughs in artificial intelligence,
          we got it all!
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          Whether your exploring trends in real estate, diving into the world of machine learning, or looking for
          tips on the latest mobile gadgets, our blog is your ultimate guide. Life is too short to stick to one topic,
          and thats why we cover everything that sparks curiosity and adds value to your journey.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          Join us in exploring the limitless possibilities across travel, technology, real estate, and more. Together,
          lets uncover knowledge, share experiences, and grow as a community.
        </p>
      </div>
    </div>
  );
}
