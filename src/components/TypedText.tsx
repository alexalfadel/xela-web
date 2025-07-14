import { useState, useEffect } from 'react';

interface TypedTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cycle?: boolean;
  pauseDuration?: number;
}

const TypedText = ({ text, speed = 60, delay = 1000, className = '', cycle = false, pauseDuration = 2000 }: TypedTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTyping = () => {
      setIsTyping(true);
      setDisplayedText('');
      let currentIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          
          if (cycle) {
            setTimeout(() => {
              startTyping();
            }, pauseDuration);
          }
        }
      }, speed);

      return () => clearInterval(typeInterval);
    };

    const timer = setTimeout(startTyping, delay);
    return () => clearTimeout(timer);
  }, [text, speed, delay, cycle, pauseDuration]);

  return (
    <span className={`${className} ${isTyping ? 'typed-cursor' : ''}`}>
      {displayedText}
      {isTyping && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default TypedText;