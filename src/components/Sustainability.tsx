import React from 'react';
import { Recycle, Leaf, TreePine } from 'lucide-react';

const Sustainability = () => {
  return (
    <div id="sustainability" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Sustainability Mission</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us in reducing landfill waste—one chair at a time!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Recycle className="mx-auto text-green-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Waste Reduction</h3>
            <p className="text-gray-600">
              Over 2,000 chairs saved from landfills and counting
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Leaf className="mx-auto text-green-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Material Repurposing</h3>
            <p className="text-gray-600">
              250,000+ pounds of materials given new life
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <TreePine className="mx-auto text-green-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Environmental Impact</h3>
            <p className="text-gray-600">
              Reducing carbon footprint through furniture restoration
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Learn More About Our Green Initiatives
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;