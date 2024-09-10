import React, { useState } from "react";
import settings from "../assets/icons/settings.svg";
import removeIcon from "../assets/icons/remove_icon.svg";

const AvailableQuizzes = () => {
  // Select item
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Sample data - Remove when connecting API
  const data = [
    {
      quiz_name: "Hello Kitty Island Adventure",
      amount_of_questions: "3",
      actions: "Edit",
    },
    {
      quiz_name: "Blackrock Bangers",
      amount_of_questions: "124122144",
      actions: "Edit",
    },
    {
      quiz_name: "Counterstrike Quorce",
      amount_of_questions: "30",
      actions: "Edit",
    },
    {
      quiz_name: "League of Ragequit",
      amount_of_questions: "1",
      actions: "Edit",
    },
    {
      quiz_name: "Tekken 278",
      amount_of_questions: "278",
      actions: "Edit",
    },
    {
      quiz_name: "Need for Speed: Family edition",
      amount_of_questions: "32",
      actions: "Edit",
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
      <div className="text-4xl flex items-center justify-center border-b-2 border-adminLightSlateGray">
        <h1>Available Quizzes</h1>
      </div>

      {/* Table Header */}
      <div className="flex justify-between items-center mt-4 p-2 bg-adminGray rounded-lg h-12 font-bold">
        <p className="flex-1 text-left ml-12">Quiz Name</p>
        <p className="flex-1 text-right ml-36">Amount of Questions</p>
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
              <span className="block">{item.quiz_name}</span>
            </div>
            <div className="flex-1 text-right">
              <span>{item.amount_of_questions}</span>
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
          className={`w-7 h-7 mt-1 mr-1 cursor-pointer ${
            selectedIndex !== null ? "opacity-100" : "opacity-50"
          }`}
        />
        <p className="cursor-pointer align-text-top">Remove Selected</p>
        <button
          className={`border-2 border-lavender w-24 rounded-lg mt-2 ml-auto 
          ${
            selectedIndex !== null ? "bg-gradient-primary" : "bg-midnightBlue"
          }`}
        >
          Action
        </button>
      </div>
    </div>
  );
};

export default AvailableQuizzes;
