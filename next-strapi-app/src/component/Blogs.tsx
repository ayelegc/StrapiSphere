import React from 'react';
import BlogCard from './BlogCard';  // Adjust the path as needed

function Blogs({ blogs }: any) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {blogs?.data?.map((blog: any) => (
        <div key={blog.id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
}

export default Blogs;
