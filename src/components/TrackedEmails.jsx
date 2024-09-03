import React, { useState } from "react";
import settings from "../assets/icons/settings.svg";
import removeIcon from "../assets/icons/remove_icon.svg";

const TrackedEmails = () => {
  // Select item
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Sample data - Remove when connecting API
  const data = [
    {
      username: "User 1",
      email: "user1@example.com",
      role: "Admin",
      actions: "Edit",
    },
    {
      username: "User 2",
      email: "user2@example.com",
      role: "User",
      actions: "View",
    },
    {
      username: "User 3",
      email: "user3@example.com",
      role: "Guest",
      actions: "Delete",
    },
    {
      username: "User 4",
      email: "user4@example.com",
      role: "Admin",
      actions: "Edit",
    },
    {
      username: "User 5",
      email: "user5@example.com",
      role: "User",
      actions: "View",
    },
    {
      username: "User 6",
      email: "user6@example.com",
      role: "Guest",
      actions: "Delete",
    },
  ];

  const handleRowClick = (index) => {
    // Toggle selecting item
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <div className="text-white flex-1 w-full bg-midnightBlue p-8 ml-10 mr-10 mt-10 mb-10">
      {/* Header Section */}
      <div className="p-4 flex items-center justify-center text-lavender">
        <h1>Dashboard Details</h1>
      </div>
      <div className="text-4xl flex items-center justify-center border-b-2 border-white">
        <h1>Tracked Emails</h1>
      </div>

      {/* Table Header */}
      <div className="flex justify-between items-center mt-4 p-2 bg-adminGray rounded-lg h-12 font-bold">
        <p className="flex-1 text-left ml-12">Name & Email</p>
        <p className="flex-1 text-right mr-2">Role</p>
        <p className="flex-1 text-right ml-2">Email Sent</p>
        <p className="flex-1 text-right mr-12">Actions</p>
      </div>

      {/* Table Rows + Scrollbar */}
      <div className="mt-2 max-h-64 overflow-y-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-2 rounded-lg mt-2 mb-2 cursor-pointer
              ${selectedIndex === index ? "bg-adminGray" : "bg-midnightBlue"}
              hover:bg-adminGray hover:text-white transition-all duration-300 `}
            onClick={() => handleRowClick(index)}
          >
            <div className="flex-1 text-left ml-12">
              <span className="block">{item.username}</span>
              <span className="block text-sm">{item.email}</span>
            </div>
            <div className="flex-1 text-right">
              <span>{item.role}</span>
            </div>
            <div className="flex-1 text-right">
              <span>✔</span> {/* Placeholder for Email Sent */}
            </div>
            <div className="flex-1 text-right mr-12">
              <span>{item.actions}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Delete item in list & Action button - !!! NOT FUNCTIONING ATM !!! */}
      <div className="border-t-2 border-white mt-4 flex items-center">
        <img
          src={removeIcon}
          alt="Delete"
          className="w-7 h-7 mt-1 mr-1 cursor-pointer"
        />
        <p className="cursor-pointer align-text-top">Remove Selected</p>
        <button className="border-2 border-lavender w-24 rounded-lg mt-2 bg-midnightBlue ml-auto active:bg-gradient-primary">
          Action
        </button>
      </div>
    </div>
  );
};

export default TrackedEmails;
