import React, { useState } from "react";

const mentors = [
  {
    id: 1,
    name: "Dr. Anita Sharma",
    expertise: "Oncology",
    location: "Mumbai",
    availability: "Mon, Wed, Fri",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    expertise: "Survivorship",
    location: "Delhi",
    availability: "Tue, Thu, Sat",
  },
  {
    id: 3,
    name: "Dr. Priya Gupta",
    expertise: "Palliative Care",
    location: "Bangalore",
    availability: "Mon-Fri",
  },
];

export default function Mentors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expertiseFilter, setExpertiseFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (expertiseFilter === "" || mentor.expertise === expertiseFilter) &&
      (locationFilter === "" || mentor.location === locationFilter)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Members</h1>

      <div className="mb-8 flex gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search members"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-64"
        />
        <select
          value={expertiseFilter}
          onChange={(e) => setExpertiseFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">All Expertise</option>
          <option value="Oncology">Oncology</option>
          <option value="Survivorship">Survivorship</option>
          <option value="Palliative Care">Palliative Care</option>
        </select>
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">All Locations</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredMentors.map((mentor) => (
          <div key={mentor.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">{mentor.name}</h2>
            <p className="text-sm text-gray-500">{mentor.expertise}</p>
            <p className="text-sm mt-2">Location: {mentor.location}</p>
            <p className="text-sm">Availability: {mentor.availability}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
