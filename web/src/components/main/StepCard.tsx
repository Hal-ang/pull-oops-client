import GrowBox from '../GrowBox';
import { Link } from 'react-router-dom';
import { StepCardType } from '../../types/main';
import { getContentHeight } from '../../util';
import useDocument from '../../hooks/useDocument';
import { useMemo } from 'react';

const StepCard = ({ step }: { step: StepCardType }) => {
  const { clientSize } = useDocument();

  const cardHeight = useMemo(
    () =>
      getContentHeight(clientSize.width - 25 * 2, { width: 310, height: 419 }),
    [clientSize]
  );

  return (
    <Link to={`step/${step.id}/guide`}>
      <div
        style={{ height: cardHeight }}
        className='w-full bg-black mb-8  snap-center relative rounded-md'
      >
        <img
          src={step.imageUrl}
          className='object-cover w-full h-full rounded-md'
        />
        <div className='w-full h-full absolute top-0 rounded-md bg-[#0A0A0A] opacity-30'></div>
        <div className='w-full h-full absolute top-0 flex flex-col px-4 pb-4'>
          <GrowBox />
          <div className='flex justify-between text-white'>
            <div>
              <div className='font-Roboto font-bold' style={{ fontSize: 40 }}>
                {step.id + 1}
              </div>
              <div className='font-bold whitespace-pre text-3xl mt-1'>
                {step.name}
              </div>
              <div className='font-bold whitespace-pre text-xl mt-1'>
                {step.subTitle}
              </div>
            </div>
            <div className='flex flex-col'>
              <GrowBox />
              <div className='text-right text-3xl'>🎉</div>
              <div className='font-regular mt-4 text-xs'>{`${step.rep}rep ${
                step.rest ? `${step.rest}res ` : ''
              }${step.set}set`}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StepCard;
