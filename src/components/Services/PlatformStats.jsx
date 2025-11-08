import React from "react";

export default function PlatformStats({ stats }) {
  return (
    <div className="bg-amber-400">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center space-x-8 text-sm text-[navy]">
          <div className="flex items-center space-x-2">
            <span className="text-green-400">✓</span>
            <span>{stats.successfulDownloads} Successful Downloads</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-blue-400">📥</span>
            <span>{stats.totalDownloads} Total Requests</span>
          </div>
        </div>
      </div>
    </div>
  );
}