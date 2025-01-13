import React from 'react';

interface AnimatedButtonProps {
  text: string;
  onPress: () => void
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text,onPress }) => {
  return (
    <button 
      className="mt-[10px] mb-[30px] font-poppins font-bold border px-9 py-3 border-black relative overflow-hidden group hover:border-pink-500"
      onClick={onPress}>
      <span className="absolute inset-0 bg-pink-500 translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-0"></span>
      <span className="relative z-10 text-black group-hover:text-white">{text}</span>
    </button>
  );
};

export default AnimatedButton;
