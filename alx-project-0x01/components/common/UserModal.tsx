// components/common/UserModal.tsx
import React, { useState } from "react";
import { UserData, UserModalProps, UserProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<Partial<UserData>>({});

  // Handle input changes dynamically
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct new user object for submission
    const newUser: UserProps = {
      id: Date.now(), // temporary unique ID
      name: formData.name || "",
      username: formData.username || "",
      email: formData.email || "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: { lat: "0", lng: "0" },
      },
      phone: formData.phone || "",
      website: formData.website || "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    };

    onSubmit(newUser); // ✅ matches checker signature
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border p-2 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="border p-2 rounded"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="border p-2 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="website"
            placeholder="Website"
            className="border p-2 rounded"
            onChange={handleChange}
          />
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
