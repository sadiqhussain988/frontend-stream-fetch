import React from "react";

export default function UrlForm({ url, setUrl, fetchMeta, loadingMeta, placeholder }) {
  return (
    <form onSubmit={fetchMeta} className="space-y-4">
      <div className="relative">
        <input
          type="url"
          placeholder={placeholder}
          value={url}
          onChange={e => setUrl(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
          disabled={loadingMeta}
        />
        
        {url && (
          <button
            type="button"
            onClick={() => setUrl("")}
            className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
      <button
        type="submit"
        disabled={loadingMeta || !url}
        className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-200 ${
          loadingMeta || !url
            ? "bg-gray-600 cursor-not-allowed text-gray-400"
            : "bg-gradient-to-br from-slate-900 via-[navy] to-slate-900 hover:from-blue-800 hover:to-blue-700 text-white shadow-lg hover:shadow-purple-500/25"
        }`}
      >
        {loadingMeta ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
            <span>Analyzing URL...</span>
          </div>
        ) : (
          "Get Video Info"
        )}
      </button>
    </form>
  );
}