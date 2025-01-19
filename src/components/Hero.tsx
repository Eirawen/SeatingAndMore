import React from 'react';
import { ArrowRight, ShoppingBag, Info, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Giving chairs a <span className="text-green-600">second chance</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in our mission to save furniture from landfills while creating beautiful, sustainable pieces for your home and office.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <ShoppingBag className="mr-2" size={20} />
              Shop Now
            </button>
            <button className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Info className="mr-2" size={20} />
              Learn More
            </button>
            <button className="flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-green-600 hover:text-green-600 transition-colors">
              <MapPin className="mr-2" size={20} />
              Visit Us
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-green-600 mb-2">2,000+</h3>
              <p className="text-gray-600">Chairs saved from landfills</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">250,000+</h3>
              <p className="text-gray-600">Pounds of material repurposed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;