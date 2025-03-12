// import { ArrowDown, Bell, Menu, Search } from "lucide-react";
// import { useSidebar } from "../components/Context";
// import { arrowDown, lendLogo, UserImg } from "../assets/img/index";

// const Navbar: React.FC = () => {
//   const { toggleSidebar } = useSidebar();

//   return (
//     <nav className="fixed flex justify-between items-center bg-pure p-4 text-primary shadow-md left-0 w-full text-16">
//       <button className="md:hidden" onClick={toggleSidebar}>
//         <Menu size={24} />
//       </button>
//       <div className="flex items-center w-full">
//         <img src={lendLogo} alt="" width={100} />
//         {/* Hide contents on mobile view */}
//         <div className="hidden md:flex justify-between items-center ml-40 w-full">
//           {/* Search Bar */}
//           <div className="flex items-center ">
//             <input
//               type="text"
//               placeholder="Search for anything"
//               className="w-full bg-gray-200  p-1 px-5 rounded-l-lg outline-none"
//             />
//             <span className="bg-secondary p-2 rounded-r-lg text-pure">
//               <Search size={16} />
//             </span>
//           </div>
//           <div className="flex items-center gap-5 ">
//             <p className="underline cursor-pointer">Docs</p>
//             <Bell size={24} className="cursor-pointer" />
//             <img
//               src={UserImg}
//               alt=""
//               width={30}
//               className="rounded-full cursor-pointer"
//             />
//             <div className="flex items-center gap-2 cursor-pointer">
//               <p>Trust</p>
//               <img src={arrowDown} alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
