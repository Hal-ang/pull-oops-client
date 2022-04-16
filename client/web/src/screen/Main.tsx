import React from 'react';
import {STEPS_DATA} from '../demo/main';
import {useMemo} from 'react';

const userStepId = 3;
const Main = () => {
  const clientWidth = useMemo(() => {
    const clientWidth = document.getElementById('root')?.clientWidth;
    if (clientWidth) {
      return clientWidth - 17 * 2;
    }
    return 0;
  }, []);

  const steps = useMemo(() => STEPS_DATA.data.Step, []);

  return (
    <div className="h-screen w-full bg-black">
      <div className="w-full relative pt-8 pb-5 bg-white z-10">
        <div className="px-4 justify-between flex items-center z-20">
          {steps.map((_, index) => (
            <div key={index} className="rounded-full bg-[#4AA6C8] p-0.5 flex">
              <div
                className="number inline-block bg-[#4AA6C8] text-white border-2 border-white text-center items-center rounded-lg w-4 h-4"
                style={{
                  fontSize: 8,
                }}>
                {index + 1}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{width: clientWidth, zIndex: -1}}
          className="h-0.5 bg-[#010B37] bg-opacity-10 absolute top-10 left-4"></div>
        <div
          style={{
            width: (clientWidth / steps.length) * userStepId + 1,
            zIndex: -1,
          }}
          className="h-0.5 bg-[#4AA6C8] absolute top-10 left-4"></div>
      </div>
      <div className="h-8 w-full bg-gradient-to-b from-white to-transparent"></div>
    </div>
  );
};

export default Main;
