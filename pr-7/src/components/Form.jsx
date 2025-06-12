import { useState } from "react"

const Form = () => {
    const [input, setInput] = useState({});

    const handlechange = (e) => {
        console.log(e);
        setInput({ ...input, [e.target.id]: e.target.value })
    }
    console.log(input);
    return (
        <div>
            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-lg">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Course Registration Form</h2>
                    <form action="#" method="POST" className="space-y-5">

                        <div>
                            <label htmlFor="fname"  className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" id="fname" name="name" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={handlechange} />

                        </div>
                        <div>
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                            <div className="flex gap-4">
                                <label className="inline-flex items-center">
                                    <input type="radio" name="gender" defaultValue="male" className="text-indigo-600 focus:ring-indigo-500" required onChange={(e) => {
                                        setInput({ ...input, [e.target.name]: e.target.value })
                                    }} />
                                    <span className="ml-2 text-gray-700">Male</span>
                                </label>
                                <label htmlFor="gender" className="inline-flex items-center">
                                    <input type="radio" name="gender" defaultValue="female" className="text-indigo-600 focus:ring-indigo-500" required onChange={handlechange} />
                                    <span className="ml-2 text-gray-700">Female</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" name="gender" defaultValue="other" className="text-indigo-600 focus:ring-indigo-500" required onChange={handlechange} />
                                    <span className="ml-2 text-gray-700">Other</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={handlechange} />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={handlechange} />
                        </div>

                        <div>
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input type="password" id="confirm-password" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={handlechange} />
                        </div>

                        <div>
                            <label htmlFor="course" className="block text-sm font-medium text-gray-700">Select Course</label>
                            <select id="course" required className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                                <option value>-- Select Course --</option>
                                <option value="uiux">UI/UX Designer</option>
                                <option value="fullstack">Full Stack Developer</option>
                                <option value="graphic">Graphic Designer</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
                            <input type="tel" id="contact" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={handlechange} />
                        </div>

                        <div className="pt-4">
                            <button type="button" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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