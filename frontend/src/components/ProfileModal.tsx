/* import React from "react";
import axios from "axios"; */

interface ProfileModalProps {
  username: string;
  onLogout: () => void;
  onClose: () => void;
}

export const ProfileModal = ({ username, onLogout, onClose }: ProfileModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded p-6 shadow-md w-[300px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 border-b pb-2">
          <p className="font-bold text-lg">{username}</p>
        </div>
        <ul>
          <li className="cursor-pointer hover:bg-gray-100 p-2">Profile</li>
          <li className="cursor-pointer hover:bg-gray-100 p-2">Cart</li>
          <li className="cursor-pointer hover:bg-gray-100 p-2">Settings</li>
          <li
            className="cursor-pointer hover:bg-gray-100 p-2"
            onClick={onLogout}
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};
