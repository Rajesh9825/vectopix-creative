import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Play, Pause, Volume2, VolumeX,
  Maximize, Minimize, ChevronLeft, ChevronRight,
  SkipBack, SkipForward,
} from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  image: string;
  videoUrl?: string;
}

interface VideoPlayerModalProps {
  videos: VideoItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const VideoPlayerModal = ({ videos, currentIndex, isOpen, onClose }: VideoPlayerModalProps) => {
  const [index, setIndex] = useState(currentIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setIndex(currentIndex);
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  }, [currentIndex, isOpen]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

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

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    if (!isFullscreen) {
      await containerRef.current.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const ct = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setCurrentTime(ct);
    setProgress((ct / dur) * 100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pct * (videoRef.current.duration || 0);
  };

  const skip = (seconds: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.max(0, Math.min(videoRef.current.duration, videoRef.current.currentTime + seconds));
  };

  const handleNav = useCallback((dir: "prev" | "next") => {
    setIndex((i) => {
      if (dir === "prev") return i === 0 ? videos.length - 1 : i - 1;
      return i === videos.length - 1 ? 0 : i + 1;
    });
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  }, [videos.length]);

  const resetControlsTimer = () => {
    setShowControls(true);
    if (controlsTimer.current) clearTimeout(controlsTimer.current);
    controlsTimer.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === " ") { e.preventDefault(); togglePlay(); }
      if (e.key === "ArrowLeft") skip(-10);
      if (e.key === "ArrowRight") skip(10);
      if (e.key === "m") toggleMute();
      if (e.key === "f") toggleFullscreen();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  useEffect(() => {
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  if (!isOpen || videos.length === 0) return null;

  const current = videos[index];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col"
      >
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose} />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-black/60 border-b border-white/10">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-base font-semibold text-white truncate">{current.title}</h3>
            <p className="text-xs text-white/50">{index + 1} / {videos.length}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors ml-4">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video area */}
        <div
          ref={containerRef}
          className="relative z-10 flex-1 flex items-center justify-center overflow-hidden"
          onMouseMove={resetControlsTimer}
          onClick={resetControlsTimer}
        >
          <div className="relative w-full max-w-5xl mx-auto aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              key={current.id}
              src={current.videoUrl}
              poster={current.image}
              className="w-full h-full object-contain"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={() => setDuration(videoRef.current?.duration || 0)}
              onEnded={() => setIsPlaying(false)}
              onClick={togglePlay}
              playsInline
            />

            {/* Play overlay when paused */}
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                onClick={togglePlay}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all">
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 text-white ml-1" />
                </div>
              </div>
            )}

            {/* Controls bar */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: showControls ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-3 sm:px-5 pb-3 sm:pb-4 pt-10"
            >
              {/* Progress bar */}
              <div
                className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer group mb-3"
                onClick={handleSeek}
              >
                <div
                  className="h-full bg-primary rounded-full relative transition-all group-hover:h-2"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1 sm:gap-2">
                  <button onClick={() => skip(-10)} className="p-1.5 rounded-lg text-white/70 hover:text-white transition-colors">
                    <SkipBack className="w-4 h-4" />
                  </button>
                  <button onClick={togglePlay} className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
                    {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />}
                  </button>
                  <button onClick={() => skip(10)} className="p-1.5 rounded-lg text-white/70 hover:text-white transition-colors">
                    <SkipForward className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-white/60 ml-2 hidden sm:block">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <div className="flex items-center gap-1 sm:gap-2">
                  <button onClick={toggleMute} className="p-1.5 rounded-lg text-white/70 hover:text-white transition-colors">
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button onClick={toggleFullscreen} className="p-1.5 rounded-lg text-white/70 hover:text-white transition-colors">
                    {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Nav arrows */}
          {videos.length > 1 && (
            <>
              <button
                onClick={() => handleNav("prev")}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={() => handleNav("next")}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail strip */}
        {videos.length > 1 && (
          <div className="relative z-10 px-4 py-3 bg-black/60 border-t border-white/10">
            <div className="flex items-center justify-center gap-2 overflow-x-auto max-w-3xl mx-auto">
              {videos.map((vid, i) => (
                <button
                  key={vid.id}
                  onClick={() => { setIndex(i); setIsPlaying(false); setProgress(0); }}
                  className={`flex-shrink-0 w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all relative ${
                    i === index ? "border-primary ring-1 ring-primary/50 scale-105" : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <img src={vid.image} alt={vid.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-3 h-3 text-white drop-shadow-lg" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoPlayerModal;
