"use client"
import React from "react";
import { deletePost } from "../_actions/actions";

const ButtonDelete = ({ postId }: PropsButtonDelete) => {
  return (
    <button
      onClick={() => deletePost(postId)}
      className="absolute top-2 right-2 text-red-600 hover:text-red-800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default ButtonDelete;
