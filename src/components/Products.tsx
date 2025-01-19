import React, { useState } from 'react';
import { Filter } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Vintage Office Chair',
    category: 'chairs',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Modern Conference Table',
    category: 'tables',
    price: '$899',
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Ergonomic Task Chair',
    category: 'chairs',
    price: '$399',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Home Office Desk',
    category: 'tables',
    price: '$599',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80'
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h2>
        
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4">
          <Filter className="text-green-600" size={24} />
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === 'all'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50'
            } transition-colors`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory('chairs')}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === 'chairs'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50'
            } transition-colors`}
          >
            Chairs
          </button>
          <button
            onClick={() => setSelectedCategory('tables')}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === 'tables'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50'
            } transition-colors`}
          >
            Tables
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">Starting at {product.price}</p>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;