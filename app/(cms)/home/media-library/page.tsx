"use client";

import { useState, useRef, useEffect } from "react";

import Image from "next/image";

export default function MediaLibrary() {
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
      <div className="flex justify-end mt-2">
        <button
          onClick={() => setAddImage(true)}
          className="bg-blue-500 text-xs text-white py-2 px-4 flex items-center rounded hover:bg-blue-600 hover:cursor-pointer"
        >
          New Image
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
              <th className="text-left py-2 px-1 font-semibold">Preview</th>
              <th className="text-left py-2 px-1 font-semibold">Extension</th>
              <th className="text-left py-2 px-1 font-semibold">Size</th>
              <th className="text-left py-2 px-1 font-semibold">Created</th>
              <th className="text-right py-2 px-1 font-semibold">Action</th>
            </tr>
          </thead>
        </table>
      </div>
      <dialog ref={dialogRef} className="rounded w-[50%]">
        <div className="flex justify-between bg-gray-50 py-2 px-4">
          <p className="text-base">Add new image</p>
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
          <div className="px-2">
            <label
              className="!font-normal text-xs text-left"
              htmlFor="file-name"
            >
              File Name *
            </label>
            <input
              id="file-name"
              type="string"
              accept=".png .jpg .jpeg"
              //   onChange={inputHandle}
              placeholder="Enter your file name"
              className="border border-border py-2 px-4 bg-border/10 rounded-md w-full my-3 text-xs md:text-base"
            />
          </div>
          <div className="w-full px-2">
            <label
              htmlFor="file-upload"
              className="flex h-20 w-full cursor-pointer flex-col items-center justify-center rounded border border-border bg-gray-50 p-4"
            >
              <span className="flex items-center text-sm text-gray-400">
                <span className="relative mr-2 h-5 w-5">
                  <Image
                    src="/Upload.svg"
                    alt="Upload Icon"
                    fill
                    className="object-contain"
                  />
                </span>
                {/* {fileName} */}
                Upload file
              </span>
            </label>
            <input
              id="file-upload"
              type="file"
            //   onChange={handleFileChange}
              className="hidden"
            />
          </div>
          <div className="px-2 flex justify-end my-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:cursor-pointer">Upload</button>
            <button className="border border-border rounded px-4 py-2 ml-2 hover:cursor-pointer hover:bg-gray-100">Cancel</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
