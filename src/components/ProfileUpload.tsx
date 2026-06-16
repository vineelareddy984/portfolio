import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ProfileUploadProps {
  isDarkMode: boolean;
}

const DEFAULT_AVATAR_URL = 'https://files.catbox.moe/g3rz4t.jpeg';

export default function ProfileUpload({ isDarkMode }: ProfileUploadProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Circle Frame Wrapper */}
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          id="profile-frame"
          className={`relative w-64 h-64 md:w-72 md:h-72 rounded-full p-[3.5px] transition-all duration-500 overflow-hidden ${
            isHovered 
              ? 'scale-102 shadow-2xl shadow-[#FF7A00]/25 ring-2 ring-[#FF7A00]/50' 
              : 'shadow-xl shadow-slate-900/10'
          } ${
            isDarkMode ? 'bg-gradient-to-tr from-slate-900 to-[#FF7A00]' : 'bg-gradient-to-tr from-orange-100 to-[#FF7A00]'
          }`}
        >
          <div className={`w-full h-full rounded-full overflow-hidden flex items-center justify-center relative ${
            isDarkMode ? 'bg-slate-950' : 'bg-slate-50'
          }`}>
            <img
              src={DEFAULT_AVATAR_URL}
              alt="Nallamilli Vineela Reddy"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Decorative corner sparkles */}
        <div className="absolute -top-1 -right-1 text-[#FF7A00] animate-bounce duration-3000">
          <Sparkles size={18} />
        </div>
      </div>
    </div>
  );
}

