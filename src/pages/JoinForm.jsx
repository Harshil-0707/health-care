import React, { useState } from "react";
import InputFormElement from "../components/InputFormElement";

export default function JoinForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "volunteer",
    Expertise: "Oncology",
    Location: "Mumbai",
    Availability: "",
  });

  const volunteer = JSON.parse(localStorage.getItem("Volunteer")) || [];
  const professional = JSON.parse(localStorage.getItem("Professional")) || [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.role === "volunteer") {
      const updatedVolunteer = [...volunteer, formData];
      localStorage.setItem("Volunteer", JSON.stringify(updatedVolunteer));
    } else {
      const updatedProfessional = [...professional, formData];
      localStorage.setItem("Professional", JSON.stringify(updatedProfessional));
    }
    setFormData({
      name: "",
      email: "",
      role: "volunteer",
      Expertise: "Oncology",
      Location: "Mumbai",
      Availability: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Join Our Community
      </h1>
      <form onSubmit={handleSubmit}>
        <InputFormElement
          id="Name"
          type="text"
          value={formData.name}
          placeholder="Your name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <InputFormElement
          id="Email"
          type="email"
          value={formData.email}
          placeholder="Your email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="role"
          >
            Role
          </label>
          <select
            id="role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="mt-1 p-3 border border-gray-300 rounded-md w-full"
          >
            <option value="volunteer">Volunteer</option>
            <option value="professional">Healthcare Professional</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="Expertise"
          >
            Expertise
          </label>
          <select
            id="Expertise"
            value={formData.Expertise}
            onChange={(e) =>
              setFormData({ ...formData, Expertise: e.target.value })
            }
            className="mt-1 p-3 border border-gray-300 rounded-md w-full"
          >
            <option value="Oncology">Oncology</option>
            <option value="Palliative Care">Palliative Care</option>
            <option value="Survivorship">Survivorship</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="Location"
          >
            Location
          </label>
          <select
            value={formData.Location}
            onChange={(e) =>
              setFormData({ ...formData, Location: e.target.value })
            }
            className="mt-1 p-3 border border-gray-300 rounded-md w-full"
          >
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>
        <InputFormElement
          id="Availability"
          type="text"
          value={formData.Availability}
          placeholder="Ex: Mon,Tus,Fri"
          onChange={(e) =>
            setFormData({ ...formData, Availability: e.target.value })
          }
        />
        <button
          type="submit"
          className="w-full mt-4 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
