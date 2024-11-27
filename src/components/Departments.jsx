import React from "react";
import { FaHeartbeat, FaBrain, FaBone, FaChild, FaUserMd, FaRibbon } from "react-icons/fa";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Department data
const departments = [
  {
    id: 1,
    name: "Cardiology",
    description:
      "Comprehensive care for all heart-related conditions, including diagnostics, surgery, and rehabilitation.",
    icon: <FaHeartbeat className="text-red-500 text-6xl" />,
    link: "/cardiology",
  },
  {
    id: 2,
    name: "Neurology",
    description:
      "Advanced treatments for brain and nervous system disorders, led by a team of expert neurologists.",
    icon: <FaBrain className="text-green-500 text-6xl" />,
    link: "/neurology",
  },
  {
    id: 3,
    name: "Orthopedics",
    description:
      "Specialized care for bone and joint conditions, with cutting-edge surgical and non-surgical options.",
    icon: <FaBone className="text-gray-500 text-6xl" />,
    link: "/orthopedics",
  },
  {
    id: 4,
    name: "Pediatrics",
    description:
      "Dedicated care for children and adolescents, focusing on their physical, emotional, and social well-being.",
    icon: <FaChild className="text-green-500 text-6xl" />,
    link: "/pediatrics",
  },
  {
    id: 5,
    name: "Dermatology",
    description:
      "Comprehensive skin care and cosmetic treatments, addressing a wide range of dermatological needs.",
    icon: <FaUserMd className="text-yellow-500 text-6xl" />,
    link: "/dermatology",
  },
  {
    id: 6,
    name: "Oncology",
    description:
      "Cutting-edge cancer care with personalized treatment plans and state-of-the-art therapies.",
    icon: <FaRibbon className="text-pink-500 text-6xl" />,
    link: "/oncology",
  },
];

// Pie chart data
const pieData = {
  labels: departments.map((department) => department.name),
  datasets: [
    {
      label: "Appointments by Department",
      data: [25, 15, 20, 10, 18, 12], // Example data
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Departments = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Explore Our Medical Departments
          </h2>
          <p className="mt-4 text-gray-600">
            Our hospital offers a wide range of specialized medical services to cater to your health needs.
          </p>
        </div>

        {/* Pie Chart Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">Appointments Breakdown</h3>
          <p className="mt-4 text-gray-600">
            Our data speaks for our success in our field.
          </p>
          <div className="max-w-md mx-auto mt-8">
            <Pie data={pieData} />
          </div>
        </div>

        {/* Department Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16">
          {departments.map((department) => (
            <div
              key={department.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center p-8">
                {/* Icon */}
                <div>{department.icon}</div>
                {/* Name */}
                <h3 className="mt-6 text-2xl font-semibold text-gray-800">{department.name}</h3>
                {/* Description */}
                <p className="mt-4 text-gray-600 text-center">{department.description}</p>
                {/* Learn More Button */}
                <a
                  href={department.link}
                  className="mt-6 inline-block px-6 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            Need personalized care or have questions about our departments?
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block px-8 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Departments;
