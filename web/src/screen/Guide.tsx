import '../styles/guide.css';

import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { CSSTransition } from 'react-transition-group';
import GrowBox from '../components/GrowBox';
import { Link } from 'react-router-dom';
import { STEPS_DATA } from '../demo/main';
import { animationTimeout } from '../util';
import arrow from '../assets/bouncing-scroll-arrows.gif';
import tempGif from '../assets/inverted-row.gif';
import { useParams } from 'react-router';

const Guide = () => {
  const { stepId } = useParams();
  const [isScroll, setIsScroll] = useState(false);

  const descriptions = useMemo(() => {
    if (stepId) {
      return STEPS_DATA.data.Step[parseInt(stepId)].detail.split('\n');
    }
    return [];
  }, [stepId]);

  const step = useMemo(() => {
    const index = STEPS_DATA.data.Step.findIndex((sp) => sp.id);
    return STEPS_DATA.data.Step[index];
  }, [stepId]);

  const handleScrolling = useCallback((startY: number, endY: number) => {
    if (startY > endY) {
      setIsScroll(true);
    } else if (startY < endY) {
      setIsScroll(false);
    }
  }, []);

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    window.addEventListener(
      'touchstart',
      (e) => (touchStartY = e.changedTouches[0].screenY)
    );

    window.addEventListener('touchend', (e) => {
      touchEndY = e.changedTouches[0].screenY;

      handleScrolling(touchStartY, touchEndY);
    });

    return () => {
      window.removeEventListener('touchstart', (e) => {});
      window.removeEventListener('touchend', (e) => {});
    };
  }, [window]);

  return (
    <div className='w-screen h-screen relative'>
      {/* @ts-ignore */}
      <CSSTransition
        in={isScroll}
        timeout={animationTimeout}
        classNames='guide-image'
      >
        <div className='w-full h-full'>
          <img
            src={tempGif}
            style={{
              width: '100%',
              backgroundImage: tempGif,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '100%',
            }}
          />
        </div>
      </CSSTransition>
      {/* @ts-ignore */}
      <CSSTransition
        in={isScroll}
        timeout={animationTimeout}
        classNames='guide-image'
      >
        <div className='w-full h-full bg-[#030202] bg-opacity-30 absolute top-0 z-10 flex flex-col  text-white'>
          {/* <BasicHeader /> */}
          <GrowBox />
          <div className='flex justify-between'>
            <div className='pl-6 pb-6 '>
              <div className='flex items-end'>
                <div className='font-Roboto font-bold' style={{ fontSize: 40 }}>
                  {step.id + 1}
                </div>
                <div className='font-regular text-xs pb-3 ml-3'>{`${
                  step.rep
                }rep ${step.rest ? `${step.rest}res ` : ''}${
                  step.set
                }set`}</div>
              </div>
              <div className='font-bold whitespace-pre text-3xl mt-1'>
                {step.name}
              </div>
            </div>
            <div className='flex flex-col'>
              <GrowBox />
              <img src={arrow} className='w-14 opacity-40 rotate-180 mb-4' />
            </div>
          </div>
        </div>
      </CSSTransition>
      {/* @ts-ignore */}
      <CSSTransition
        in={isScroll}
        timeout={animationTimeout}
        classNames='hidden-opacity'
      >
        <div className='px-[21px] py-[31px] relative'>
          <div className='font-bold text-lg'>운동 방법</div>
          <div className='mt-[21px] font-regular text-sm'>
            {descriptions.map((desc, index) => (
              <div key={index} className='mt-[15px] whitespace-pre-line'>
                {desc}
              </div>
            ))}
          </div>
        </div>
      </CSSTransition>
      {isScroll && (
        // @ts-ignore
        <CSSTransition
          in={isScroll}
          timeout={animationTimeout}
          classNames='hidden-opacity'
        >
          <div className='w-screen absolute bottom-0  px-[21px] pb-[31px] '>
            <Link
              to={`/step/${stepId}/diary`}
              className='block bg-[#010B37] text-white text-xl text-center rounded-md py-[10px]'
            >
              기록하러 가기
            </Link>
          </div>
        </CSSTransition>
      )}
    </div>
  );
};

export default Guide;
