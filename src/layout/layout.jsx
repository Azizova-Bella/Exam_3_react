import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import icon1 from "../assets/facebook-logo (1) (1).png";
import icon2 from "../assets/instagram-logo (2).png";
import icon3 from "../assets/linkedin (1) 1.png";
import icon4 from "../assets/youtube 1.png";
import icon5 from "../assets/instagram-logo (5).png";
import icon6 from "../assets/Subtract.png";
import icon7 from "../assets/Group 115.png";
import icon8 from "../assets/instagram-logo (5).png";

function Layout() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <nav className="bg-[#121826] text-white px-6 py-4 flex items-center justify-between relative">
        <div className="text-xl font-bold">
          <span className="text-orange-500">amaz</span>markets
        </div>

        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <NavLink
              to="/buy_account"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "text-gray-300 font-semibold"
              }
            >
              Buy Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/buy_account2"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-gray-300 hover:text-white"
              }
            >
              Buy Account 2
            </NavLink>
          </li>

          <li className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center text-gray-300 hover:text-white"
            >
              Services <ChevronDown size={16} className="ml-1" />
            </button>
            {isServicesOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <NavLink
                    to="/frame5"
                    className={({ isActive }) =>
                      isActive ? "text-orange-500" : "text-black"
                    }
                  >
                    Frame 5
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <NavLink
                    to="/frame6"
                    className={({ isActive }) =>
                      isActive ? "text-orange-500" : "text-black"
                    }
                  >
                    Frame 6
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/frame20"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-gray-300 hover:text-white"
              }
            >
              Frame 20
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/frame21"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-gray-300 hover:text-white"
              }
            >
              Frame 21
            </NavLink>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-2">
          <button className="w-8 h-8 border border-orange-400 rounded-full flex items-center justify-center text-orange-400">
            En
          </button>
          <span className="text-gray-300">Ru</span>
          <span className="text-gray-300">Tj</span>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-opacity-50 z-50 flex">
          <div className="w-64 bg-[#121826] text-white p-6 relative">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X size={28} />
            </button>
            <ul className="space-y-4 mt-10">
              <li>
                <NavLink
                  to="/buy_account"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : "text-orange-400"
                  }
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Buy Account
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/buy_account2"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500"
                      : "text-gray-300 hover:text-white"
                  }
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Buy Account 2
                </NavLink>
              </li>

              <li className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center text-gray-300 hover:text-white"
                >
                  Services <ChevronDown size={16} className="ml-1" />
                </button>
                {isServicesOpen && (
                  <ul className="pl-4 mt-1 space-y-2">
                    <li>
                      <NavLink
                        to="/frame5"
                        className={({ isActive }) =>
                          isActive
                            ? "text-orange-500"
                            : "text-gray-300 hover:text-white"
                        }
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Frame 5
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/frame6"
                        className={({ isActive }) =>
                          isActive
                            ? "text-orange-500"
                            : "text-gray-300 hover:text-white"
                        }
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Frame 6
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <NavLink
                  to="/frame20"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500"
                      : "text-gray-300 hover:text-white"
                  }
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Frame 20
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/frame21"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500"
                      : "text-gray-300 hover:text-white"
                  }
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Frame 21
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}

      <Outlet />

      <footer className="bg-white py-8 px-6 border-t text-center md:text-left">
        <div className="text-center text-sm py-2 bg-black text-white">
          <a href="#" className="hover:underline">
            Back to top
          </a>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-6">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold">
              <span className="text-orange-500">amaz</span>markets
            </div>
            <ul className="mt-3 space-y-1 text-gray-600">
              <li>
                <a href="#" className="hover:text-black">
                  Buy Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Sell Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <p className="font-semibold">Email:</p>
            <p className="text-gray-600">support@amaz.markets</p>

            <p className="mt-4 font-semibold">Follow Us:</p>
            <div className="flex w-[30px] justify-center md:justify-start space-x-3 mt-2 text-gray-700 ">
              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
              <img src={icon3} alt="" />
              <img src={icon4} alt="" />
              <img src={icon5} alt="" />
              <img src={icon6} alt="" />
          
            </div>
          </div>

          <div>
            <p className="font-semibold">Contact Us:</p>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Enter your email to stay updated"
                className="p-2 border border-gray-300 rounded-l-md w-60"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-6">
          AmazMarkets © 2020 - All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default Layout;
