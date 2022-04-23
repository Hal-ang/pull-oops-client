import React, { useMemo } from 'react';

import BasicHeader from '../components/main/BasicHeader';
import { Link } from 'react-router-dom';
import { STEPS_DATA } from '../demo/main';
import StepHeader from '../components/main/StepHeader';
import { getContentHeight } from '../util';
import useDocument from '../hooks/useDocument';
import { useParams } from 'react-router';

const numberClassName = 'font-roboto font-bold text-2xl mr-[2px]';
const koreanClassName = 'font-normal text-base mr-[4px]';

const Diary = () => {
  const { stepId } = useParams();
  const { clientSize } = useDocument();

  const steps = useMemo(() => {
    return STEPS_DATA.data.Step;
  }, []);

  const step = useMemo(() => steps[parseInt(stepId!)], [steps]);

  return (
    <div className='w-full relative bg-white'>
      <BasicHeader onClickBack={() => {}} />
      <StepHeader steps={steps.map((step) => step.id)} />
      <div className='px-[21px] mt-7 text-white'>
        <Link
          to={`/step/${stepId}/guide`}
          style={{
            height: getContentHeight(clientSize.width, {
              width: 310,
              height: 114,
            }),
          }}
          className='w-full bg-[#010B37] rounded-md px-4 pt-4 pb-8 flex flex-col justify-between'
        >
          <div className='font-bold text-base'>{`${step.id + 1}단계 ${
            step.name
          }`}</div>
          <div className='flex flex-row items-end justify-center'>
            <div className={numberClassName}>{step.rep}</div>
            <div className={koreanClassName}>회</div>
            {step.rest && (
              <div className='flex flex-row items-end'>
                <div className={numberClassName}>{step.rest}</div>
                <div className={koreanClassName}>분 휴식</div>
              </div>
            )}
            <div className='font-bold text-xl mx-2'>X</div>
            <div className={numberClassName}>{step.set}</div>
            <div className={koreanClassName}>세트</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Diary;
