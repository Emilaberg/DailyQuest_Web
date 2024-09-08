import React, { useState } from "react";
import settings from "../assets/icons/settings.svg";
import removeIcon from "../assets/icons/remove_icon.svg";
import { Outlet } from "react-router-dom";

const CreateQuiz = () => {
  // Select item
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Sample data - Remove when connecting API
  const data = [
    {
      question: "Is Ganon a Ganon-dwarf?",
      action1: "Yep",
      action2: "Nope",
      action3: "Edit",
    },
    {
      question: "Is Ganon a Ganon-dwarf?",
      action1: "Yep",
      action2: "Nope",
      action3: "Edit",
    },
    {
      question: "Is Ganon a Ganon-dwarf?",
      action1: "Yep",
      action2: "Nope",
      action3: "Edit",
    },
    {
      question: "Is Ganon a Ganon-dwarf?",
      action1: "Yep",
      action2: "Nope",
      action3: "Edit",
    },
    {
      question: "Is Ganon a Ganon-dwarf?",
      action1: "Yep",
      action2: "Nope",
      action3: "Edit",
    },
    {
      question: "Is Ganon a Ganon-dwarf?",
      action1: "Yep",
      action2: "Nope",
      action3: "Edit",
    },
  ];

  const handleRowClick = (index) => {
    // Toggle selecting item
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <div className="text-white flex-1 w-full bg-midnightBlue p-8">
      {/* Header Section */}
      <div className="p-4 flex items-center justify-center text-lavender">
        <h1>Dashboard Details</h1>
      </div>
      <div className="flex items-center justify-center border-b-2 border-white">
        <h1 className="text-left md:text-4xl text-2x1">Create</h1>
        <h1 className="text-left text-lavender md:text-4xl text-2x1 ml-2">
          Quiz
        </h1>
        <h1 className="flex-grow text-center mr-2 md:mr-24">quizName</h1>
        <div className="ml-auto">
          <p>Cover Image</p>
        </div>
      </div>

      {/* Table Header */}
      <div className="flex justify-between items-center mt-4 p-2 bg-adminGray rounded-lg h-12 font-bold">
        <p className="md:text-1xl text-sm flex-1 text-left ml-4 md:ml-12">
          Questions
        </p>
        <p className="md:text-1xl text-sm flex-1 text-right">Action</p>
        <p className="md:text-1xl text-sm flex-1 text-right">action</p>
        <p className="md:text-1xl text-sm flex-1 text-right mr-4 md:mr-12">
          Actions
        </p>
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
            <div className="md:text-1xl text-sm flex-1 text-left ml-4 md:ml-12">
              <span className="block">{item.question}</span>
            </div>
            <div className="md:text-1xl text-sm flex-1 text-right">
              <span>{item.action1}</span>
            </div>
            <div className="md:text-1xl text-sm flex-1 text-right">
              <span>{item.action2}</span>
            </div>
            <div className="md:text-1xl text-sm flex-1 text-right mr-4 md:mr-12">
              <span>{item.action3}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Delete item in list & Action button - !!! NOT FUNCTIONING ATM !!! */}
      <div className="border-t-2 border-white mt-4 flex items-center">
        <img
          src={removeIcon}
          alt="Delete"
          className={`w-7 h-7 mt-1 mr-1 cursor-pointer ${
            selectedIndex !== null ? "opacity-100" : "opacity-50"
          }`}
        />
        <p className="md:text-1xl text-sm cursor-pointer align-text-top">
          Remove Selected
        </p>
        <button
          className={`border-2 border-lavender w-24 rounded-lg mt-2 ml-auto 
          ${
            selectedIndex !== null ? "bg-gradient-primary" : "bg-midnightBlue"
          }`}
        >
          Details
        </button>
        <button
          className={`border-2 border-lavender w-24 rounded-lg mt-2 ml-4 
          ${
            selectedIndex !== null ? "bg-gradient-primary" : "bg-midnightBlue"
          }`}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateQuiz;
