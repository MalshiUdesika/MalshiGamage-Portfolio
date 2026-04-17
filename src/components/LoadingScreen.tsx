import { useState, useEffect } from "react";
import logo from "@/assets/logo.png"; 

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setVisible(false);
          }, 500);

          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo Container */}
      <div className="relative mb-10 flex items-center justify-center">
        {/* Soft glow background */}
        <div className="absolute w-28 h-28 rounded-full bg-primary/10 blur-2xl animate-pulse" />

        {/* Logo */}
        <div className="w-24 h-24 rounded-2xl bg-background/60 backdrop-blur-md border border-border flex items-center justify-center shadow-lg">
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 object-contain animate-fade-in"
          />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-56 h-2 bg-muted/60 rounded-full overflow-hidden mb-5">
        <div
          className="h-full bg-primary rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading Text */}
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
        Loading experience...
      </p>
    </div>
  );
};

export default LoadingScreen;