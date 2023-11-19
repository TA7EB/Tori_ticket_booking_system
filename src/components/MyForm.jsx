
import React, { useState } from 'react';

const MyForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="w-[60%]  mx-auto my-8">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
              Date of Journey
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="w-1/2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
              Date of Return
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="field1">
            From
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="from"
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder='Enter Start'
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="field2">
            To
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="to"
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder='Enter Destination'
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Search Boat
          </button>
        </div>
      </form>
    </div>
  );
};
export default MyForm;
