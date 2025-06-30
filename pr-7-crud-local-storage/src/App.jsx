import { useEffect, useState } from "react";
import Form from "./components/Form";
import Studentinfotable from "./components/Studentinfotable";

const App = () => {
  const [userdata, setUserData] = useState([]);
  const [edituser, setEditUser] = useState(null);

  // Load data on mount
  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("studentData")) || [];
    setUserData(existing);
  }, []);

  // Persist data
  useEffect(() => {
    localStorage.setItem("studentData", JSON.stringify(userdata));
  }, [userdata]);

  const addStudent = (studentData) => {
    if (edituser) {
      setUserData((prev) =>
        prev.map((u) => (u.id === studentData.id ? studentData : u))
      );
      setEditUser(null);
    } else {
      setUserData((prev) => [...prev, { ...studentData, id: Date.now() }]);
    }
  };

  const deleteUser = (student) => {
    setUserData((prev) => prev.filter((u) => u.id !== student.id));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      <div className="w-full max-w-4xl">
        <Form addStudent={addStudent} editUser={edituser} />
        <Studentinfotable
          studentData={userdata}
          getEditUser={setEditUser}
          deleteuser={deleteUser}
        />
      </div>
    </div>
  );
};

export default App;
