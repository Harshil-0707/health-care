import React, { useState } from "react";
import FormElement from "../components/FormElement";

export default function JoinForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    Expertise: "",
    Location: "",
    Availability: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      role: "",
      Expertise: "",
      Location: "",
      Availability: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Join Our Community
      </h1>
      <form onSubmit={handleSubmit}>
        <FormElement
          id="name"
          type="text"
          text="Name"
          htmlFor="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <FormElement
          id="email"
          type="email"
          text="Email"
          htmlFor="email"
          value={formData.email}
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
        {formData.role === "professional" && (
          <>
            <FormElement
              id="Expertise"
              type="text"
              text="Expertise"
              htmlFor="Expertise"
              value={formData.Expertise}
              onChange={(e) =>
                setFormData({ ...formData, Expertise: e.target.value })
              }
            />
            <FormElement
              id="Location"
              type="text"
              text="Location"
              htmlFor="Location"
              value={formData.Location}
              onChange={(e) =>
                setFormData({ ...formData, Location: e.target.value })
              }
            />
            <FormElement
              id="Availability"
              type="text"
              text="Availability"
              htmlFor="Availability"
              value={formData.Availability}
              onChange={(e) =>
                setFormData({ ...formData, Availability: e.target.value })
              }
            />
          </>
        )}
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
