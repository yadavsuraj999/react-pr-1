const Comments = () => {
  return (
    <div className="flex justify-center">
      <div className="container mx-auto border w-full md:w-3/4 p-6 md:p-9">
        {/* Responsive Flex wrapper */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side: Form */}
          <div className="w-full md:w-2/3">
            <div className="mb-6">
              <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
              <input
                type="text"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your comment</label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your thoughts here..."
              />
            </div>

            <div className="mb-6">
              <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Select an option</label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option defaultValue>Choose a Ratting</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <button
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Green
            </button>
          </div>

          {/* Right Side: Rating Section */}
          <div className="w-full md:w-1/3">
            <div className="h-96 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500">
              Rating section
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
