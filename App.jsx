
import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    phone: "",
    email: "",
    church: "",
    role: "",
    state: "",
    source: "",
    accommodation: "",
    prayer: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center py-10 px-4">
      <motion.img
        src="/flameshouse-logo.png"
        alt="FLAMESHOUSE Logo"
        className="w-28 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-yellow-700 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        National Pastors & Leaders Conference 2025
      </motion.h1>
      <p className="text-lg text-red-600 font-semibold mt-2">Theme: Seeing and Owning the Future</p>
      <p className="text-gray-700 mt-1">
        Fri. 7th – Sun. 9th November, 2025 | University of Nigeria, Enugu Campus
      </p>
      <div className="mt-8 w-full max-w-xl bg-white shadow-xl rounded-2xl p-6">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" placeholder="Full Name" required onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="gender" placeholder="Gender" required onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="phone" placeholder="Phone Number" required onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="email" placeholder="Email Address" type="email" onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="church" placeholder="Church / Ministry Name" required onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="role" placeholder="Role / Position" onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="state" placeholder="City / State" onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="source" placeholder="How did you hear about the conference?" onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="accommodation" placeholder="Need accommodation? (Yes/No)" onChange={handleChange} className="border p-2 w-full rounded" />
            <textarea name="prayer" placeholder="Any prayer requests or special needs (optional)" onChange={handleChange} className="border p-2 w-full rounded" />
            <button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 w-full rounded">
              Register
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-2">Registration Successful ✅</h2>
            <p className="text-gray-700">
              Thank you for registering for the National Pastors & Leaders Conference 2025.
            </p>
            <p className="text-gray-600 mt-2">
              A confirmation email will be sent to you shortly.
            </p>
            <button onClick={() => setSubmitted(false)} className="bg-blue-600 hover:bg-blue-700 text-white mt-4 py-2 px-6 rounded">
              Register Another Person
            </button>
          </div>
        )}
      </div>
      <div className="text-center mt-8 text-gray-600">
        <p>
          For enquiries, call: <strong>08147041064</strong> | <strong>07044507387</strong>
        </p>
        <p>
          Connect with us: <strong>@FLAMESHOUSE Int’l Church</strong>
        </p>
      </div>
    </div>
  );
}
