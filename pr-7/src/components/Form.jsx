import { useState } from "react"

const Form = ({ addStudent }) => {

    const [input, setInput] = useState({
        fname: "",
        email: "",
        password: "",
        confirmpassword: "",
        course: "",
        phone: ""
    });
    const [error, setError] = useState(null)
    const handlechange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        let errorObj = {}
        if (input.fname.trim() === "") errorObj.fname = "please enter your name...";
        setError(errorObj)

        addStudent(input)
    }
    console.log(error);
    return (
        <div>
            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-lg">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Course Registration Form</h2>
                    <form className="space-y-5" onSubmit={handlesubmit}>

                        <div>
                            <label htmlFor="fname" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" id="fname" name="name" value={input.fname} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={handlechange} />
                            {error && <p>{error.fname}</p>}

                        </div>
                        {/* gender */}
                        <div>
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                            <div className="flex gap-4">
                                <label className="inline-flex items-center">
                                    <input type="radio" name="gender" value="male" className="text-indigo-600 focus:ring-indigo-500" onChange={(e) => {
                                        setInput({ ...input, [e.target.name]: e.target.value })
                                    }} />
                                    <span className="ml-2 text-gray-700">Male</span>
                                </label>
                                <label htmlFor="gender" className="inline-flex items-center">
                                    <input type="radio" name="gender" value="female" className="text-indigo-600 focus:ring-indigo-500" onChange={(e) => {
                                        setInput({ ...input, [e.target.name]: e.target.value })
                                    }} />
                                    <span className="ml-2 text-gray-700">Female</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" name="gender" value="other" className="text-indigo-600 focus:ring-indigo-500" onChange={(e) => {
                                        setInput({ ...input, [e.target.name]: e.target.value })
                                    }} />
                                    <span className="ml-2 text-gray-700">Other</span>
                                </label>
                            </div>
                        </div>
                        {/* email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" value={input.email} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={handlechange} />
                        </div>
                        {/* password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" value={input.password} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={handlechange} />
                        </div>
                        {/* confirm-password */}
                        <div>
                            <label htmlFor="confirmpassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input type="password" id="confirm-password" value={input.confirmpassword} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={handlechange} />
                        </div>
                        {/* course */}
                        <div>
                            <label htmlFor="course" className="block text-sm font-medium text-gray-700">Select Course</label>
                            <select id="course" value={input.course} onChange={handlechange} className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                                <option value="course">-- Select Course --</option>
                                <option value="uiux">UI/UX Designer</option>
                                <option value="fullstack">Full Stack Developer</option>
                                <option value="graphic">Graphic Designer</option>
                            </select>
                        </div>
                        {/* phone number */}
                        <div>
                            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
                            <input type="tel" id="contact" value={input.phone} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={handlechange} />
                        </div>

                        <div className="pt-4">
                            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Form