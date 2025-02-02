import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 w-full">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-3 max-md:grid-cols-1 text-center text-gray-700">
          <div className="mb-4 place-self-center md:pl-5">
            <h6 className="text-lg font-semibold mb-4">Contact Us</h6>
            <p className="text-sm mb-2">Phone: +91 123 456 7890</p>
            <p className="text-sm mb-2">Email: info@cancercarecommunity.org</p>
            <p className="text-sm">Address: 123 NGO Street, Mumbai, India</p>
          </div>

          <div className="w-36 mb-4 place-self-center">
            <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-blue-600 block mb-2"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-blue-600 block mb-2"
            >
              Terms of Service
            </a>
          </div>

          <div className="mb-4 place-self-center">
            <h6 className="text-lg font-semibold mb-4">Follow Us</h6>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-blue-600 block mb-2"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-blue-600 block mb-2"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-blue-600 block mb-2"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
