import React, { ReactNode } from 'react';

const kind = new Map<string, string>([
  [
    'yellow',
    'h-10 w-36 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black border border-solid border-yellow-800',
  ],
  [
    'cyan',
    'h-10 w-36 rounded-lg bg-cyan-100 hover:bg-cyan-200 text-cyan-700 border border-solid border-cyan-800',
  ],
  [
    'connect',
    'mt-1.5 rounded-lg bg-cyan-100 p-2 px-5 font-extrabold text-cyan-900'
  ]
]);

const CustomButton: React.FC<{
  style: string;
  handlerClick?: () => void;
  title: string;
}> = ({ style, handlerClick, title }) => {
  return (
    <button className={kind.get(style)} onClick={handlerClick}>
      {title}
    </button>
  );
};

export default CustomButton;
