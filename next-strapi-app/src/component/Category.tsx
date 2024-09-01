"use client";

import React from 'react';

interface CategoryProps {
  cat: {
    attributes: {
      Title: string;
    };
  };
}

const Category: React.FC<CategoryProps> = ({ cat }) => {
  return (
    <div
      onClick={() => {}}
      className="bg-[#33af5c] p-4 rounded-lg shadow-md cursor-pointer"
    >
      {cat.attributes.Title}
    </div>
  );
}

export default Category;
