import React, { useState } from 'react';

function UserCard(props) {
  const { name, email, street, city, ...rest } = props;
  const [clicked, setClicked] = useState(false);

  console.log(Object.entries(rest));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-900 mb-2">{name}</h2>
      <p className="text-sm text-gray-600">
        <span className="font-semibold text-gray-800">Email:</span> {email}
      </p>
      <p className="text-sm text-gray-600 mb-3">
        <span className="font-semibold text-gray-800">Address:</span> {street}, {city}
      </p>

      {/* Menampilkan data tambahan dari rest */}
      {Object.entries(rest).map(([key, value]) => (
        <p key={key} className="text-sm text-gray-600 mb-1">
          <span className="font-semibold text-gray-800 capitalize">{key}:</span> {value}
        </p>
      ))}

      {/* Bagian tombol yang harus diperbaiki/dipastikan ada onClick */}
      <button 
        className={`${clicked ? "bg-green-600" : "bg-gray-700"} text-xs font-medium px-3 py-1.5 rounded text-white cursor-pointer`}
        onClick={() => setClicked(!clicked)}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default UserCard;