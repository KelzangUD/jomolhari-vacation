"use client";

import { useState, useRef, useEffect } from "react";

import Image from "next/image";
import Editor from "./Editor";

export default function Packages() {
  const [addImage, setAddImage] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Use useEffect to open or close the dialog
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      if (addImage) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }
  }, [addImage]);

  return (
    <>
      <div className="flex justify-between mt-2">
        <h6>Packages</h6>
        <button
          onClick={() => setAddImage(true)}
          className="bg-blue-500 text-xs text-white py-2 px-4 flex items-center rounded hover:bg-blue-600 hover:cursor-pointer"
        >
          New Entry
          <div className="relative w-4 h-4 ml-1">
            <Image
              src="/Plus.svg"
              alt="arrow icon"
              fill
              className="object-cover"
            />
          </div>
        </button>
      </div>
      <div className="my-4">
        <table className="w-full border border-border">
          <thead className="bg-gray-50">
            <tr className="text-sm">
              <th className="text-left py-2 px-1 font-semibold">Sl.</th>
              <th className="text-left py-2 px-1 font-semibold">Title</th>
              <th className="text-left py-2 px-1 font-semibold">Image</th>
              <th className="text-left py-2 px-1 font-semibold">Description</th>
              <th className="text-left py-2 px-1 font-semibold">
                Upcoming Event
              </th>
              <th className="text-left py-2 px-1 font-semibold">Published</th>
              <th className="text-right py-2 px-1 font-semibold">Action</th>
            </tr>
          </thead>
        </table>
      </div>
      <dialog ref={dialogRef} className="rounded w-[80%]">
        <div className="flex justify-between bg-gray-50 py-2 px-4">
          <p className="text-base">Add Entry</p>
          <button
            onClick={() => setAddImage(false)}
            className="bg-gray-400 text-xs text-white p-2 flex items-center rounded hover:bg-gray-500 hover:cursor-pointer"
          >
            <div className="relative w-4 h-4 rotate-45">
              <Image
                src="/Plus.svg"
                alt="arrow icon"
                fill
                className="object-cover"
              />
            </div>
          </button>
        </div>
        <div className="p-2">
          <div className="px-2 my-2 grid grid-cols-4 gap-2">
            <div>
              <label className="!font-normal text-xs text-left" htmlFor="title">
                Title *
              </label>
              <input
                id="title"
                type="string"
                //   onChange={inputHandle}
                placeholder="Enter title"
                className="border border-border py-2 px-4 bg-border/10 rounded-md w-full my-1 text-xs md:text-base"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="!font-normal text-xs text-left w-full"
                htmlFor="upcoming-event"
              >
                Upcoming Event
              </label>
              <select
                name="event"
                id="upcoming-event"
                className="border border-border py-2 px-2 bg-border/10 rounded-md w-full my-1 text-xs md:text-base mt-3"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label
                className="!font-normal text-xs text-left w-full"
                htmlFor="published"
              >
                Published
              </label>
              <select
                name="published"
                id="published"
                className="border border-border py-2 px-2 bg-border/10 rounded-md w-full my-1 text-xs md:text-base"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="w-full px-2">
              {/* Separate label for accessibility */}
              <label
                htmlFor="file-upload"
                className="!font-normal text-xs text-left"
              >
                Upload Image
              </label>
              <div className="relative mt-1">
                {/* The visually styled input container */}
                <div className="flex w-full py-2 cursor-pointer flex-col items-center justify-center rounded border border-border bg-gray-100">
                  <span className="flex items-center text-sm text-gray-400">
                    <span className="relative mr-2 h-5 w-5">
                      <Image
                        src="/Upload.svg"
                        alt="Upload Icon"
                        fill
                        className="object-contain"
                      />
                    </span>
                    Click here to upload
                  </span>
                </div>
                <input
                  id="file-upload"
                  type="file"
                  accept=".png,.jpg,.jpeg"
                  // onChange={handleFileChange}
                  className="absolute inset-0 z-10 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="px-2 my-2">
            <label
              className="!font-normal text-xs text-left"
              htmlFor="description"
            >
              Description
            </label>
            <div className="mt-2">
              <Editor />
            </div>
          </div>
          <div className="px-2 flex justify-end my-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:cursor-pointer">
              Add
            </button>
            <button className="border border-border rounded px-4 py-2 ml-2 hover:cursor-pointer hover:bg-gray-100">
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
