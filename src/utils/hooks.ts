import { useEffect, useState } from 'react';

const words = [
  'Aspiring Software Engineer',
  'AI Enthusiast',
  'Problem Solver'
];

export function useTypingEffect() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      // Pause when full phrase is completed
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      // Move to next word when erased
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // Dynamic speeds for typing vs erasing
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 85);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    setText(words[index].substring(0, subIndex));
  }, [subIndex, index]);

  return text;
}
