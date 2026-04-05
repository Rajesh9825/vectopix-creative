import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Play, Pause, Volume2, VolumeX,
  Maximize, SkipForward, SkipBack, X,
} from "lucide-react";

interface InlineVideoCardProps {
  id: string;
  title: string;
  image: string;
  videoUrl?: string;
  index: number;
}

/** Detect if URL is YouTube */
function isYouTube(url?: string): boolean {
  if (!url) return false;
  return url.includes("youtube.com") || url.includes("youtu.be");
}

/** Extract YouTube video ID */
function getYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&\s]+)/,
    /(?:youtu\.be\/)([^?\s]+)/,
    /(?:youtube\.com\/embed\/)([^?\s]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

function getDriveEmbedUrl(url: string): string {
  const m = url.match(/\/d\/([^/]+)/);
  if (m) return `https://drive.google.com/file/d/${m[1]}/preview`;
  return url;
}

const InlineVideoCard = ({ id, title, image, videoUrl, index }: InlineVideoCardProps) => {
  const [playing, setPlaying] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePlay = () => setPlaying(true);

  const handleFullscreen = useCallback(async () => {
    if (!cardRef.current) return;
    if (!fullscreen) {
      await cardRef.current.requestFullscreen?.();
      setFullscreen(true);
    } else {
      await document.exitFullscreen?.();
      setFullscreen(false);
    }
  }, [fullscreen]);

  // Listen for fullscreen exit
  const handleFsChange = useCallback(() => {
    if (!document.fullscreenElement) setFullscreen(false);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`group ${fullscreen ? "bg-black flex items-center justify-center" : ""}`}
      onTransitionEnd={() => document.addEventListener("fullscreenchange", handleFsChange)}
    >
      <div className={`rounded-2xl relative overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300 ${
        fullscreen ? "w-full h-full rounded-none border-none" : "aspect-[16/9]"
      }`}>
        {!playing ? (
          /* Thumbnail with play button */
          <>
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={handlePlay}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white ml-0.5" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight">{title}</h3>
              <span className="inline-flex items-center gap-1 mt-1.5 text-xs text-white/60">
                <Play className="w-3 h-3" /> Click to play
              </span>
            </div>
          </>
        ) : isYouTube(videoUrl) ? (
          /* YouTube embed with native controls */
          <YouTubePlayer
            videoUrl={videoUrl!}
            title={title}
            onClose={() => setPlaying(false)}
            onFullscreen={handleFullscreen}
            isFullscreen={fullscreen}
          />
        ) : videoUrl?.includes("drive.google.com") ? (
          /* Google Drive embed */
          <div className="relative w-full h-full">
            <iframe
              src={getDriveEmbedUrl(videoUrl)}
              title={title}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{ border: 0 }}
            />
            <button
              onClick={() => setPlaying(false)}
              className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Direct MP4 player with custom controls */
          <DirectVideoPlayer
            id={id}
            videoUrl={videoUrl}
            image={image}
            title={title}
            onClose={() => setPlaying(false)}
            onFullscreen={handleFullscreen}
            isFullscreen={fullscreen}
          />
        )}
      </div>
    </motion.div>
  );
};

/* ─── YouTube Embed Player ─── */
const YouTubePlayer = ({
  videoUrl, title, onClose, onFullscreen, isFullscreen,
}: {
  videoUrl: string; title: string; onClose: () => void;
  onFullscreen: () => void; isFullscreen: boolean;
}) => {
  const ytId = getYouTubeId(videoUrl);
  const embedSrc = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1&controls=1&fs=1&playsinline=1`;

  return (
    <div className="relative w-full h-full">
      <iframe
        src={embedSrc}
        title={title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowFullScreen
        style={{ border: 0 }}
      />
      {/* Overlay controls */}
      <div className="absolute top-2 right-2 flex items-center gap-1.5 z-10">
        <button
          onClick={onFullscreen}
          className="p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
          title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
        >
          <Maximize className="w-4 h-4" />
        </button>
        <button
          onClick={onClose}
          className="p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
          title="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

/* ─── Direct MP4 Player ─── */
const DirectVideoPlayer = ({
  id, videoUrl, image, title, onClose, onFullscreen, isFullscreen,
}: {
  id: string; videoUrl?: string; image: string; title: string;
  onClose: () => void; onFullscreen: () => void; isFullscreen: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const skip = (seconds: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.max(0, Math.min(videoRef.current.duration, videoRef.current.currentTime + seconds));
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pct * (videoRef.current.duration || 0);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const ct = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setCurrentTime(ct);
    setProgress((ct / dur) * 100);
  };

  return (
    <div className="relative w-full h-full bg-black">
      <video
        ref={videoRef}
        key={id}
        src={videoUrl}
        poster={image}
        className="w-full h-full object-contain"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => {
          setDuration(videoRef.current?.duration || 0);
          videoRef.current?.play();
        }}
        onEnded={() => setIsPlaying(false)}
        onClick={togglePlay}
        playsInline
        autoPlay
      />

      {/* Controls overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-3 pb-2.5 pt-8">
        {/* Progress bar */}
        <div className="w-full h-1 bg-white/20 rounded-full cursor-pointer group/bar mb-2" onClick={handleSeek}>
          <div className="h-full bg-primary rounded-full relative group-hover/bar:h-1.5 transition-all" style={{ width: `${progress}%` }}>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow opacity-0 group-hover/bar:opacity-100 transition-opacity" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button onClick={() => skip(-10)} className="p-1 rounded text-white/70 hover:text-white transition-colors" title="Back 10s">
              <SkipBack className="w-3.5 h-3.5" />
            </button>
            <button onClick={togglePlay} className="p-1 rounded text-white hover:text-white transition-colors">
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
            <button onClick={() => skip(10)} className="p-1 rounded text-white/70 hover:text-white transition-colors" title="Forward 10s">
              <SkipForward className="w-3.5 h-3.5" />
            </button>
            <span className="text-[10px] text-white/50 ml-1.5">{formatTime(currentTime)} / {formatTime(duration)}</span>
          </div>
          <div className="flex items-center gap-1">
            <button onClick={toggleMute} className="p-1 rounded text-white/70 hover:text-white transition-colors" title={isMuted ? "Unmute" : "Mute"}>
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
            <button onClick={onFullscreen} className="p-1 rounded text-white/70 hover:text-white transition-colors" title="Fullscreen">
              <Maximize className="w-3.5 h-3.5" />
            </button>
            <button onClick={onClose} className="p-1 rounded text-white/70 hover:text-white transition-colors" title="Close">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InlineVideoCard;
