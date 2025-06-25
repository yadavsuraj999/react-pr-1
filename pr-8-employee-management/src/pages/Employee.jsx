import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeTable from "../components/EmployeeTable";

const Employee = () => {
  const [employee, setEmployee] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let employeedata = JSON.parse(localStorage.getItem("employee")) || [];
    setEmployee(employeedata);
  }, []);

  const onDelete = (id) => {
    const updatedEmployee = employee.filter((emp) => emp.id !== id);
    setEmployee(updatedEmployee);
    localStorage.setItem("employee", JSON.stringify(updatedEmployee));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-x-32 translate-y-32"></div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h4 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-2 tracking-wide">
              Employee Directory
            </h4>
            <p className="text-gray-300 max-w-md">
              Manage your team members and their information
            </p>
          </div>

          <button
            onClick={() => navigate("/addemployee")}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="text-lg font-bold">+</span>
            <span>Add Employee</span>
          </button>
        </div>

        <div className="bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
          {employee.length > 0 ? (
            <EmployeeTable employee={employee} onDelete={onDelete} />
          ) : (
            <div className="text-center py-20 px-4">
              <div className="text-7xl mb-6">👥</div>
              <h1 className="text-3xl font-bold text-gray-200 mb-4">
                No Employees Found
              </h1>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Start building your team by adding your first employee
              </p>
              <button
                onClick={() => navigate("/addemployee")}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                Add First Employee
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Employee;
