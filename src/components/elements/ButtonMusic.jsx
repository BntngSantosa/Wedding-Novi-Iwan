import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import cundamani from "../../assets/music/music.m4a";

export default function ButtonMusic({ autoPlay }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Toggles audio playback and updates the playing state
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Auto play functionality when the `autoPlay` prop is true
  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [autoPlay]);

  // Restart music when it ends
  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const handleAudioEnd = () => {
        audioElement.play();
      };

      audioElement.addEventListener("ended", handleAudioEnd);
      return () => {
        audioElement.removeEventListener("ended", handleAudioEnd);
      };
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-10">
      <div className="flex items-center">
        <button
          onClick={togglePlay}
          className="p-3 rounded-full bg-primary text-secondary shadow-lg focus:outline-none"
          aria-label={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>
        {/* Hidden Audio element */}
        <audio ref={audioRef} src={cundamani} />
      </div>
    </div>
  );
}
