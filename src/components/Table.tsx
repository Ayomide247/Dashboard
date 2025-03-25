import { useState } from "react";
import type { User } from "./Types";
import { users, tableHeader } from "../utils/data";
import {
  ChevronDown,
  MoreVertical,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

export default function UserTable() {
  const [showDropdown, setShowDropdown] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const toggleDropdown = (index: number) => {
    setShowDropdown(showDropdown === index ? null : index);
  };

  const getStatusColor = (status: User["status"]): string => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Blacklisted":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="w-[300px] md:w-full p-2 bg-white rounded-lg shadow-sm ">
      <div className="overflow-x-auto md:h-[350px]">
        <table className="w-full border-collapse table">
          <thead>
            <tr className="border-b border-gray-200">
              {tableHeader.map((header) => (
                <th key={header} className="py-1 px-4 text-left">
                  <div className="flex items-center gap-1 text-xs font-medium text-gray-500">
                    {header}
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-5 px-4 text-sm">{user.organization}</td>
                <td className="py-5 px-4 text-sm">{user.username}</td>
                <td className="py-5 px-4 text-sm">{user.email}</td>
                <td className="py-5 px-4 text-sm">{user.phone}</td>
                <td className="py-5 px-4 text-sm">{user.dateJoined}</td>
                <td className="py-5 px-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-5 px-4 text-sm relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <MoreVertical className="h-5 w-5 text-gray-500" />
                  </button>
                  {showDropdown === index && (
                    <div className="absolute right-4 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                      <div className="py-1">
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          View Details
                        </button>
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Blacklist User
                        </button>
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Activate User
                        </button>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="hidden md:flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Showing</span>
          <div className="relative">
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="appearance-none bg-white border border-gray-300 rounded-md py-1 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
          <span>out of 100</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="h-9 w-9 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`h-9 w-9 flex items-center justify-center rounded-md border ${
                currentPage === page
                  ? "bg-gray-100 text-gray-700 border-gray-300"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}

          <span className="px-2">...</span>

          {[15, 16].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className="h-9 w-9 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-50"
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(Math.min(16, currentPage + 1))}
            className="h-9 w-9 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
