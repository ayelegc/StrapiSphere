import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

// Define the type for the blog response
interface Blog {
  data: {
    attributes: {
      Title: string;
      Description: string;
      img: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      publishedAt: string;
    };
  };
}

// Specify 'id' as a string
async function fetchBlog(id: string): Promise<Blog | null> {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/blogs/${id}?populate=*`,
      options
    );
    if (!res.ok) {
      throw new Error('Network response was not ok.');
    }
    const response = await res.json();
    return response as Blog;
  } catch (err) {
    console.error(err);
    return null;
  }
}

interface PageProps {
  params: {
    id: string;
  };
}

// Update the component to be compatible with Next.js
const Page = async ({ params }: PageProps) => {
  const blog = await fetchBlog(params.id);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  const { Title, Description, img, publishedAt } = blog.data.attributes;

  return (
    <div className='max-w-3xl mx-auto p-4'>
      <Link href="/">
        &lt; Back
      </Link>
      <div className='relative w-full h-96 overflow-hidden rounded-lg mt-5'>
        <Image
          src={`http://127.0.0.1:1337${img.data.attributes.url}`}
          alt={Title}
          fill
          style={{ objectFit: 'contain' }}
          className='rounded-lg'
        />
      </div>
      <div className='mt-4'>
        <h1 className='text-3xl font-semibold'>
          {Title}
        </h1>
        <p className='text-gray-600 mt-2'>
          {Description}
        </p>
        <div className='mt-4 flex items-center text-green-400'>
          <span className='text-sm'>
            Published on {new Date(publishedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
