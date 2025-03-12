import { useEffect, useState } from "react";
import { useAuthStore } from "../components/steps/authStore";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Card from "../components/Card";
import UserTable from "../components/Table";
import { X } from "lucide-react";

const Dashboard = () => {
  const { setPage } = useAuthStore();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("userData");

    if (!storedData) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="text-sm text-primary">
      <div className="flex h-fit">
        <SideBar />
        <div className="flex flex-col flex-1">
          <NavBar />
          <main className="flex flex-col items-center md:items-start mt-24 md:ml-5 lg:ml-30">
            <h6 className="text-[20px] font-bold hidden md:block">Users</h6>
            <div>
              <Card />
            </div>
            <div>
              <UserTable />
            </div>
          </main>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-primary/40 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-lg font-bold mb-4">Login Required</h2>
            <p className="text-gray-600 mb-4">
              Please log in to access more features.
            </p>
            <button
              onClick={() => setPage("login")}
              className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary/90"
            >
              Go to Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
