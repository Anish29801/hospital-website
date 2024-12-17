import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';
import { FaHeartbeat, FaStethoscope, FaHospitalAlt, FaAmbulance, FaUserMd, FaCapsules, FaVial } from 'react-icons/fa';

const Home = () => {
    const [doctors, setDoctors] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Background images array for the hero section
    const backgroundImages = [
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Yxy2DcMSbA2u5VLf8gIHUwHaFF%26pid%3DApi&f=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.rTMKLrxuJeaRdB5U3WZO2QHaGF%26pid%3DApi&f=1',
        'https://explorecvh.ca/wp-content/uploads/2018/02/Patient-Room-2.jpg',
        'https://cdnassets.hw.net/3d/29/281cbc974be089f71a6643ece547/52cd364253084b45b06bb5b083d5b065.jpg',
    ];

    useEffect(() => {
        // Fetch random doctors from randomuser.me API
        const fetchDoctors = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=6');
                const data = await response.json();
                setDoctors(
                    data.results.map((user) => ({
                        name: `${user.name.first} ${user.name.last}`,
                        image: user.picture.large,
                        specialization: 'Specialist in General Medicine',
                    }))
                );
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };
        fetchDoctors();

        // Auto-slide background images with smooth fade effect
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Typed.js for dynamic text
    useEffect(() => {
        const typedHeading = new Typed('.typed-heading', {
            strings: ['Your Health, Our Priority'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: false,
            showCursor: false,
        });

        const typedSubheading = new Typed('.typed-subheading', {
            strings: [
                'Experience world-class medical care with our expert team of doctors and advanced facilities.',
            ],
            typeSpeed: 40,
            backSpeed: 20,
            startDelay: 500,
            loop: false,
            showCursor: false,
        });

        return () => {
            typedHeading.destroy();
            typedSubheading.destroy();
        };
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <div
                className="relative bg-cover bg-center h-[80vh] text-white transition-all duration-1000 ease-in-out"
                style={{
                    backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
                    transition: 'background-image 1s ease-in-out',
                }}
            >
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative z-10 max-w-screen-xl mx-auto p-8 flex flex-col items-center justify-center text-center space-y-6">
                    <h1 className="text-5xl font-bold typed-heading mt-16"></h1>
                    <p className="text-lg typed-subheading mt-4"></p>
                    <div className="flex space-x-4 mt-4">
                        <a href="/appointments">
                            <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg">
                                Book Appointment
                            </button>
                        </a>
                        <a href="/departments">
                            <button className="bg-white hover:bg-gray-100 text-red-600 font-medium py-2 px-4 rounded-lg border border-red-600">
                                View Services →
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Core Medical Services Section */}
            <h2 className="text-3xl font-bold text-center mt-12 mb-6">Our Key Medical Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-screen-xl mx-auto">
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <FaCapsules className="text-green-600 text-4xl mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Pharmacy</h3>
                    <p className="text-gray-600">Access to essential medications and expert advice.</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <FaAmbulance className="text-green-600 text-4xl mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Emergency Transport</h3>
                    <p className="text-gray-600">Swift and reliable ambulance services 24/7.</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <FaVial className="text-purple-600 text-4xl mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Laboratory Services</h3>
                    <p className="text-gray-600">Comprehensive diagnostic testing for accurate results.</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <FaUserMd className="text-orange-600 text-4xl mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Health Checkups</h3>
                    <p className="text-gray-600">Regular checkups to monitor and maintain your health.</p>
                </div>
            </div>

            {/* Meet Our Doctors */}
            <h2 className="text-3xl font-bold text-center mt-16 mb-6">Meet Our Doctors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-screen-xl mx-auto">
                {doctors.map((doctor, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-2xl font-semibold mb-2">Dr. {doctor.name}</h3>
                        <p className="text-gray-600">{doctor.specialization}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
