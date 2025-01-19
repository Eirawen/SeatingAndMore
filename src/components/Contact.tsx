import React from 'react';
import { Mail, Phone, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our products or services? We'd love to hear from you!
            </p>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Connect With Us</h2>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="text-green-600 mr-4" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@seatingandmore.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="text-green-600 mr-4" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">(217) 555-0123</p>
                </div>
              </div>

              <div className="flex items-center">
                <Facebook className="text-green-600 mr-4" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Social Media</h3>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Follow us on Facebook
                  </a>
                </div>
              </div>

              <p className="text-gray-600 mt-8">
                Follow us for updates on our latest products and sustainability efforts!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;