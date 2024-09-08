import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import edit from "../assets/icons/edit.svg";

function AddNewQuestion() {
  // Create the first answer prompt using and creating a unique ID using Date.now
  const [prompts, setPrompts] = useState([
    { id: Date.now(), text: "", checked: false },
  ]);
  const [image, setImage] = useState(null);

  // Change the textinput of the corresponding prompt when editing it
  const handleInputChange = (index, value) => {
    const newPrompts = [...prompts];
    newPrompts[index].text = value;
    setPrompts(newPrompts);
  };

  const handleCheckboxChange = (index) => {
    const newPrompts = prompts.map((prompt, idx) => ({
      ...prompt,
      checked: idx === index,
    }));
    setPrompts(newPrompts);
  };

  // Create an additonal prompt as long as there are less than 4 prompts and create a new ID using Date.now
  const addPrompt = () => {
    if (prompts.length < 4) {
      setPrompts([...prompts, { id: Date.now(), text: "", checked: false }]);
    }
  };

  // Clear all prompts
  const handleClear = () => {
    setPrompts([]);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = prompts.findIndex(
        (prompt) => prompt.id === parseInt(active.id)
      );
      const newIndex = prompts.findIndex(
        (prompt) => prompt.id === parseInt(over.id)
      );

      setPrompts((items) => {
        const updatedItems = [...items];
        const [movedItem] = updatedItems.splice(oldIndex, 1);
        updatedItems.splice(newIndex, 0, movedItem);
        return updatedItems;
      });
    }
  };

  // Handle the image that gets uploaded and sent to display
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Create a URL to display the image
    }
  };

  return (
    <div className="text-white flex-1 w-full bg-midnightBlue p-8">
      <div className="p-4 flex items-center justify-center text-lavender">
        <h1>Add Prompts</h1>
      </div>
      <div className="flex items-center border-b-2 border-adminLightSlateGray">
        <h1 className="text-left md:text-4xl text-2x1">Add New</h1>
        <h1 className="text-left text-lavender md:text-4xl text-2x1 ml-2">
          Question
        </h1>
      </div>

      {/* Prompt texbox and title */}
      <div className="flex flex-col items-center justify-center mt-5">
        <p className="mr-64">Prompt</p>
        <input
          type="text"
          className="mt-2 p-2 border border-lavender rounded-sm bg-charcoalBlack w-full max-w-xs"
          placeholder="Enter your text here"
        />
      </div>

      {/* Image upload box*/}
      <div className="flex flex-col items-center justify-center mt-5">
        <p className="mr-52">Upload Image</p>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mt-2 p-2 border border-lavender rounded-sm bg-charcoalBlack w-full max-w-xs"
        />

        {/* Space to preview image if one is uploaded */}
        {image && (
          <div className="mt-4">
            <img
              src={image}
              alt="Uploaded Preview"
              className="max-w-xs max-h-64 border border-lavender"
            />
          </div>
        )}
      </div>

      {/* Added prompts title */}
      <div className="flex flex-col items-center justify-center mt-5">
        <div className="flex items-center">
          <p className="mr-14">Added Prompts</p>
          <p className="text-xs">Is This The Correct Answer?</p>
        </div>

        {/* Added prompts (answers) container with drag & drop functionality*/}
        <div className="flex items-center relative">
          <DndContext onDragEnd={handleDragEnd}>
            <Droppable id="droppable-container">
              <div className="md:w-96 w-80 mt-2 border-l border-t border-b border-adminLightSlateGray rounded-sm p-0.5 mr-4 md:mr-12">
                {prompts.map((prompt, index) => (
                  <Draggable key={prompt.id} id={String(prompt.id)} dragHandle>
                    <div className="relative flex items-center w-full p-1">
                      <img
                        src={edit}
                        alt="Move"
                        className="w-8 mr-2.5 ml-2.5 cursor-grab"
                      />
                      <input
                        type="text"
                        className="p-2 pr-10 border-l border-t border-b border-lavender rounded-sm bg-charcoalBlack w-full"
                        placeholder="Enter your text here"
                        value={prompt.text}
                        onChange={(e) =>
                          handleInputChange(index, e.target.value)
                        }
                      />
                    </div>
                  </Draggable>
                ))}
              </div>
            </Droppable>
          </DndContext>

          {/* Checkboxes outside the draggable container */}
          <div className="absolute mt-2 flex border-r border-t border-b flex-col items-start p-0.5 -mr-2 md:mr-6 border-adminLightSlateGray rounded-sm right-6 top-0">
            {prompts.map((prompt, index) => (
              <div key={prompt.id} className="p-1">
                <div className="flex items-center border-r border-t border-b border-lavender rounded-sm">
                  <input
                    type="checkbox"
                    checked={prompt.checked}
                    onChange={() => handleCheckboxChange(index)}
                    className="appearance-none border-2 mt-3 mr-3 mb-3.5 ml-2 border-white rounded-sm 
                  w-3.5 h-3.5 bg-charcoalBlack checked:bg-white 
                  checked:border-white active:bg-darkLavender"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add a new answer prompt */}
        <button
          onClick={addPrompt}
          className="ml-48 mt-1 text-white flex items-center"
        >
          <img src={edit} alt="Plus" className="w-5 h-5 mr-2" />
          Add Alternative
        </button>

        {/* Add and Clear buttons*/}
        <div className="flex items-center">
          <button
            onClick={handleClear}
            className="border-2 border-lavender w-24 rounded-lg mt-2 ml-32"
          >
            Clear
          </button>
          <button className="border-2 border-lavender w-24 rounded-lg mt-2 ml-2">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNewQuestion;
