import React, { useState, useEffect } from "react";
interface AppProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const CircularProgressBar: React.FC<AppProps> = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress]);

  const handleLoading = () => {
    setLoading(false);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  relative">
      <p className="text-md text-[#857d6f] font-bold mb-4">{progress}%</p>
      <svg width="300" height="300" className="mb-6">
        <circle
          className="stroke-current text-[#857d6f]"
          cx="150"
          cy="150"
          r="140"
          strokeWidth="2"
          strokeDasharray="879.64"
          strokeDashoffset={(879.64 * (100 - progress)) / 100}
          fill="transparent"
        />
      </svg>
      {progress > 90 && (
        <button
          className="border border-[#857d6f] text-[#857d6f] px-16 font-bold uppercase hover:bg-[#857d6f] hover:text-black  py-2 rounded-xl shadow"
          onClick={handleLoading}
        >
          Start
        </button>
      )}
      <img src="/images/logo.gif" alt=" gif" className="absolute top-50 w-24" />
    </div>
  );
};

export default CircularProgressBar;
