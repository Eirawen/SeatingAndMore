import React from 'react';
import { Clock, Mail, Phone } from 'lucide-react';

const About = () => {
  // Replace YOUR_API_KEY with your actual Google Maps API key
  const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_API;
  const address = '1749 W Kirby Ave, Champaign, IL 61821';
  const encodedAddress = encodeURIComponent(address);

  return (
    <div id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Founder</h2>
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <img
                src="https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?q=80&w=2556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Placeholder for Andrew"
                className="rounded-lg object-cover"
              />
            </div>
            <blockquote className="text-xl italic text-gray-600 mb-6">
              "Remastering a chair takes time, but it's worth every penny."
            </blockquote>
            <p className="text-gray-600 mb-6">
              Andrew is an experienced and passionate individual with a 'find a way' attitude. A steadfast team player with a strong network throughout the region, Andrew has over 25 years of experience across the United States and China in industries like furniture, retail, branding, and children's recreation. He has collaborated with brands such as BMW, Mercedes, AMD, IBM, Tesla, Starbucks, and more.
            </p>
            <p className="text-gray-600">
              Passionate about the design and implementation of office environments, retail concepts, and wellness spaces, Andrew combines technical expertise with creative vision to bring unique concepts to life. His dedication to sustainability drives the mission behind 'Seating and More.'
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Store</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Store Hours</h3>
              <div className="flex items-center mb-2">
                <Clock className="text-green-600 mr-2" size={20} />
                <p className="text-gray-600">Tuesday–Friday: 11 AM–6 PM</p>
              </div>
              <div className="flex items-center">
                <Clock className="text-green-600 mr-2" size={20} />
                <p className="text-gray-600">Saturday–Sunday: 10 AM–5 PM</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Location</h3>
              <p className="text-gray-600 mb-4">1749 W Kirby Avenue, Champaign, Illinois</p>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodedAddress}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;