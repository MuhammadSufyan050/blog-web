import Image from 'next/image';
import React from 'react';

const AuthoreCard = () => {
  return (
    <div className="bg-gray-100 shadow-lg rounded-lg p-6 mt-12 max-w-md mx-auto md:max-w-lg lg:max-w-2xl">
      <div className="flex items-center space-x-4">
        <Image
          src="/images/me.png"
          alt="Profile picture of Muhammad Sufyan"
          width={100}
          height={100}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-red-200"
        />
        <div>
          <h3 className="text-lg sm:text-xl font-bold">Muhammad Sufyan</h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Digital Marketing | Web Developer
          </p>
        </div>
      </div>
      <p className="mt-4 text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
        I am a digital marketer and front-end developer. As a digital marketer,
        I help businesses reach their customers and grow online through
        different digital platforms. As a front-end developer, I create
        websites and apps that are easy to use and look great. I enjoy combining
        creativity with technology to make sure users have a great experience.
        I&apos;m always learning new things to improve my skills and take on new
        challenges.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-white bg-black rounded-md hover:bg-orange-500 transition duration-300"
        >
          LinkedIn
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-white bg-black rounded-md hover:bg-orange-500 transition duration-300"
        >
          GitHub
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-white bg-black rounded-md hover:bg-orange-500 transition duration-300"
        >
          Facebook
        </a>
      </div>
    </div>
  );
};

export default AuthoreCard;
