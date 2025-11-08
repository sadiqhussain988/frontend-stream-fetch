import React, { useState } from "react";

export default function VideoMetaCard({ meta, formatId, setFormatId, apiKey, setApiKey, download, platform }) {
  const [downloading, setDownloading] = useState(false);
  const [message, setMessage] = useState("");

  if (!meta) return null;

  const handleDownload = async () => {
    setDownloading(true);
    setMessage("");
    
    try {
      await download();
      setMessage("Download started successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      setMessage("Download failed: " + err.message);
    } finally {
      setDownloading(false);
    }
  };

  const formatDuration = (seconds) => {
    if (!seconds) return "Unknown";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return "Unknown";
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)} MB`;
  };

  return (
    <div className="mt-6 p-4 rounded-xl bg-slate-700/30 border border-slate-600/50 backdrop-blur-sm">
      {/* Thumbnail */}
      {meta.thumbnail && (
        <div className="mb-4 relative group">
          <img 
            src={meta.thumbnail} 
            alt="Video thumbnail" 
            className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Video Info */}
      <div className="space-y-3">
        <h3 className="font-bold text-lg text-white line-clamp-2 leading-tight">
          {meta.title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-gray-300">
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span>{meta.uploader || "Unknown"}</span>
          </span>
          
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>{formatDuration(meta.duration)}</span>
          </span>
        </div>

        {/* Quality Selection */}
        {meta.options && meta.options.length > 0 && (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Download Quality:
            </label>
            <select
              value={formatId}
              onChange={e => setFormatId(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-600/50 border border-slate-500 text-white text-sm focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors"
            >
              {meta.options.map(option => (
                <option key={option.id} value={option.id}>
                  {option.label} {option.filesize ? `(${formatFileSize(option.filesize)})` : ''}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* API Key Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            API Key (Optional):
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={e => setApiKey(e.target.value)}
            placeholder="Enter your API key"
            className="w-full px-3 py-2 rounded-lg bg-slate-600/50 border border-slate-500 text-white text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors placeholder-gray-400"
          />
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          disabled={downloading}
          className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
            downloading 
              ? "bg-gray-600 cursor-not-allowed text-gray-400" 
              : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-green-500/25"
          }`}
        >
          {downloading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
              <span>Preparing Download...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Video</span>
            </div>
          )}
        </button>

        {/* Status Message */}
        {message && (
          <div className={`p-3 rounded-lg text-sm text-center ${
            message.includes("failed") 
              ? "bg-red-500/10 border border-red-500/20 text-red-400" 
              : "bg-green-500/10 border border-green-500/20 text-green-400"
          }`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}