import React, { useState, useEffect } from "react";
import SelectType from "../components/SelectType";

export default function Layout({ Member, setMember, store }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expertiseFilter, setExpertiseFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    const Members = JSON.parse(localStorage.getItem(store));
    if (Members) {
      setMember([...Member, ...Members]);
    }
  }, []);

  const filteredVolunteers = Member.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (expertiseFilter === "" || member.Expertise === expertiseFilter) &&
      (locationFilter === "" || member.Location === locationFilter)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our {store}s</h1>

      <div className="mb-8 flex gap-4 flex-wrap">
        <input
          type="text"
          placeholder={`Search ${store}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-64 max-[452px]:w-full"
        />
        <SelectType
          typeFilter={expertiseFilter}
          setTypeFilter={setExpertiseFilter}
          optionValue={[
            "All Expertise",
            "Oncology",
            "Palliative Care",
            "Survivorship",
          ]}
        />
        <SelectType
          typeFilter={locationFilter}
          setTypeFilter={setLocationFilter}
          optionValue={["All Locations", "Mumbai", "Delhi", "Bangalore"]}
        />
      </div>

      <div className="grid grid-cols-3 max-[860px]:grid-cols-2 max-[578px]:grid-cols-1 gap-6">
        {filteredVolunteers.map((members, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">{members.name}</h2>
            <p className="text-sm text-gray-500">{members.Expertise}</p>
            <p className="text-sm mt-2">Location: {members.Location}</p>
            <p className="text-sm">Availability: {members.Availability}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
