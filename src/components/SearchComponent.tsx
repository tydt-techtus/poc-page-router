import React from "react";

export default function SearchComponent() {
  return (
    <form action="/" method="get" className="flex items-center space-x-2 p-2">
      <input
        type="text"
        name="test"
        placeholder="Search..."
        className="border border-gray-300 rounded p-2"
      />
      <button type="submit" className="bg-blue-500 text-white rounded p-2">
        Search
      </button>
    </form>
  );
}
