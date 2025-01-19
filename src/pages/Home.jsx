import React from "react";
// import Map from "../components/Map";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <div className="my-16">
        <h1 className="text-4xl font-bold text-center max-[400px]:text-xl">
          Join India's Largest Cancer Care Community
        </h1>
        <p className="text-lg text-center text-gray-600 mt-4 mb-6">
          Support, guidance, and hope for cancer patients and their families
        </p>
        <div className="flex justify-center space-x-4">
          <RouterLink to="/join">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Join Us
            </button>
          </RouterLink>
        </div>
      </div>

      <div className="my-16">
        <h2 className="text-3xl font-semibold text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-xl">Find a Mentor</h3>
            </div>
            <div className="p-6">
              <p>
                Connect with experienced mentors who can guide you through your
                cancer journey.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-xl">Join Support Groups</h3>
            </div>
            <div className="p-6">
              <p>
                Participate in local or online support groups to share
                experiences and find comfort.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-xl">Attend Events</h3>
            </div>
            <div className="p-6">
              <p>
                Join our awareness events, workshops, and webinars to stay
                informed and connected.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <Map />
      </div> */}
    </div>
  );
}
