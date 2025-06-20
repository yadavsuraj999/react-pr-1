import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = ({ setIsLoggedin }) => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const handlechange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        if (input.email == "admin@gmail.com" && input.password == "admin@123") {
            toast.success("Logged In SuccesFully");
            setIsLoggedin(true)
            localStorage.setItem("isloggedin", JSON.parse(true))
            navigate("/employee")
        } else {
            toast.error("user or password was worng")
        }
        setInput({
            email: "",
            password: ""
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Admin Panel Login
                </h2>
                <form className="space-y-5" onSubmit={handlesubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                        </label>
                        <input
                            type="text" id="email" value={input.email}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="admin@example.com" onChange={handlechange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password" id="password" value={input.password}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••" onChange={handlechange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold "
                    >
                        Login
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Login;
