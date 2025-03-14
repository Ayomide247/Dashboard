import { X } from "lucide-react";
import { useSidebar } from "../components/Context";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  badge,
  bank,
  briefcase,
  chart,
  clipboard,
  coins,
  handshake,
  home,
  leftRight,
  loanSack,
  multipleUsers,
  piggy,
  settings,
  settlement,
  sliders,
  userCheck,
  userFriends,
  userSetting,
  userTimes,
} from "../assets/img";

const Sidebar: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <aside
      className={`fixed inset-y-0 left-0 top-0 md:top-10  bg-pure text-primary/70 w-64 transform transition-transform md:translate-x-0  md:relative z-50 md:-z-50  shadow-lg 
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <button
        className="absolute top-1 right-4 md:hidden"
        onClick={toggleSidebar}
      >
        <X size={24} />
      </button>

      <div className="flex flex-col gap-5 mt-16 text-sm  ">
        <div className="flex items-center gap-3 cursor-pointer pl-5">
          <img src={briefcase} alt="" />
          <p>Switch Organization</p>
          <MdKeyboardArrowDown className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-3 my-1  hover:text-bold cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
          <img src={home} alt="" />
          <p>Dashboard</p>
        </div>
        <div className="flex flex-col space-y-3 my-1">
          <p className="mb-2 pl-5">CUSTOMERS</p>
          <div className="flex items-center gap-3 bg-secondary/10 border-l-3 pl-5 border-secondary cursor-pointer hover:scale-110 transition ease-in duration-500">
            <img src={userFriends} alt="" />
            <p>Users</p>
          </div>
          <div className="flex items-center gap-3  cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
            <img src={multipleUsers} alt="" />
            <p>Gaurantor</p>
          </div>
          <div className="flex items-center gap-3  cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
            <img src={loanSack} alt="" />
            <p>Loans</p>
          </div>
          <div className="flex items-center gap-3  cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
            <img src={handshake} alt="" />
            <p>Decision Model</p>
          </div>
          <div className="flex items-center gap-3  cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
            <img src={piggy} alt="" />
            <p>Savings</p>
          </div>
          <div className="flex items-center gap-3  cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
            <img src={handshake} alt="" />
            <p>Loan Resquest</p>
          </div>
          <div className="flex items-center gap-3  cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
            <img src={userCheck} alt="" />
            <p>Whitelist</p>
          </div>
          <div className="flex items-center gap-3  cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
            <img src={userTimes} alt="" />
            <p>Karma</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2 my-1 ">
          <p className="mb-2 pl-5">BUSINESSES</p>
          <div className="flex items-center gap-3  cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
            <img src={home} alt="" />
            <p>Organization</p>
          </div>
          <div className="flex items-center gap-3  cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
            <img src={handshake} alt="" />
            <p>Loan Products</p>
          </div>
          <div className="flex items-center gap-3  cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
            <img src={bank} alt="" />
            <p>Savings Products</p>
          </div>
          <div className="flex items-center gap-3  cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
            <img src={coins} alt="" />
            <p>Fees and Charges</p>
          </div>
          <div className="flex items-center gap-3  cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
            <img src={leftRight} alt="" />
            <p>Transactions</p>
          </div>
          <div className="flex items-center gap-3  cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
            <img src={settings} alt="" />
            <p>Services</p>
          </div>
          <div className="flex items-center gap-3  cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
            <img src={userSetting} alt="" />
            <p>Service Account</p>
          </div>
          <div className="flex items-center gap-3  cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
            <img src={settlement} alt="" />
            <p>Settlements</p>
          </div>
          <div className="flex items-center gap-3  cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
            <img src={chart} alt="" />
            <p>Reports</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2 my-1 ">
          <p className="mb-2 pl-5">SETTINGS</p>
          <div className="flex items-center gap-3  cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
            <img src={sliders} alt="" />
            <p>Preference</p>
          </div>
          <div className="flex items-center gap-3  cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
            <img src={badge} alt="" />
            <p>Fees and Pricing</p>
          </div>
          <div className="flex items-center gap-3  cursor-pointer hover:scale-110 transition ease-in duration-500 pl-5">
            <img src={clipboard} alt="" />
            <p>Audit Logs</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
