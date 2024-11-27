import React from "react";

const Doctor = ({ doctors, loading, error }) => {
    // Sample testimonials data
    const testimonials = [
        {
            name: "John Doe",
            feedback: "Dr. Johnson went above and beyond to ensure I received the best care possible. Highly recommended!",
            rating: 5,
            photo: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Jane Smith",
            feedback: "I appreciated the detailed explanation and compassionate care from Dr. Emily. She’s the best!",
            rating: 4,
            photo: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "Emily Johnson",
            feedback: "The clinic was clean, and the staff was welcoming. Dr. Mark is a true professional!",
            rating: 5,
            photo: "https://randomuser.me/api/portraits/women/19.jpg",
        },
        {
            name: "Michael Brown",
            feedback: "I’ve never felt more comfortable during a visit. Dr. Anne really listens to her patients.",
            rating: 5,
            photo: "https://randomuser.me/api/portraits/men/47.jpg",
        },
    ];

    if (loading) {
        return <p className="text-center text-gray-500">Loading doctors...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="doctor-container max-w-7xl mx-auto p-6">
            {/* Banner Section */}
            <div className="banner relative w-full h-64 md:h-96 mb-8">
                <img
                    src="https://explorecvh.ca/wp-content/uploads/2018/02/Patient-Room-2.jpg" // Example image
                    alt="Healthcare Banner"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
                        Welcome to Our Healthcare Center
                    </h1>
                </div>
            </div>

            {/* Header Section */}
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">Meet Our Expert Doctors</h1>
                <p className="text-gray-600 mt-2">
                    Our dedicated team of doctors is here to provide the best healthcare services.
                </p>
            </header>

            {/* Doctors Grid */}
            <div className="doctors-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {doctors.map((doctor, index) => (
                    <div
                        key={index}
                        className="doctor-card bg-gray-100 shadow-lg rounded-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col items-center p-6"
                    >
                        <img
                            src={doctor.picture.large}
                            alt={`${doctor.name.first} ${doctor.name.last}`}
                            className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-md"
                        />
                        <div className="text-center mt-4">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Dr. {doctor.name.first} {doctor.name.last}
                            </h2>
                            <p className="text-gray-600 text-sm mt-1">
                                {doctor.location.city}, {doctor.location.state}
                            </p>
                            <p className="text-gray-700 text-sm mt-2">
                                Specialization: <span className="font-bold">Cardiology</span>
                            </p>
                        </div>
                        <button className="mt-6 px-6 py-2 bg-green-500 text-white font-medium text-sm rounded-full hover:bg-green-600 shadow-md hover:shadow-lg transition-all duration-300">
                            Book Appointment
                        </button>
                    </div>
                ))}
            </div>

            {/* Testimonial Section */}
            <section className="testimonials mt-12 bg-gray-100 p-8 rounded-lg shadow-md">
                <h2 className="text-center text-3xl font-bold mb-6">What Our Patients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="testimonial-card bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.photo}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full border-2 border-gray-300 mr-4"
                                />
                                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                            </div>
                            <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
                            <p className="text-yellow-500 mt-4">
                                {"★".repeat(testimonial.rating) + "☆".repeat(5 - testimonial.rating)}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Doctor;
