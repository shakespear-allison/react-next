"use client";
import { motion } from "framer-motion";

import {
  LayoutDashboard,
  Wallet,
  Activity,
  Bell,
  User,
  Settings,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", linkTo: "/dashboard" },
  { icon: Wallet, label: "Wallet", linkTo: "/wallet" },
  { icon: Activity, label: "Activity", linkTo: "/activity" },
  { icon: Bell, label: "Notifications", linkTo: "/notification" },
  { icon: User, label: "Profile", linkTo: "/profile" },
  { icon: Settings, label: "Settings", linkTo: "settings" },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="hidden md:flex w-20 md:w-60 bg-gray-800 flex-col justify-between py-8 px-2">
        {/* Logo */}
        <div className="flex flex-col items-center space-y-8">
          <div className="text-2xl font-bold mb-8">🚀</div>

          {/* Menu items */}
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                console.log(item);
              }}
              className={`flex md:flex-row flex-col cursor-pointer items-center justify-center md:justify-start gap-1 md:gap-4 p-3 w-full rounded-lg hover:bg-gray-700 transition ${
                activeIndex === index
                  ? "bg-gray-700 text-yellow-400"
                  : "text-gray-400"
              }`}>
              <item.icon size={24} />
              <span className="hidden md:inline text-xs font-medium">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Bottom user profile */}
        <div className="flex items-center justify-center md:justify-start gap-2 p-3">
          <img
            src="/assets/avatar.png"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="hidden md:flex flex-col">
            <span className="text-sm font-semibold">John Doe</span>
            <span className="text-xs text-gray-400">Admin</span>
          </div>
        </div>
      </div>
      <div className="md:hidden z-10 fixed bottom-0 left-0 right-0 bg-gray-800 flex justify-around items-center h-16 border-t border-gray-700">
        {menuItems.map((item, index) =>
          item.label === "Notifications" ? null : (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              whileTap={{ scale: 1.2 }}
              animate={{
                color:
                  activeIndex === index
                    ? "oklch(85.2% .199 91.936)"
                    : "#9CA3AF",
                y: activeIndex === index ? -5 : 0,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center justify-center">
              <item.icon size={24} />
              <span className="text-[10px]">{item.label}</span>
            </motion.button>
          )
        )}
      </div>
    </>
  );
};

export default Sidebar;
