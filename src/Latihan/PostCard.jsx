import React, { useState } from 'react';

function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div 
      className={`p-6 rounded-lg shadow hover:shadow-md transition-colors cursor-pointer ${
        clicked ? "bg-blue-100" : "bg-white"
      }`}
      onClick={() => setClicked(!clicked)}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">
        {body}
      </p>
    </div>
  );
}

export default PostCard;