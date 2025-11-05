import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTwirling, setIsTwirling] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with a calm ambient track
    // Using a free 432Hz meditation music URL
    const audio = new Audio("https://cdn.pixabay.com/audio/2022/05/13/audio_2f6f3b8558.mp3");
    audio.loop = true;
    audio.volume = 0.2;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    setIsTwirling(true);
    setTimeout(() => setIsTwirling(false), 600);

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch((error) => {
          console.log("Audio playback failed:", error);
        });
        setIsPlaying(true);
      }
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className={`border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary glow-cyan transition-all duration-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary ${
        isTwirling ? "animate-spin" : ""
      }`}
      aria-label={isPlaying ? "Pause background music" : "Play background music"}
    >
      {isPlaying ? (
        <Volume2 className="h-6 w-6" />
      ) : (
        <VolumeX className="h-6 w-6" />
      )}
    </button>
  );
};

export default BackgroundMusic;
