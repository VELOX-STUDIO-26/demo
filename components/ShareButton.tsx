"use client";

import { useState } from "react";
import { Share2, X, Facebook, Linkedin, Link as LinkIcon } from "lucide-react";

interface ShareButtonProps {
  title: string;
  url: string;
}

export default function ShareButton({ title, url }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const fullUrl = typeof window !== "undefined" ? `${window.location.origin}${url}` : url;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const openShare = (url: string) => {
    window.open(url, "_blank", "width=600,height=400");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="ml-auto w-10 h-10 flex items-center justify-center rounded-full border border-border/60 hover:bg-ice transition-colors"
        aria-label="Share article"
      >
        <Share2 size={18} className="text-caption" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>

            {/* Title */}
            <h3 className="text-xl font-heading font-semibold text-primary mb-2">
              Share Article
            </h3>
            <p className="text-caption text-sm mb-6">
              Share this article with your network
            </p>

            {/* Link display with copy */}
            <div className="mb-6">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                Page Link
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={fullUrl}
                  readOnly
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 truncate"
                />
                <button
                  onClick={handleCopyLink}
                  className="px-4 py-3 bg-accent text-white rounded-lg hover:brightness-110 transition-all flex items-center gap-2"
                >
                  <LinkIcon size={16} />
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* Social share buttons */}
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => openShare(shareLinks.facebook)}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Facebook size={20} className="text-white" />
                </div>
                <span className="text-xs font-medium text-gray-600">Facebook</span>
              </button>

              <button
                onClick={() => openShare(shareLinks.twitter)}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 hover:bg-sky-50 hover:border-sky-200 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-600">X</span>
              </button>

              <button
                onClick={() => openShare(shareLinks.linkedin)}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin size={20} className="text-white" />
                </div>
                <span className="text-xs font-medium text-gray-600">LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
