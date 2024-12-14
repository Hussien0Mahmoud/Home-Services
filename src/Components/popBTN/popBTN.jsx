
import React, { useState } from "react";

function popBTN() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Button to toggle the popup */}
      <button
        onClick={togglePopup}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Open Form
      </button>

      {/* Popup overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Popup container */}
          <div className="bg-white w-3/5 h-4/5 p-6 rounded-lg shadow-lg relative">
            {/* Close button */}
            <button
              onClick={togglePopup}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>

            {/* Form content */}
            <form className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Popup Form</h2>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default popBTN;