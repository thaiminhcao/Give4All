import { Typography, Tooltip } from '@mui/material';
import React from 'react';

const PercentLine = ({
  title,
  value,
  total,
  widthPercent,
}: {
  title: string;
  value: number;
  total: number;
  widthPercent: string;
}) => {
  return (
    <>
      <div className="flex">
        <h1 className="w-32 text-xl font-semibold text-black">{title}</h1>
        <h1 className="w-32 text-xl font-semibold text-black">
          {total?.toString()}
        </h1>
      </div>
      <Tooltip
        title={
          <Typography>
            {value} / {total}
          </Typography>
        }
        className="w-fit"
      >
        <div className="mt-2 h-2 w-full rounded-full border border-cyan-700 bg-white dark:bg-gray-700">
          <div
            className="h-full rounded-full bg-cyan-700"
            style={{ width: widthPercent }}
          ></div>
        </div>
      </Tooltip>
    </>
  );
};

export default PercentLine;
