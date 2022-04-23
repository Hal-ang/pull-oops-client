import React from 'react';
import { useCallback } from 'react';
import useDocument from '../../hooks/useDocument';
import { useMemo } from 'react';

const userStepId = 1;

const StepHeader = React.memo(
  ({ steps, isShowShadow }: { steps: number[]; isShowShadow?: boolean }) => {
    const { clientSize } = useDocument();

    const stepGuideLineInlineStyle = useMemo(
      () => ({ width: clientSize.width - 17 * 2, zIndex: -1 }),
      [clientSize.width]
    );

    const getButtonStyleClassName = useCallback(
      (id: number) => (userStepId >= id ? 'bg-[#4AA6C8]' : 'bg-[#C8C8C8]'),
      [userStepId]
    );

    return (
      <div id='main_header' className=' w-full flex'>
        <div
          className={`w-full relative ${
            isShowShadow ? 'pt-8' : 'pt-4'
          } pb-5 bg-white z-10`}
        >
          <div className='px-4 justify-between flex items-center z-20'>
            {steps.map((id, index) => (
              <div
                key={index}
                className={`rounded-full p-0.5 flex ${getButtonStyleClassName(
                  id
                )}`}
              >
                <div
                  className={`inline-block bg-[#4AA6C8] text-white border-2 border-white text-center items-center rounded-lg w-4 h-4 ${getButtonStyleClassName(
                    index
                  )}`}
                  style={{
                    fontSize: 8,
                  }}
                >
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
          <div
            style={stepGuideLineInlineStyle}
            className={`h-0.5 bg-[#010B37] bg-opacity-10 absolute ${
              isShowShadow ? 'top-10' : 'top-6'
            } left-4`}
          ></div>
          <div
            style={{
              width:
                (stepGuideLineInlineStyle.width / steps.length) *
                (userStepId + 1),
              maxWidth: stepGuideLineInlineStyle.width,
              zIndex: -1,
            }}
            className={`h-0.5 bg-[#4AA6C8] absolute ${
              isShowShadow ? 'top-10' : 'top-6'
            } left-4`}
          ></div>
        </div>
        {isShowShadow && (
          <div
            style={{ top: 72 }}
            className='h-8 w-full bg-gradient-to-b from-white to-transparent absolute z-20'
          ></div>
        )}
      </div>
    );
  }
);

export default StepHeader;
