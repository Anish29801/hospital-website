import React, { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";

const Appointments = ({ }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    message: "",
  });
  const hospitalPhoneNumber = "+18001234567";

  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, doctor, message } = formData;

    if (!name || !email || !phone || !doctor || !message) {
      alert("Please fill in all the fields.");
      return;
    }

    setSuccessMessage(
      `Thank you, ${name}. Your appointment request has been sent successfully!`
    );

    setFormData({ name: "", email: "", phone: "", doctor: "", message: "" });
  };

  return (
    <div className="contact-us-container max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Book an Appointment</h1>
      <p className="text-center text-gray-600 mb-8">
        Use the form below to book an appointment with our specialists.
      </p>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-center mb-4">Contact the Hospital</h2>
        <div className="flex items-center mb-4">
          <FaPhoneAlt className="text-green-500 mr-3" />
          <p className="text-gray-700 font-medium">+1-800-123-4567</p>
        </div>
        <div className="flex items-center mb-4">
          <FaMapMarkerAlt className="text-red-500 mr-3" />
          <p className="text-gray-700 font-medium">123 Health St, Wellness City, TX</p>
        </div>
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-green-500 mr-3" />
          <p className="text-gray-700 font-medium">contact@hospital.com</p>
        </div>
        <div className="flex items-center">
          <FaClock className="text-yellow-500 mr-3" />
          <p className="text-gray-700 font-medium">Mon-Fri: 9:00 AM - 6:00 PM</p>
        </div>
      </div>

      <form
        onSubmit={handleFormSubmit}
        className="bg-gray-100 p-6 rounded-lg shadow-lg"
      >
        {successMessage && (
          <p className="text-green-600 font-medium text-center mb-4">
            {successMessage}
          </p>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Your Full Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Your Email Address"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Your Phone Number"
          />
        </div>
        <a href={`tel:${hospitalPhoneNumber}`}>
          <button
            type="button"
            className="w-full py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-all"
          >
            Call Now
          </button>
        </a>
      </form>
    </div>
  );
};

export default Appointments;
