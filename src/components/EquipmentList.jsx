import React from 'react';

function EquipmentList({ equipment }) {
  const totalEquipment = equipment.length;
  const availableEquipment = equipment.filter(item => item.status.toLowerCase() === 'available').length;
  const rentedEquipment = equipment.filter(item => item.status.toLowerCase() === 'rented').length;

  return (
    <div className="p-6 space-y-12">

      {/* Dashboard Title */}
      <h2 className="text-4xl font-bold text-center flex justify-center items-center gap-3">
        Equipment Dashboard
        <span className="text-green-600 animate-bounce text-5xl">🚜</span>
      </h2>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <p className="text-lg font-semibold text-gray-700 mb-2">Total Equipment</p>
          <p className="text-4xl font-bold text-green-600">{totalEquipment}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <p className="text-lg font-semibold text-gray-700 mb-2">Available</p>
          <p className="text-4xl font-bold text-blue-600">{availableEquipment}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <p className="text-lg font-semibold text-gray-700 mb-2">Rented</p>
          <p className="text-4xl font-bold text-red-500">{rentedEquipment}</p>
        </div>
      </div>

      {/* Equipment Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {equipment.length === 0 ? (
          <p className="text-gray-500 text-center col-span-full">No equipment data available.</p>
        ) : (
          equipment.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
              style={{ animation: `fadeIn 0.5s ease ${index * 0.05}s forwards`, opacity: 0 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-green-700">{item.name}</h3>
              <p className="text-gray-600">Type: {item.type}</p>
              <p className="text-gray-600">Status: {item.status}</p>
              {item.notes && (
                <p className="text-gray-400 mt-3 text-sm">{item.notes}</p>
              )}
            </div>
          ))
        )}
      </div>

      {/* Fade-in Animation Keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
}

export default EquipmentList;
