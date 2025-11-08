import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="animate-spin rounded-full h-6 w-6 border-2 border-purple-500 border-t-transparent"></div>
      <span className="text-gray-300">Processing...</span>
    </div>
  );
}