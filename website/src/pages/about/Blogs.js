import React, { useState } from 'react';

const Blogs = () => {
  const [filter, setFilter] = useState('all');

  const staticBlogs = [
    {
      id: 1,
      title: 'Exploring the Latest Tech Trends',
      category: 'Tech',
      image: 'https://via.placeholder.com/300',
      excerpt: 'Discover the newest trends in technology and how they are shaping the future.',
    },
    {
      id: 2,
      title: 'Mastering Web Development',
      category: 'Programming',
      image: 'https://via.placeholder.com/300',
      excerpt: 'Tips and tricks for becoming a web development pro.',
    },
    {
      id: 3,
      title: 'Designing User-Friendly Interfaces',
      category: 'Design',
      image: 'https://via.placeholder.com/300',
      excerpt: 'Creating interfaces that users will love to interact with.',
    },
    {
      id: 4,
      title: 'Data Analytics for Business Growth',
      category: 'Data',
      image: 'https://via.placeholder.com/300',
      excerpt: 'Leveraging data to drive business growth and decision-making.',
    },
  ];
  
  const filterBlogs = (category) => {
    setFilter(category);
  };

  return (
    <div>
      <h1 className="text-3xl md:text-5xl text-left text-black p-20">Tech Blogs</h1>
      <div className="p-4">
        <select
          className="p-2 rounded border border-gray-300"
          value={filter}
          onChange={(e) => {
            filterBlogs(e.target.value);
          }}
        >
          <option value="all">All</option>
          <option value="Tech">Tech</option>
          <option value="Programming">Programming</option>
          <option value="Design">Design</option>
          <option value="Data">Data</option>
        </select>
      </div>
      <div className="blogs p-4">
        <div className="grid grid-cols-2 gap-4">
          {staticBlogs
            .filter((blog) => filter === 'all' || blog.category === filter)
            .map((blog) => (
              <div key={blog.id} className="border border-gray-300 rounded-md p-4">
                <img src={blog.image} alt={blog.title} className="w-full h-auto mb-4" />
                <h2 className="text-xl font-semibold text-black">{blog.title}</h2>
                <p className="text-gray-500">{blog.excerpt}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
