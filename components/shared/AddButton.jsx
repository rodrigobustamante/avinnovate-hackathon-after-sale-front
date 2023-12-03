"use client";
import { Button } from "@nextui-org/react";

const AddButton = ({ text, onClick = () => {} }) => {
  return (
    <Button
      size="sm"
      color="secondary"
      onClick={onClick}
      endContent={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-6 w-6"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      }
    >
      {text}
    </Button>
  );
};

export default AddButton;
