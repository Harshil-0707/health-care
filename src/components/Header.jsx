import React from "react";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 w-full">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between py-4 px-6">
        <RouterLink
          to="/"
          className="text-white text-xl font-semibold no-underline hover:text-blue-300"
        >
          Cancer Care Community
        </RouterLink>

        <nav className="space-x-4">
          <RouterLink to="/" className="text-white hover:text-blue-300">
            Home
          </RouterLink>
          <RouterLink to="/mentors" className="text-white hover:text-blue-300">
            Mentors
          </RouterLink>
          <RouterLink to="/members" className="text-white hover:text-blue-300">
            Healthcare Professional
          </RouterLink>
          <RouterLink
            to="/volunteer"
            className="text-white hover:text-blue-300"
          >
            Volunteer
          </RouterLink>
        </nav>
      </div>
    </header>
  );
}
