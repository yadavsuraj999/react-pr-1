import Form from "./components/Form";
import { useEffect, useState } from "react";
import Studentinfotable from "./components/Studentinfotable";

const App = () => {
  const [userdata, setUserData] = useState([]);
  

  useEffect(() => {
   const studentdata = JSON.parse(localStorage.getItem("studentData")) || [];
   setUserData(studentdata)
  }, []);

  useEffect(() => {
    localStorage.setItem("studentData", JSON.stringify(userdata));
  }, [userdata]);

  function addStudent(studentData) {
    setUserData([...userdata, studentData]);
  }

  const Deleteuser = (student)=>{
      const getuser = userdata.filter((deleteuser)=>{
        return userdata.id !== student.id
      })
      setUserData(getuser)
  }

  return (
    <div>
      <Form addStudent={addStudent} />
      <Studentinfotable studentData = {userdata} deleteuser = {Deleteuser}/>
    </div>
  );
};

export default App;
