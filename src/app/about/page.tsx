import Image from "next/image";

export default function About() {
  return (
    <section
      className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-4 sm:px-6 lg:px-16 py-8 lg:py-20 gap-8 lg:gap-12"
      aria-labelledby="about-title"
    >
      {/* Image Section */}
      <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[4/3]">
        <Image
          src="/images/about.jpeg"
          alt="A vibrant collage of travel, technology, real estate, and more"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="max-w-full lg:w-1/2 text-center lg:text-left space-y-6">
        <h1
          id="about-title"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800"
        >
          Welcome to Exploring the All In One Blogs
        </h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          At <strong>Exploring the All In One Blogs</strong>, we believe that
          the world is full of fascinating topics waiting to be discovered. Our
          mission is to bring you high-quality, diverse content that informs,
          inspires, and engages you. From breathtaking travel destinations to
          the latest breakthroughs in artificial intelligence, we got it all!
        </p>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Whether your exploring trends in real estate, diving into the world
          of machine learning, or looking for tips on the latest mobile
          gadgets, our blog is your ultimate guide. Life is too short to stick
          to one topic, and thats why we cover everything that sparks
          curiosity and adds value to your journey.
        </p>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Join us in exploring the limitless possibilities across travel,
          technology, real estate, and more. Together, lets uncover knowledge,
          share experiences, and grow as a community.
        </p>
      </div>
    </section>
  );
}
