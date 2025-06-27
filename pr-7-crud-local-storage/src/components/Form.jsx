import { useRef, useState } from "react";

const Form = ({ addStudent }) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const contactRegex = /^[0-9]{10}$/;

  const [input, setInput] = useState({
    fname: "",
    email: "",
    password: "",
    confirmpassword: "",
    course: "",
    contact: "",
    gender: "",
  });

  const [error, setError] = useState({});
  const inputref = useRef(null);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let errorObj = {};

    if (input.fname.trim() === "") {
      errorObj.fname = "Please enter your name.";
    }
    if (input.email.trim() === "" || !emailRegex.test(input.email)) {
      errorObj.email = "Please enter a valid email.";
    }
    if (input.password.trim() === "") {
      errorObj.password = "Please enter your password.";
    } else if (input.password.length < 8) {
      errorObj.password = "Password should be at least 8 characters long.";
    }
    if (input.confirmpassword.trim() === "") {
      errorObj.confirmpassword = "Please confirm your password.";
    }
    if (input.password !== input.confirmpassword) {
      errorObj.password = "Passwords do not match.";
      errorObj.confirmpassword = "Passwords do not match.";
    }
    if (input.course.trim() === "") {
      errorObj.course = "Please select a course.";
    }
    if (input.contact.trim() === "" || !contactRegex.test(input.contact)) {
      errorObj.contact = "Please enter a valid 10-digit phone number.";
    }
    if (input.gender === "") {
      errorObj.gender = "Please select a gender.";
    }

    setError(errorObj);

    if (Object.keys(errorObj).length > 0) return;

    addStudent(input);

    // Reset form
    setInput({
      fname: "",
      email: "",
      password: "",
      confirmpassword: "",
      course: "",
      contact: "",
      gender: "",
    });
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Course Registration Form
        </h2>
        <form className="space-y-5" onSubmit={handlesubmit} ref={inputref}>
          {/* Full Name */}
          <div>
            <label htmlFor="fname" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fname"
              value={input.fname}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              onChange={handlechange}
            />
            {error.fname && <p className="text-sm text-red-600">{error.fname}</p>}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <div className="flex gap-4">
              {["male", "female", "other"].map((g) => (
                <label key={g} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={input.gender === g}
                    onChange={handlechange}
                  />
                  <span className="ml-2 text-gray-700 capitalize">{g}</span>
                </label>
              ))}
            </div>
            {error.gender && <p className="text-sm text-red-600">{error.gender}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={input.email}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              onChange={handlechange}
            />
            {error.email && <p className="text-sm text-red-600">{error.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={input.password}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              onChange={handlechange}
            />
            {error.password && <p className="text-sm text-red-600">{error.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmpassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmpassword"
              value={input.confirmpassword}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              onChange={handlechange}
            />
            {error.confirmpassword && <p className="text-sm text-red-600">{error.confirmpassword}</p>}
          </div>

          {/* Course */}
          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-700">
              Select Course
            </label>
            <select
              name="course"
              value={input.course}
              onChange={handlechange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm"
            >
              <option value="">-- Select Course --</option>
              <option value="uiux">UI/UX Designer</option>
              <option value="fullstack">Full Stack Developer</option>
              <option value="graphic">Graphic Designer</option>
            </select>
            {error.course && <p className="text-sm text-red-600">{error.course}</p>}
          </div>

          {/* Contact */}
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              name="contact"
              value={input.contact}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              onChange={handlechange}
            />
            {error.contact && <p className="text-sm text-red-600">{error.contact}</p>}
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
