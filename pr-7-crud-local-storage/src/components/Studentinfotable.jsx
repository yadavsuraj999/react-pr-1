const Studentinfotable = ({ studentData, deleteuser }) => {

    const handledelete = (student) =>{
        deleteuser(student)
    }

  return (
    <div className="container mx-auto">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Gender</th>
              <th className="px-6 py-3">Password</th>
              <th className="px-6 py-3">Course</th>
              <th className="px-6 py-3">Contact</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((item) => (
              <tr key={item.email} className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                <th className="px-6 py-4 font-medium text-gray-900">{item.fname}</th>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.gender}</td>
                <td className="px-6 py-4">{item.password}</td>
                <td className="px-6 py-4">{item.course}</td>
                <td className="px-6 py-4">{item.contact}</td>
                <td className="px-6 py-4 flex gap-3">
                  <button  className="text-blue-600 hover:underline">Edit</button>
                  <button onClick={handledelete} className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Studentinfotable;
