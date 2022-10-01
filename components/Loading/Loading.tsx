import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <div className="w-full h-full fixed left-0 top-0   flex items-center justify-center">
      <div className="w-full h-full absolute left-0 top-0 bg-gray-900 z-0" />
      <AiOutlineLoading3Quarters className="text-green-500 z-10 text-5xl relative motion-reduce:hidden animate-spin" />
    </div>
  );
}
