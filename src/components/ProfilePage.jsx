import React, { useState } from "react";
import { FaUser, FaEdit, FaHistory, FaHeart, FaCog } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        address: "123 Tea Lane, Green Valley, Earth",
        phone: "+123 456 7890",
    });

    const orders = [
        { id: 1, date: "2023-10-01", total: "$35.98", status: "Delivered" },
        { id: 2, date: "2023-09-25", total: "$18.99", status: "Shipped" },
        { id: 3, date: "2023-09-20", total: "$50.97", status: "Processing" },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSave = () => {
        setIsEditing(false);
        // Here you would typically send the updated user data to your backend
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[#f3f6f3] text-gray-800 font-kulim">
                {/* Profile Header */}
                <section className="relative h-64 bg-cover bg-center bg-no-repeat">
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white px-4 sm:px-10">
                        <div className="text-center">
                            <motion.h1
                                className="text-6xl font-extrabold mb-4 text-shadow-md"
                                animate={{ opacity: [0, 1], y: [50, 0] }}
                                transition={{ duration: 1 }}
                            >
                                My Profile
                            </motion.h1>
                        </div>
                    </div>
                </section>

                {/* Profile Content */}
                <section className="max-w-6xl mx-auto py-20 px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* User Info Section */}
                        <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-3xl font-bold text-green-900 flex items-center">
                                    <FaUser className="mr-2" /> Personal Information
                                </h2>
                                <button
                                    onClick={() => setIsEditing(!isEditing)}
                                    className="bg-green-900 text-white py-2 px-4 rounded-full hover:bg-[#183d14] transition duration-300 flex items-center"
                                >
                                    <FaEdit className="mr-2" /> {isEditing ? "Cancel" : "Edit"}
                                </button>
                            </div>

                            {isEditing ? (
                                <form>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-gray-700">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={user.name}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={user.email}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700">Address</label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={user.address}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700">Phone</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                value={user.phone}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 rounded-lg"
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={handleSave}
                                            className="bg-green-900 text-white py-2 px-4 rounded-full hover:bg-[#183d14] transition duration-300"
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="space-y-4">
                                    <p><strong>Name:</strong> {user.name}</p>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Address:</strong> {user.address}</p>
                                    <p><strong>Phone:</strong> {user.phone}</p>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center">
                                <FaCog className="mr-2" /> Settings
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-700 hover:text-green-900 transition duration-300">
                                    <FaHistory className="mr-2" /> Order History
                                </li>
                                <li className="flex items-center text-gray-700 hover:text-green-900 transition duration-300">
                                    <FaHeart className="mr-2" /> Favorites
                                </li>
                                <li className="flex items-center text-gray-700 hover:text-green-900 transition duration-300">
                                    <FaCog className="mr-2" /> Account Settings
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Order History Section */}
                    <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center">
                            <FaHistory className="mr-2" /> Order History
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b">Order ID</th>
                                        <th className="py-2 px-4 border-b">Date</th>
                                        <th className="py-2 px-4 border-b">Total</th>
                                        <th className="py-2 px-4 border-b">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order.id} className="hover:bg-gray-50 transition duration-300">
                                            <td className="py-2 px-4 border-b text-center">{order.id}</td>
                                            <td className="py-2 px-4 border-b text-center">{order.date}</td>
                                            <td className="py-2 px-4 border-b text-center">{order.total}</td>
                                            <td className="py-2 px-4 border-b text-center">{order.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default ProfilePage;