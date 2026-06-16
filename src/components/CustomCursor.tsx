import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if the device matches media pointer-fine (has mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isClickable = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.closest('[role="button"]') !== null ||
        target.classList.contains('clickable');

      setHovered(isClickable);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Outer Glowing Circle */}
      <div
        id="custom-cursor-glow"
        className="pointer-events-none fixed z-[9999] rounded-full hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: clicked ? '28px' : hovered ? '48px' : '32px',
          height: clicked ? '28px' : hovered ? '48px' : '32px',
          transform: 'translate(-50%, -50%)',
          border: '1.5px solid #FF7A00',
          backgroundColor: hovered ? 'rgba(255, 122, 0, 0.15)' : 'rgba(255, 122, 0, 0.02)',
          boxShadow: hovered 
            ? '0 0 20px rgba(255, 122, 0, 0.6), inset 0 0 10px rgba(255, 122, 0, 0.3)' 
            : '0 0 10px rgba(255, 122, 0, 0.2)',
          transition: 'width 150ms cubic-bezier(0.16, 1, 0.3, 1), height 150ms cubic-bezier(0.16, 1, 0.3, 1), background-color 150ms ease-out, border-color 150ms ease-out, box-shadow 150ms ease-out',
        }}
      />
      {/* Solid Inner Dot */}
      <div
        id="custom-cursor-dot"
        className="pointer-events-none fixed z-[9999] w-2 h-2 bg-[#FF7A00] rounded-full hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.6 : hovered ? 1.4 : 1})`,
          transition: 'transform 100ms cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '0 0 8px #FF7A00',
        }}
      />
    </>
  );
}
