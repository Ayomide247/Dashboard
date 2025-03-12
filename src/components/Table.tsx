import { useState } from "react";
import type { User } from "./Types";
import { users } from "../utils/data";
import { ChevronDown, MoreVertical } from "lucide-react";

export default function UserTable() {
  const [showDropdown, setShowDropdown] = useState<number | null>(null);

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
    <div className="w-[300px] md:w-full p-2 bg-white rounded-lg shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse hidden md:table">
          <thead>
            <tr className="border-b border-gray-200">
              {[
                "ORGANIZATION",
                "USERNAME",
                "EMAIL",
                "PHONE NUMBER",
                "DATE JOINED",
                "STATUS",
              ].map((header) => (
                <th key={header} className="py-1 px-4 text-left">
                  <div className="flex items-center gap-1 text-xs font-medium text-gray-500">
                    {header}
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </th>
              ))}
              <th className="py-4 px-4"></th>
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

      <div className="md:hidden space-y-5">
        {users.map((user, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 rounded-lg shadow-sm space-y-3"
          >
            <p className="text-sm font-medium">{user.username}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
            <p className="text-xs text-gray-500">{user.phone}</p>
            <p className="text-xs text-gray-500">{user.dateJoined}</p>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                user.status
              )}`}
            >
              {user.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
