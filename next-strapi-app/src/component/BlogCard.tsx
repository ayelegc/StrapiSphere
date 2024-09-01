import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const BlogCard = ({ blog }: any) => {
  const truncateBlogDesc = blog.attributes.Description.length > 80
    ? blog.attributes.Description.substring(0, 80) + "..."
    : blog.attributes.Description;

  const imageUrl = blog.attributes.img?.data?.attributes?.url
    ? "http://127.0.0.1:1337" + blog.attributes.img.data.attributes.url
    : "/placeholder-image.jpg";

  return (
    <div className='rounded-lg shadow-md overflow-hidden border border-gray-600 cursor-pointer mb-4'>
      <Link href={`/blog/${blog.id}`} passHref>
        <div className='relative w-full h-64'>
          <Image
            src={imageUrl}
            alt={blog.attributes.Title || "Blog Image"}
            layout="fill"
            objectFit="contain"
            className='object-center'
          />
        </div>
        <div className="p-4">
          <h2 className='text-xl font-semibold mb-2'>
            {blog.attributes.Title}
          </h2>
          <p className='text-gray-600'>{truncateBlogDesc}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
