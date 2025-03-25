import { useState } from "react";
import { Bell, LogIn, LogOut, Menu, Search, User2 } from "lucide-react";
import { useSidebar } from "../components/Context";
import { lendLogo, UserImg } from "../assets/img/index";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useAuthStore } from "./steps/authStore";

const Navbar: React.FC = () => {
  const storedData = localStorage.getItem("userData");
  const initialData = storedData ? JSON.parse(storedData) : null;

  const [showDropdown, setShowDropdown] = useState<number | null>(null);
  const [data, setData] = useState<any>(initialData);
  const { toggleSidebar } = useSidebar();
  const { setPage } = useAuthStore();

  const toggleDropdown = (index: number) => {
    setShowDropdown(showDropdown === index ? null : index);
  };

  const handleLogOut = () => {
    setData(null);
    setPage("login");
  };

  return (
    <nav className="fixed flex justify-between items-center bg-pure p-4 text-primary shadow-md left-0 w-full text-sm">
      <button className="md:hidden" onClick={toggleSidebar}>
        <Menu size={24} />
      </button>
      <div className="flex items-center md:w-full">
        <img
          src={lendLogo}
          alt="Logo"
          width={100}
          className="hidden md:block"
        />

        <div className="flex justify-between gap-2 items-center ml-40 w-full">
          <div className="hidden md:flex items-center ">
            <input
              type="text"
              placeholder="Search for anything"
              className="w-[300px] h-[36px] border-gray-300 border py-2 px-5 rounded-l-lg outline-none"
            />
            <span className="bg-secondary p-2 rounded-r-lg text-pure cursor-pointer">
              <Search size={20} />
            </span>
          </div>
          <div className="flex items-center gap-5">
            <p className="hidden md:block underline cursor-pointer">Docs</p>
            <Bell size={24} className="hidden md:block cursor-pointer" />
            {data ? (
              <img
                src={UserImg}
                alt="User"
                width={30}
                className="rounded-full cursor-pointer"
              />
            ) : (
              <User2 />
            )}
            <div className="flex items-center gap-1 cursor-pointer relative">
              <p>{data ? data.UserName : "Guest"}</p>
              <span onClick={() => toggleDropdown(0)}>
                {showDropdown === 0 ? (
                  <IoMdArrowDropup className="text-[24px]" />
                ) : (
                  <IoMdArrowDropdown className="text-[24px]" />
                )}
              </span>
              {showDropdown === 0 && (
                <div className="absolute right-0 top-5 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                  <div className="py-1">
                    <div className="flex gap-2 items-center p-2 cursor-pointer">
                      <User2 />
                      <p>View Profile</p>
                    </div>
                    {data ? (
                      <div
                        className="flex gap-2 items-center p-2 text-red-500 cursor-pointer"
                        onClick={handleLogOut}
                      >
                        <LogOut />
                        <p>Logout</p>
                      </div>
                    ) : (
                      <div
                        className="flex gap-2 items-center p-2 cursor-pointer"
                        onClick={() => setPage("login")}
                      >
                        <LogIn />
                        <p>LogIn</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
