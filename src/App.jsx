import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Doctor from "./components/Doctor.jsx";
import Departments from "./components/Departments.jsx";
import Appointments from "./components/Appointments.jsx";

const App = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchDoctors = async () => {
        try {
            const response = await fetch("https://randomuser.me/api/?results=10&nat=us");
            const data = await response.json();
            setDoctors(data.results);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching doctors:", err);
            setError("Failed to fetch doctor data.");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDoctors();
    }, []);

    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/departments" element={<Departments />} />
                    <Route
                        path="/doctors"
                        element={<Doctor doctors={doctors} loading={loading} error={error} />}
                    />
                    <Route
                        path="/appointments"
                        element={<Appointments doctors={doctors} />}
                    />
                    <Route
                        path="/appointment"
                        element={<Appointments />}
                    />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
};

export default App;
