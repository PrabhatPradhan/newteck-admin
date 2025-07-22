'use client';
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
export default function ViewCategoryPage() {
  const categories = [
    {
      name: 'CAR REPAIR',
      icon: '/images/car-repair.png',
      status: 'Inactive',
    },
    {
      name: 'CAR DRIVERS',
      icon: '/images/car-driver.png',
      status: 'Inactive',
    },
    {
      name: 'SOLAR',
      icon: '/images/solar.png',
      status: 'Inactive',
    },
    {
      name: 'CARPENTER',
      icon: '/images/carpenter.png',
      status: 'Inactive',
    },
    {
      name: 'COMPUTER',
      icon: '/images/computer.png',
      status: 'Inactive',
    },
    {
      name: 'KITCHEN CHIMNEY',
      icon: '/images/chimney.png',
      status: 'Active',
    },
    {
      name: 'RO WATER PURIFIER',
      icon: '/images/ro.png',
      status: 'Active',
    },
    {
      name: 'GEYSER',
      icon: '/images/geyser.png',
      status: 'Active',
    },
    {
      name: 'TELEVISION',
      icon: '/images/tv.png',
      status: 'Active',
    },
    {
      name: 'MICROWAVE OVEN',
      icon: '/images/microwave.png',
      status: 'Active',
    },
    {
      name: 'AIR CONDITIONER',
      icon: '/images/ac.png',
      status: 'Active',
    },
    {
      name: 'WASHING MACHINE',
      icon: '/images/washing-machine.png',
      status: 'Active',
    },
  ];

  const handleEdit = (name) => {
    alert(`Edit clicked for: ${name}`);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
    <div className="w-full lg:w-64 bg-gray-800 text-white">
      <Sidebar />
    </div>

    <div className="flex-1 overflow-y-auto bg-gray-100">
      <Navbar />
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-3 shadow flex items-center gap-3">
        <div className="text-xl">&#9776;</div>
        <h1 className="text-lg font-semibold">Categorys</h1>
      </div>

      {/* Table */}
      <div className="p-6 overflow-x-auto">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full table-auto text-sm text-left">
            <thead className="bg-gray-200 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Icon</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {categories.map((cat, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{cat.name}</td>
                  <td className="px-4 py-3">
                    <img
                      src={cat.icon}
                      alt={`${cat.name} icon`}
                      className="w-10 h-10 object-contain"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        cat.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {cat.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleEdit(cat.name)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t text-center text-gray-600 py-3">
        info@xyz.in
      </footer>
    </div>
    </div>
    </div>
  );
}
