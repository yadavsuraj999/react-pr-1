import Form from "./components/Form"
import { useEffect, useState } from "react"

const App = () => {

  const [userdata, setUserData] = useState([])

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("studentData")) || []);
  }, [])


  useEffect(() => {
    localStorage.setItem("studentData", JSON.stringify(userdata));
  }, [userdata])


  function addStudent(studentData) {
    setUserData([...userdata, studentData])
  }

  return (
    <div>
      <Form addStudent={addStudent} />
    </div>
  )
}

export default App