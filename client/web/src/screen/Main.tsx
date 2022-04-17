import React from 'react';
import {STEPS_DATA} from '../demo/main';
import {getContentHeight} from '../util';
import useDocument from '../hooks/useDocument';
import {useMemo} from 'react';

const userStepId = 3;

const Main = () => {
  const {clientSize} = useDocument();

  const stepGuideLineInlineStyle = useMemo(
    () => ({width: clientSize.width - 17 * 2, zIndex: -1}),
    [clientSize.width],
  );

  const cardHeight = useMemo(
    () =>
      getContentHeight(clientSize.width - 25 * 2, {width: 310, height: 419}),
    [clientSize],
  );

  const steps = useMemo(() => STEPS_DATA.data.Step, []);

  return (
    <div className="h-screen w-full">
      <div id="main_header" className=" w-full flex">
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
            style={stepGuideLineInlineStyle}
            className="h-0.5 bg-[#010B37] bg-opacity-10 absolute top-10 left-4"></div>
          <div
            style={{
              width:
                (stepGuideLineInlineStyle.width / steps.length) * userStepId +
                1,
              zIndex: -1,
            }}
            className="h-0.5 bg-[#4AA6C8] absolute top-10 left-4"></div>
        </div>
        <div
          style={{top: 72}}
          className="h-8 w-full bg-gradient-to-b from-white to-transparent absolute z-20"></div>
      </div>
      <div className="w-full px-6 h-full overflow-y-scroll snap-y pt-10 pb-36">
        {steps.map((step, index) => (
          <div
            style={{height: cardHeight}}
            key={index}
            className="w-full bg-black mb-8  snap-center relative rounded-md">
            <img
              src={step.imageUrl}
              className="object-cover w-full h-full rounded-md"
            />
            <div className="w-full h-full absolute top-0 rounded-md bg-[#0A0A0A] opacity-30"></div>
            <div className="w-full h-full absolute top-0 flex flex-col px-4 pb-4">
              <div className="grow"></div>
              <div className="flex justify-between text-white">
                <div>
                  <div className="font-Roboto font-bold" style={{fontSize: 40}}>
                    {step.id + 1}
                  </div>
                  <div className="font-NotoSansKR font-bold whitespace-pre text-3xl mt-1">
                    {step.name}
                  </div>
                  <div className="font-NotoSansKR font-bold whitespace-pre text-xl mt-1">
                    {step.subTitle}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="grow flex"></div>
                  <div className="text-right text-3xl">🎉</div>
                  <div className="font-NotoSansKR font-regular mt-4 text-xs">{`${
                    step.rep
                  }rep ${step.rest ? `${step.rest}res` : ''}${
                    step.set
                  }set`}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
