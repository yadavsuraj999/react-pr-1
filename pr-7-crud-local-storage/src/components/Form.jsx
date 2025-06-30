import { useEffect, useRef, useState } from "react";

const Form = ({ addStudent, editUser }) => {
  const initial = {
    fname: "",
    email: "",
    password: "",
    confirmpassword: "",
    course: "",
    contact: "",
    gender: "",
  };

  const [input, setInput] = useState(initial);
  const [error, setError] = useState({});
  const formRef = useRef(null);

  // Prefill when editing
  useEffect(() => {
    if (editUser) {
      setInput({ ...editUser, confirmpassword: editUser.password });
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [editUser]);

  const handlechange = (e) =>
    setInput((i) => ({ ...i, [e.target.name]: e.target.value }));

  const handlesubmit = (e) => {
    e.preventDefault();
    const errs = {};

    if (!input.fname.trim()) errs.fname = "Full name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email))
      errs.email = "A valid email is required.";
    if (input.password.length < 8)
      errs.password = "Password must be at least 8 characters.";
    if (input.password !== input.confirmpassword)
      errs.confirmpassword = "Passwords must match.";
    if (!input.gender) errs.gender = "Please select your gender.";
    if (!["uiux", "fullstack", "graphic"].includes(input.course))
      errs.course = "Please select a course.";
    if (!/^\d{10}$/.test(input.contact))
      errs.contact = "Contact must be a 10‑digit number.";

    setError(errs);
    if (Object.keys(errs).length) return;

    addStudent(input);
    setInput(initial);
  };

  return (
    <div ref={formRef} className="bg-white shadow-md rounded-lg p-8 mb-8 ">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
        {editUser ? "Edit Student" : "Register New Student"}
      </h2>
      <form onSubmit={handlesubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="col-span-1 md:col-span-2">
          <label className="font-medium text-gray-700">Full Name</label>
          <input
            name="fname"
            value={input.fname}
            onChange={handlechange}
            className={`mt-1 block w-full border px-4 py-2 rounded-md ${
              error.fname ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error.fname && <p className="text-red-600 text-sm mt-1">{error.fname}</p>}
        </div>

        {/* Gender */}
        <div>
          <label className="font-medium text-gray-700">Gender</label>
          <div className="mt-1 flex gap-4">
            {["male", "female", "other"].map((g) => (
              <label key={g} className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={input.gender === g}
                  onChange={handlechange}
                  className="h-4 w-4 text-indigo-600"
                />
                <span className="ml-2 capitalize text-gray-700">{g}</span>
              </label>
            ))}
          </div>
          {error.gender && <p className="text-red-600 text-sm">{error.gender}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handlechange}
            className={`mt-1 block w-full border px-4 py-2 rounded-md ${
              error.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error.email && <p className="text-red-600 text-sm">{error.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handlechange}
            className={`mt-1 block w-full border px-4 py-2 rounded-md ${
              error.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error.password && <p className="text-red-600 text-sm">{error.password}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
            value={input.confirmpassword}
            onChange={handlechange}
            className={`mt-1 block w-full border px-4 py-2 rounded-md ${
              error.confirmpassword ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error.confirmpassword && (
            <p className="text-red-600 text-sm">{error.confirmpassword}</p>
          )}
        </div>

        {/* Course */}
        <div>
          <label className="font-medium text-gray-700">Course</label>
          <select
            name="course"
            value={input.course}
            onChange={handlechange}
            className={`mt-1 block w-full border px-4 py-2 rounded-md ${
              error.course ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select a course...</option>
            <option value="uiux">UI/UX Designer</option>
            <option value="fullstack">Full Stack Developer</option>
            <option value="graphic">Graphic Designer</option>
          </select>
          {error.course && <p className="text-red-600 text-sm">{error.course}</p>}
        </div>

        {/* Contact */}
        <div>
          <label className="font-medium text-gray-700">Contact Number</label>
          <input
            type="tel"
            name="contact"
            value={input.contact}
            onChange={handlechange}
            className={`mt-1 block w-full border px-4 py-2 rounded-md ${
              error.contact ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error.contact && <p className="text-red-600 text-sm">{error.contact}</p>}
        </div>

        {/* Submit */}
        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            {editUser ? "Update Student" : "Register Student"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
