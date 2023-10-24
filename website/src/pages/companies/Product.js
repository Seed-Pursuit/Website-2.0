import React from 'react';

const productData = [
    {
      id: 1,
      name: 'IOT Shoes',
      description: 'A high-quality product for your needs.',
      price: '$49.99',
      image: 'https://source.unsplash.com/200x150/?product',
    },
    {
      id: 2,
      name: 'Health Tracker',
      description: 'Our best-selling product with great features.',
      price: '$79.99',
      image: 'https://source.unsplash.com/200x150/?product/2',
    },
    {
      id: 3,
      name: 'Laptop',
      description: 'The perfect choice for all your requirements.',
      price: '$99.99',
      image: 'https://source.unsplash.com/200x150/?product/3',
    },
    {
      id: 4,
      name: '3D Camera',
      description: 'An affordable solution for your everyday tasks.',
      price: '$29.99',
      image: 'https://source.unsplash.com/200x150/?product/4',
    },
    {
      id: 5,
      name: 'Sustainable Packing',
      description: 'Upgrade your life with this amazing product.',
      price: '$129.99',
      image: 'https://source.unsplash.com/200x150/?product/5',
    },
    {
      id: 6,
      name: 'Smart Watch',
      description: 'Stay connected and monitor your health.',
      price: '$89.99',
      image: 'https://source.unsplash.com/200x150/?product/6',
    },
    {
      id: 7,
      name: 'Wireless Earbuds',
      description: 'Immersive sound and long-lasting battery life.',
      price: '$69.99',
      image: 'https://source.unsplash.com/200x150/?product/7',
    },
    {
      id: 8,
      name: 'Smart Home System',
      description: 'Automate your home for convenience and security.',
      price: '$199.99',
      image: 'https://source.unsplash.com/200x150/?product/8',
    },
    {
      id: 9,
      name: 'Fitness Tracker',
      description: 'Track your fitness goals and stay healthy.',
      price: '$59.99',
      image: 'https://source.unsplash.com/200x150/?product/9',
    },
    {
      id: 10,
      name: 'Robot Vacuum Cleaner',
      description: 'Effortless cleaning with intelligent technology.',
      price: '$179.99',
      image: 'https://source.unsplash.com/200x150/?product/10',
    },
    {
      id: 11,
      name: 'Gaming Console',
      description: 'Experience the latest games and entertainment.',
      price: '$299.99',
      image: 'https://source.unsplash.com/200x150/?product/11',
    },
    {
      id: 12,
      name: 'Wireless Router',
      description: 'High-speed internet for your home network.',
      price: '$79.99',
      image: 'https://source.unsplash.com/200x150/?product/12',
    },
    {
      id: 13,
      name: 'Smart Refrigerator',
      description: 'Keep your groceries fresh with smart features.',
      price: '$999.99',
      image: 'https://source.unsplash.com/200x150/?product/13',
    },
    {
      id: 14,
      name: 'Drone Camera',
      description: 'Capture stunning aerial photos and videos.',
      price: '$249.99',
      image: 'https://source.unsplash.com/200x150/?product/14',
    },
    {
      id: 15,
      name: 'Home Security System',
      description: 'Protect your home with advanced security.',
      price: '$199.99',
      image: 'https://source.unsplash.com/200x150/?product/15',
    },
  ];

const Product = () => {
  return (
    <div className="px-10 py-20">
      <h1 className="text-4xl text-left text-black">Our Products</h1>
      <hr className="w-64 h-2 bg-[#84DCCF] my-3" />

      <div className="mb-4">
        <p className="text-lg text-left text-black">
          Explore our range of high-quality products:
        </p>
      </div>

      <div className="flex flex-wrap">
        {productData.map((product) => (
          <div key={product.id} className="w-1/4 p-4">
            <div className="bg-white rounded-lg border p-4">
              <img src={product.image} alt={product.name} />
              <h2 className="text-xl text-black">{product.name}</h2>
              <p className="text-gray-500">{product.description}</p>
              <p className="text-black">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
