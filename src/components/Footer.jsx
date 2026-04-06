import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] text-gray-300">
      {/* CTA Section */}
      <div className="bg-linear-to-r from-violet-600 to-indigo-600 text-white text-center py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-sm md:text-base mb-6 opacity-90">
          Join thousands of professionals who are already using DigiTools to work smarter.
          <br />
          Start your free trial today.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100">
            Explore Products
          </button>
          <button className="border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-purple-600">
            View Pricing
          </button>
        </div>
        <p className="text-xs mt-4 opacity-80">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold text-white mb-3">DigiTools</h3>
          <p className="text-sm text-gray-400">
            Premium digital tools for creators, professionals, and businesses. Work smarter
            with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-white font-medium mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-medium mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">F</div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">T</div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">X</div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2026 DigiTools. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
}
