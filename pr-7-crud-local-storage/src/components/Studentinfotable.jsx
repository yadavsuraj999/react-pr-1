const Studentinfotable = ({ studentData, getEditUser, deleteuser }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {["Name", "Email", "Gender", "Password", "Course", "Contact", "Action"].map(
              (h) => (
                <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  {h}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {studentData.map((s) => (
            <tr key={s.id}>
              <td className="px-6 py-4">{s.fname}</td>
              <td className="px-6 py-4">{s.email}</td>
              <td className="px-6 py-4">{s.gender}</td>
              <td className="px-6 py-4">{s.password}</td>
              <td className="px-6 py-4">{s.course}</td>
              <td className="px-6 py-4">{s.contact}</td>
              <td className="px-6 py-4 space-x-4">
                <button
                  onClick={() => getEditUser(s)}
                  className="text-indigo-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteuser(s)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Studentinfotable;
