import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { Camera, User, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ProfileUploadProps {
  isDarkMode: boolean;
}

const STORAGE_KEY = 'vineela_portfolio_avatar';

export default function ProfileUpload({ isDarkMode }: ProfileUploadProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load avatar on mount
  useEffect(() => {
    try {
      const storedImage = localStorage.getItem(STORAGE_KEY);
      if (storedImage) {
        setImageUrl(storedImage);
      }
    } catch (e) {
      console.error('Failed to load avatar from localStorage', e);
    }
  }, []);

  const handleImageResizeAndStore = (file: File) => {
    setErrorStatus(null);
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // Prepare HTML5 Canvas
        const canvas = document.createElement('canvas');
        const maxSize = 400; // Limit profile to 400x400 to optimize LocalStorage size
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxSize) {
            height = Math.round((height * maxSize) / width);
            width = maxSize;
          }
        } else {
          if (height > maxSize) {
            width = Math.round((width * maxSize) / height);
            height = maxSize;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          try {
            // Compress as JPEG of quality 0.8
            const compressedBase64 = canvas.toDataURL('image/jpeg', 0.8);
            localStorage.setItem(STORAGE_KEY, compressedBase64);
            setImageUrl(compressedBase64);
          } catch (storageError) {
            console.error('LocalStorage is full', storageError);
            setErrorStatus('Failed to save in storage. Image too large!');
          }
        }
      };
      img.onerror = () => {
        setErrorStatus('Failed to load selected image.');
      };
      if (e.target?.result) {
        img.src = e.target.result as string;
      }
    };

    reader.onerror = () => {
      setErrorStatus('Failed to read file.');
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      if (!file.type.match('image.*')) {
        setErrorStatus('Please select a valid image file (PNG/JPG).');
        return;
      }
      handleImageResizeAndStore(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeImage = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setImageUrl(null);
      setErrorStatus(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (e) {
      console.error(e);
    }
  };

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
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Nallamilli Vineela Reddy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            ) : (
              // Perfect stylized placeholders
              <div className="flex flex-col items-center text-center px-4 space-y-2">
                <div className="w-14 h-14 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] flex items-center justify-center">
                  <User size={28} />
                </div>
                <div className="flex flex-col">
                  <span className={`text-base font-bold font-display ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                    Upload Image
                  </span>
                  <span className="text-[11px] text-slate-500 max-w-[150px] mt-1 leading-normal">
                    Drag/select your photo to personalize the recruiter view
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Decorative corner sparkles */}
        <div className="absolute -top-1 -right-1 text-[#FF7A00] animate-bounce duration-3000">
          <Sparkles size={18} />
        </div>
      </div>

      {/* Control Buttons Group (Only show upload button if no imageUrl exists) */}
      {!imageUrl && (
        <div className="mt-6 flex flex-wrap gap-2.5 justify-center items-center max-w-sm">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          <button
            id="btn-upload-avatar"
            onClick={triggerFileInput}
            className="inline-flex items-center space-x-1 px-4 py-2 text-xs font-semibold rounded-lg bg-[#FF7A00]/10 text-[#FF7A00] ring-1 ring-[#FF7A00]/30 hover:bg-[#FF7A00]/20 transition-all font-display active:scale-95"
          >
            <Camera size={14} />
            <span>Upload Profile Image</span>
          </button>
        </div>
      )}

      {/* Error state message */}
      {errorStatus && (
        <span className="text-xs text-rose-400 mt-2.5 font-sans font-medium text-center max-w-xs block animate-pulse">
          {errorStatus}
        </span>
      )}
    </div>
  );
}
