import React, { useState } from "react";

const Comments = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState(0);
  const [submit, setSubmit] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = () => {
    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    if (comment.trim() === "") {
      alert("Please enter your comment.");
      return;
    }

    if (date === "") {
      alert("Please select a date.");
      return;
    }

    if (rating === 0) {
      alert("Please select a rating.");
      return;
    }

    const newComment = { name, comment, date, rating };

    if (editIndex !== null) {
      const updated = [...submit];
      updated[editIndex] = newComment;
      setSubmit(updated);
      setEditIndex(null);
    } else {
      setSubmit([newComment, ...submit]);
    }

    setName("");
    setComment("");
    setDate("");
    setRating(0);
  };

  const handleEdit = (index) => {
    const item = submit[index];
    setName(item.name);
    setComment(item.comment);
    setDate(item.date);
    setRating(item.rating);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = submit.slice(); // make a copy of the array
    filtered.splice(index, 1); // remove 1 item at position index
    setSubmit(filtered);
    if (editIndex === index) {
      setEditIndex(null);
      setName("");
      setComment("");
      setDate("");
      setRating(0);
    }
  };

  const renderStars = (count) => {
    const totalStars = 5;
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? "text-yellow-400" : "text-gray-600"
            }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.644 9.383c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.956z" />
        </svg>
      );
    }
    return <div className="flex mt-1">{stars}</div>;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto w-full md:w-3/4 p-6 md:p-9 bg-gray-800 shadow-xl rounded-lg">
        <h2 className="text-2xl font-bold text-center text-blue-400 mb-6">
          {editIndex !== null ? "Edit Comment" : "Leave a Review"}
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Form Section */}
          <div className="w-full md:w-2/3">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="comment"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your Comment
              </label>
              <textarea
                id="comment"
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="block p-2.5 w-full text-sm text-white bg-gray-700 rounded-lg border border-gray-600"
                placeholder="Write your thoughts here..."
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Select Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="rating"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Select a Rating
              </label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5"
              >
                <option value={0}>Choose a Rating</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {editIndex !== null ? "Update Comment" : "Submit Comment"}
            </button>
          </div>

          <div className="w-full md:w-1/3">
            <div className="h-[500px] overflow-y-auto border border-gray-700 rounded-lg text-gray-200 p-4 bg-gray-700">
              {submit.length === 0 ? (
                <p className="text-gray-400">No comments yet.</p>
              ) : (
                submit.map((item, index) => (
                  <div
                    key={index}
                    className="mb-4 p-3 border border-gray-600 rounded-md bg-gray-800"
                  >
                    <h3 className="font-semibold text-lg text-white">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-1">{item.date}</p>
                    <p className="mb-2 text-gray-200">{item.comment}</p>
                    {renderStars(item.rating)}
                    <div className="mt-2 flex gap-3">
                      <button
                        onClick={() => handleEdit(index)}
                        className="text-blue-400 text-xs hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="text-red-400 text-xs hover:underline"
                      >
                        Delete
                      </button>
                    </div>
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
