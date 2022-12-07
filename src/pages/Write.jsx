import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  return (
    <div className="mt-5 flex flex-col md:flex-row justify-center items-center gap-5">
      <div className=" md:w-[70%] flex flex-col gap-5">
        <input
          type="text"
          placeholder="Title"
          className="border border-gray-300 p-3"
        />
        <div className="h-[348px] overflow-auto border border-gray-300">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="h-full border-none"
          />
        </div>
      </div>
      <div className="md:w-[30%] flex flex-row-reverse mx-2 md:mx-0 md:flex-col gap-5 ">
        <div className="p-3 border border-gray-300 flex flex-col gap-3">
          <h1 className="text-xl font-bold">Publish</h1>
          <span className="text-xs">
            <b>Status : </b>Draft
          </span>
          <span className="text-xs">
            <b>Visibility : </b>Public
          </span>
          <input type="file" id="file" className="hidden" />
          <label
            htmlFor="file"
            className="underline hover:bg-lightGreen w-fit hover:px-2 hover:no-underline rounded hover:text-white"
          >
            Upload Image
          </label>
          <div className="flex gap-5">
            <button className="border border-lightGreen text-lightGreen bg-white px-2 rounded hover:bg-lightGreen hover:text-white">
              Save as a draft
            </button>
            <button className="border border-white bg-lightGreen text-white px-2 rounded hover:bg-white hover:text-lightGreen hover:border-lightGreen">
              Update
            </button>
          </div>
        </div>
        <div className="p-3 border border-gray-300 flex flex-col gap-2">
          <h1 className="text-xl font-bold">Category</h1>
          <div className="flex gap-3 text-lightGreen">
            <input type="radio" name="cat" id="art" value={"art"} />
            <label htmlFor="art">Art</label>
          </div>
          <div className="flex gap-3 text-lightGreen">
            <input type="radio" name="cat" id="technology" value={"technology"} />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="flex gap-3 text-lightGreen">
            <input type="radio" name="cat" id="science" value={"science"} />
            <label htmlFor="science">Science</label>
          </div>
          <div className="flex gap-3 text-lightGreen">
            <input type="radio" name="cat" id="design" value={"design"} />
            <label htmlFor="design">Design</label>
          </div>
          <div className="flex gap-3 text-lightGreen">
            <input type="radio" name="cat" id="food" value={"food"} />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
