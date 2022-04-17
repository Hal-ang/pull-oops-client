import React from 'react';
import useDocument from '../../hooks/useDocument';
import {useMemo} from 'react';

const userStepId = 3;

const StepHeader = React.memo(
  ({
    stepCounts,
    isShowShadow,
  }: {
    stepCounts: number;
    isShowShadow?: boolean;
  }) => {
    const {clientSize} = useDocument();

    const stepGuideLineInlineStyle = useMemo(
      () => ({width: clientSize.width - 17 * 2, zIndex: -1}),
      [clientSize.width],
    );

    return (
      <div id="main_header" className=" w-full flex">
        <div className="w-full relative pt-8 pb-5 bg-white z-10">
          <div className="px-4 justify-between flex items-center z-20">
            {Array.from(Array(stepCounts)).map((_, index) => (
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
            style={stepGuideLineInlineStyle}
            className="h-0.5 bg-[#010B37] bg-opacity-10 absolute top-10 left-4"></div>
          <div
            style={{
              width:
                (stepGuideLineInlineStyle.width / stepCounts) * userStepId + 1,
              zIndex: -1,
            }}
            className="h-0.5 bg-[#4AA6C8] absolute top-10 left-4"></div>
        </div>
        {isShowShadow && (
          <div
            style={{top: 72}}
            className="h-8 w-full bg-gradient-to-b from-white to-transparent absolute z-20"></div>
        )}
      </div>
    );
  },
);

export default StepHeader;
