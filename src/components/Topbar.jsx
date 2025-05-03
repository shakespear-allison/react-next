"use client";

import { Search, Bell, User } from "lucide-react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { signOut } from "next-auth/react";

const Topbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-700 bg-gray-900">
      {/* Left - Search */}
      <div className="flex items-center gap-4">
        <Search size={20} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-800 text-sm rounded-md p-2 outline-none text-white placeholder-gray-500 sm:w-2xs"
        />
      </div>

      {/* Right - Notifications and Profile */}

      {/* Theme Toggle Button */}

      <div className="flex items-center gap-6">
        <button
          onClick={toggleTheme}
          className="hidden text-gray-400 hover:text-yellow-400 md:flex transition">
          {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
        </button>
        {/* Logout btn */}
        <button
          onClick={() => signOut()}
          className="hidden text-gray-400 sm:flex md:flex cursor-pointer hover:text-red-400">
          Logout
        </button>
        <Bell
          size={22}
          className="text-gray-400 cursor-pointer hover:text-white transition"
        />
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="/assets/avatar.png" // Same avatar you used before
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <User
            size={20}
            className="text-gray-400 hover:text-white transition hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
