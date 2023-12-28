import React from 'react';

const CustomArea: React.FC<{ value: any; title: string }> = ({
  value,
  title,
}) => {
  return (
    <div className="mg h-full w-full justify-items-center rounded border border-solid border-cyan-800 bg-cyan-100  p-8 lg:p-10">
      <h1 className="text-center text-3xl  font-normal text-black">{value}</h1>
      <h1 className="text-center text-sm font-normal  text-black">{title}</h1>
    </div>
  );
};

export default CustomArea;
