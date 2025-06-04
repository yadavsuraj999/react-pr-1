import React, { useState } from 'react';

const Comments = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [date, setDate] = useState('');
  const [rating, setRating] = useState(0);
  const [submittedComments, setSubmittedComments] = useState([]);

  const handleSubmit = () => {
    if (!name || !comment || !date || !rating) {
      alert('Please fill in all fields.');
      return;
    }

    const newComment = {
      name,
      comment,
      date,
      rating,
    };

    setSubmittedComments([newComment, ...submittedComments]);

    // Clear form
    setName('');
    setComment('');
    setDate('');
    setRating(0);
  };

  const renderStars = (count) => {
    const totalStars = 5;
    return (
      <div className="flex mt-1">
        {Array.from({ length: totalStars }, (_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < count ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.644 9.383c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.956z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="flex justify-center">
      <div className="container mx-auto border w-full md:w-3/4 p-6 md:p-9">
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Left Form Section */}
          <div className="w-full md:w-2/3">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-900">Your Comment</label>
              <textarea
                id="comment"
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your thoughts here..."
              />
            </div>

            <div className="mb-6">
              <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Select Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900">Select a Rating</label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value={0}>Choose a Rating</option>
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit Comment
            </button>
          </div>

          {/* Right Display Section */}
          <div className="w-full md:w-1/3">
            <div className="h-[500px] overflow-y-auto border border-dashed border-gray-300 rounded-lg text-gray-700 p-4">
              {submittedComments.length === 0 ? (
                <p className="text-gray-400">No comments yet.</p>
              ) : (
                submittedComments.map((item, index) => (
                  <div key={index} className="mb-4 p-3 border rounded-md bg-gray-50">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{item.date}</p>
                    <p className="mb-2">{item.comment}</p>
                    {renderStars(item.rating)}
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Comments;
