import React, { useState, useEffect, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import UrlForm from "./UrlForm";
import VideoMetaCard from "./VideoMetaCard";
import ServicesHero from "./ServicesHero";
import PlatformStats from "./PlatformStats";
import LoadingSpinner from "./LoadingSpinner";

const PLATFORMS = [
  { 
    name: "YouTube", 
    placeholder: "https://www.youtube.com/watch?v=... or https://youtu.be/...",
    icon: "▶️",
    color: "from-red-500 to-red-600",
    tips: [
      "Remove 'list=' parameters for better results",
      "Works with most public YouTube videos",
      "Supports multiple quality options"
    ]
  },
  { 
    name: "TikTok", 
    placeholder: "https://www.tiktok.com/@user/video/...",
    icon: "🎵",
    color: "from-gray-900 to-gray-700",
    tips: [
      "Some TikTok videos may be region-restricted",
      "Works with most public TikTok videos",
      "Video quality may vary"
    ]
  },
  { 
    name: "Facebook", 
    placeholder: "https://www.facebook.com/watch/?v=...",
    icon: "👥",
    color: "from-blue-600 to-blue-800",
    tips: [
      "Works with public Facebook videos",
      "May not work with private videos",
      "Supports reels and regular videos"
    ]
  }
];

export default function PlatformDownloadSection() {
  const [inputs, setInputs] = useState({ YouTube: "", TikTok: "", Facebook: "" });
  const [metas, setMetas] = useState({ YouTube: null, TikTok: null, Facebook: null });
  const [loadingMeta, setLoadingMeta] = useState({ YouTube: false, TikTok: false, Facebook: false });
  const [formatIds, setFormatIds] = useState({ YouTube: "", TikTok: "", Facebook: "" });
  const [apiKeys, setApiKeys] = useState({ YouTube: "", TikTok: "", Facebook: "" });
  const [errors, setErrors] = useState({ YouTube: "", TikTok: "", Facebook: "" });
  const [stats, setStats] = useState({ totalDownloads: 0, successfulDownloads: 0 });
  const [activeTips, setActiveTips] = useState({ YouTube: false, TikTok: false, Facebook: false });

  useEffect(() => { 
    AOS.init({ 
      duration: 800, 
      once: true,
      easing: 'ease-out-cubic'
    }); 
  }, []);

  const fetchMeta = useCallback(async (platform) => {
    const url = inputs[platform]?.trim();
    if (!url) {
      setErrors(prev => ({ ...prev, [platform]: "Please enter a video URL." }));
      return;
    }

    // Enhanced URL validation
    if (!url.startsWith('http')) {
      setErrors(prev => ({ ...prev, [platform]: "Please enter a valid URL starting with http:// or https://" }));
      return;
    }

    // Check for YouTube playlist URLs and warn user
    if (platform === 'YouTube' && (url.includes('list=') || url.includes('&index='))) {
      setErrors(prev => ({ 
        ...prev, 
        [platform]: "Playlist URLs are detected. Only single videos are supported. Trying to extract the video..." 
      }));
    }

    // Clear previous state
    setErrors(prev => ({ ...prev, [platform]: "" }));
    setMetas(prev => ({ ...prev, [platform]: null }));

    try {
      setLoadingMeta(prev => ({ ...prev, [platform]: true }));
      
      const response = await fetch(`/api/metadata?url=${encodeURIComponent(url)}`);
      
      // Check if response is OK and has content
      if (!response.ok) {
        const errorText = await response.text();
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }
        
        // Handle different HTTP status codes
        switch (response.status) {
          case 400:
            throw new Error(errorData.error || 'Invalid URL format');
          case 404:
            throw new Error(errorData.error || 'Video not found or unavailable');
          case 422:
            throw new Error(errorData.error || 'Could not process this video URL');
          case 503:
            throw new Error(errorData.error || 'Service temporarily unavailable. Please try again later.');
          default:
            throw new Error(errorData.error || `Server error: ${response.status}`);
        }
      }

      // Check if response has content
      const text = await response.text();
      if (!text) {
        throw new Error("Empty response from server");
      }

      const data = JSON.parse(text);
      
      if (!data.success) {
        throw new Error(data.error || "Failed to fetch video information");
      }

      setMetas(prev => ({ ...prev, [platform]: data.data }));
      
      // Auto-select first available format
      if (data.data.options?.length > 0) {
        setFormatIds(prev => ({ ...prev, [platform]: data.data.options[0].id }));
      }

    } catch (err) {
      console.error(`Error fetching ${platform} metadata:`, err);
      
      let userFriendlyError = err.message;
      
      // Provide more user-friendly error messages
      if (err.message.includes('unavailable') || err.message.includes('restricted')) {
        userFriendlyError = "This video is unavailable, private, or restricted in your region.";
      } else if (err.message.includes('Network error') || err.message.includes('connection')) {
        userFriendlyError = "Network error. Please check your connection and try again.";
      } else if (err.message.includes('not found') || err.message.includes('No data')) {
        userFriendlyError = "Video not found. Please check the URL and try again.";
      } else if (err.message.includes('Playlist URLs')) {
        userFriendlyError = "Playlist URLs are not supported. Please use a direct video URL without 'list=' parameter.";
      } else if (err.message.includes('not supported')) {
        userFriendlyError = "This video format or URL is not supported.";
      } else if (err.message.includes('Service temporarily unavailable')) {
        userFriendlyError = "Service is temporarily busy. Please try again in a moment.";
      } else if (err.message.includes('timeout')) {
        userFriendlyError = "Request timed out. The video might be too large or the server is busy.";
      } else if (err.message.includes('yt-dlp')) {
        userFriendlyError = "Video processing service is currently unavailable. Please try again later.";
      } else if (err.message.includes('Invalid URL')) {
        userFriendlyError = "Please check the URL format and try again.";
      }
      
      setErrors(prev => ({ 
        ...prev, 
        [platform]: userFriendlyError 
      }));
    } finally {
      setLoadingMeta(prev => ({ ...prev, [platform]: false }));
    }
  }, [inputs]);

  const downloadVideo = useCallback(async (platform) => {
    const url = inputs[platform]?.trim();
    if (!url) {
      setErrors(prev => ({ ...prev, [platform]: "No URL provided." }));
      return;
    }

    try {
      const params = new URLSearchParams({ url });
      if (formatIds[platform]) params.append("format", formatIds[platform]);
      if (apiKeys[platform]) params.append("key", apiKeys[platform]);

      // Create download link
      const a = document.createElement("a");
      a.href = `/api/download?${params.toString()}`;
      
      // Set appropriate filename based on format
      const isAudio = formatIds[platform]?.includes('audio');
      a.download = isAudio ? "audio.mp3" : "video.mp4";
      a.style.display = "none";
      
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Update stats
      setStats(prev => ({
        totalDownloads: prev.totalDownloads + 1,
        successfulDownloads: prev.successfulDownloads + 1
      }));

    } catch (error) {
      console.error(`Download error for ${platform}:`, error);
      setErrors(prev => ({ 
        ...prev, 
        [platform]: "Download failed. The video might be unavailable, too large, or protected." 
      }));
      setStats(prev => ({ ...prev, totalDownloads: prev.totalDownloads + 1 }));
    }
  }, [inputs, formatIds, apiKeys]);

  const clearPlatform = useCallback((platform) => {
    setInputs(prev => ({ ...prev, [platform]: "" }));
    setMetas(prev => ({ ...prev, [platform]: null }));
    setErrors(prev => ({ ...prev, [platform]: "" }));
    setFormatIds(prev => ({ ...prev, [platform]: "" }));
    setActiveTips(prev => ({ ...prev, [platform]: false }));
  }, []);

  const toggleTips = useCallback((platform) => {
    setActiveTips(prev => ({ ...prev, [platform]: !prev[platform] }));
  }, []);

  const handleInputChange = useCallback((platform, value) => {
    setInputs(prev => ({ ...prev, [platform]: value }));
    // Clear errors when user starts typing
    if (value && errors[platform]) {
      setErrors(prev => ({ ...prev, [platform]: "" }));
    }
  }, [errors]);

  return (
    <>
      <ServicesHero />
      
      <PlatformStats stats={stats} />
      
      <section className="py-16 bg-gradient-to-br from-slate-900 via-[navy] to-slate-900 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Global Tips Section */}
          <div className="mb-8 text-center" data-aos="fade-up">
            <div className="inline-flex flex-col items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-lg px-6 py-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <span className="text-blue-400 text-lg">💡</span>
                <p className="text-sm text-blue-300 font-medium">
                  <strong>Pro Tip:</strong> For best results, use direct video URLs and ensure videos are public
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-2 text-xs text-blue-400">
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Update yt-dlp regularly
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Use public videos only
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Check regional restrictions
                </span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-8">
            {PLATFORMS.map((platform, index) => (
              <div 
                key={platform.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative"
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[navy] to-slate-900 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                
                {/* Main Card */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-300 border border-amber-700/50 backdrop-blur-sm shadow-2xl hover:translate-y-2 transition-all duration-300">
                  
                  {/* Platform Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{platform.icon}</span>
                      <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {platform.name}
                      </h2>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {/* Tips Button */}
                      <button
                        onClick={() => toggleTips(platform.name)}
                        className="p-2 text-blue-900 hover:text-blue-400 transition-colors duration-200 rounded-lg hover:bg-slate-700/50"
                        title="Show tips"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                      
                      {/* Clear Button */}
                      {inputs[platform.name] && (
                        <button
                          onClick={() => clearPlatform(platform.name)}
                          className="p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-slate-700/50"
                          title="Clear"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Platform Tips */}
                  {activeTips[platform.name] && (
                    <div className="mb-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      <h4 className="text-sm font-medium text-blue-400 mb-2 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        {platform.name} Tips
                      </h4>
                      <ul className="text-xs text-blue-300 space-y-1">
                        {platform.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2">
                            <span className="text-blue-400 mt-0.5">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* URL Form */}
                  <UrlForm
                    url={inputs[platform.name]}
                    setUrl={(value) => handleInputChange(platform.name, value)}
                    fetchMeta={e => { e.preventDefault(); fetchMeta(platform.name); }}
                    loadingMeta={loadingMeta[platform.name]}
                    placeholder={platform.placeholder}
                  />

                  {/* Error Display */}
                  {errors[platform.name] && (
                    <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                      <div className="flex items-start space-x-2 text-red-400">
                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <div className="flex-1">
                          <span className="text-sm font-medium block">{errors[platform.name]}</span>
                          
                          {/* Error-specific suggestions */}
                          {errors[platform.name].includes('unavailable') && (
                            <div className="text-xs text-red-300 mt-1 space-y-1">
                              <p>• The video might be private, deleted, or region-locked</p>
                              <p>• Try a different video from the same platform</p>
                              <p>• Check if the video is publicly accessible</p>
                            </div>
                          )}
                          
                          {errors[platform.name].includes('Playlist') && (
                            <div className="text-xs text-red-300 mt-1 space-y-1">
                              <p>• Remove everything after the video ID in the URL</p>
                              <p>• For YouTube: Use format: https://www.youtube.com/watch?v=VIDEO_ID</p>
                              <p>• For youtu.be: Use format: https://youtu.be/VIDEO_ID</p>
                            </div>
                          )}
                          
                          {errors[platform.name].includes('Network error') && (
                            <div className="text-xs text-red-300 mt-1 space-y-1">
                              <p>• Check your internet connection</p>
                              <p>• The server might be temporarily busy</p>
                              <p>• Try again in a few moments</p>
                            </div>
                          )}
                          
                          {errors[platform.name].includes('not supported') && (
                            <div className="text-xs text-red-300 mt-1 space-y-1">
                              <p>• Ensure you're using a supported platform</p>
                              <p>• Try a different video URL format</p>
                              <p>• Some video types may not be supported</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Loading State */}
                  {loadingMeta[platform.name] && (
                    <div className="mt-4 flex justify-center">
                      <LoadingSpinner />
                    </div>
                  )}

                  {/* Video Metadata */}
                  <VideoMetaCard
                    meta={metas[platform.name]}
                    formatId={formatIds[platform.name]}
                    setFormatId={value => setFormatIds(prev => ({ ...prev, [platform.name]: value }))}
                    apiKey={apiKeys[platform.name]}
                    setApiKey={value => setApiKeys(prev => ({ ...prev, [platform.name]: value }))}
                    download={() => downloadVideo(platform.name)}
                    platform={platform.name}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Footer Notes & Status */}
          <div className="mt-12 text-center" data-aos="fade-up">
            <div className="max-w-4xl mx-auto space-y-4">
              
              {/* Service Status */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400 font-medium">Service Operational</span>
              </div>

              {/* Main Description */}
              <div className="space-y-3">
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-gray-300">Powered by yt-dlp</strong> — A versatile video downloader that supports multiple platforms. 
                  Some videos may not be available due to regional restrictions, privacy settings, or platform limitations.
                </p>
                
                {/* Feature Highlights */}
                <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Multiple Quality Options
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Audio-Only Downloads
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    No Watermarks
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Fast Processing
                  </span>
                </div>

                {/* Support Note */}
                <div className="pt-4 border-t border-gray-700/50">
                  <p className="text-xs text-gray-500">
                    Having issues? Ensure yt-dlp is updated on the server and try using direct video URLs without additional parameters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}