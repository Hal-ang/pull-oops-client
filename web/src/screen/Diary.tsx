import React, { useMemo } from 'react';

import BasicHeader from '../components/main/BasicHeader';
import GrowBox from '../components/GrowBox';
import { Link } from 'react-router-dom';
import { STEPS_DATA } from '../demo/main';
import StepHeader from '../components/main/StepHeader';
import { URL } from 'url';
import { getContentHeight } from '../util';
import tempGif from '../assets/inverted-row.gif';
import useDocument from '../hooks/useDocument';
import { useParams } from 'react-router';

const numberClassName = 'font-roboto font-bold text-2xl mr-[2px]';
const koreanClassName = 'font-NotoSansKR font-normal text-base mr-[4px]';

const Diary = () => {
  const { stepId } = useParams();
  const { clientSize } = useDocument();

  const steps = useMemo(() => {
    return STEPS_DATA.data.Step;
  }, []);

  const step = useMemo(() => steps[parseInt(stepId!)], [steps]);

  return (
    <div className='w-full relative bg-white'>
      <BasicHeader />
      <StepHeader steps={steps.map((step) => step.id)} />
      <div className='px-[21px]'>
        <div className=' mt-7 text-white'>
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
            <div className='font-bold text-base'>{`${step.id + 1} 단계 ${
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
        <div className='w-full h-full mt-6'>
          <Link
            to=''
            className='relative'
            style={{
              display: 'block',
              height: getContentHeight(clientSize.width - 25 * 2, {
                width: 310,
                height: 220,
              }),
            }}
          >
            <img
              src={tempGif}
              className='w-full h-full rounded-md '
              style={{
                zIndex: 0,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />

            <div className='h-full w-full z-50 absolute top-0 bg-black bg-opacity-50 text-white rounded-md px-4 pt-4 pb-5 flex flex-col justify-between'>
              <div className='font-NotoSansKR text-base font-bold'>
                최근 기록
              </div>
              <div className='flex flex-row justify-between items-end'>
                <div className='font-normal text-sm'>
                  <div>7회 2세트</div>
                  <div>8회 3세트...</div>
                </div>
                <div className='text-xs font-medium'>2022년 4월 16일</div>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link
            to=''
            className='flex bg-[#4AA6C8] mt-4  justify-center items-center rounded-md font-NotoSansKR text-2xl text-white font-bold'
            style={{
              height: getContentHeight(clientSize.width - 25 * 2, {
                width: 310,
                height: 134,
              }),
            }}
          >
            <div className='mx-[10px]'>💪</div>
            <div>운동하러 가기</div>
            <div className='mx-[10px]'>💪</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Diary;
