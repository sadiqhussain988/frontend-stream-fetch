import React from "react";

export default function ServicesHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-[navy] to-slate-900 py-24 text-center text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300 bg-clip-text text-transparent">
            Video Downloader
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Download high-quality videos from YouTube, TikTok, and Facebook instantly. 
          Fast, secure, and completely free.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["YouTube", "TikTok", "Facebook"].map((platform) => (
            <span 
              key={platform}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20"
            >
              {platform}
            </span>
          ))}
        </div>
        
        <div className="animate-bounce">
          <svg className="w-6 h-6 mx-auto text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}