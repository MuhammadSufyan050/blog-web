import React from "react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "../components/ui/card";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
  };
  isDarkBackground: boolean;
}

const BlogCard = ({ post, isDarkBackground }: BlogCardProps) => {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-slate-400 text-white" : "bg-slate-400 text-white"
      }  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <CardTitle className="text-2xl font-bold text-black mt-4 text-center">
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="right-0 line-clamp-5 text-justify">
        <p>{post.description}</p>
      </CardContent>
      <div className="flex flex-col mt-4">
        <p
          className={`text-xs right-0 mb-2 ${
            isDarkBackground ? "text-black" : "text-black"
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/posts/${post.id}`}
          className={`w-full px-6 py-2 font-semibold text-white bg-black rounded hover:bg-orange-500 ${
            isDarkBackground
              ? "bg-black hover:bg-orange-500"
              : "bg-black hover:bg-orange-500"
          }`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
};

export default BlogCard;

