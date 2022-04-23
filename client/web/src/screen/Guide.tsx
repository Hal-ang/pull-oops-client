import '../styles/guide.css';

import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { CSSTransition } from 'react-transition-group';
import GrowBox from '../components/GrowBox';
import { STEPS_DATA } from '../demo/main';
import arrow from '../assets/bouncing-scroll-arrows.gif';
import tempGif from '../assets/inverted-row.gif';
import { useParams } from 'react-router';

const Guide = () => {
  const { stepId } = useParams();
  const [isScroll, setIsScroll] = useState(false);

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
    <div className='w-screen h-screen relative bg-black'>
      {/* @ts-ignore */}
      <CSSTransition in={isScroll} timeout={2000} classNames='guide-image'>
        <div id='initial-element' className='w-full h-full'>
          <img
            src={tempGif}
            style={{
              width: '100%',
              backgroundImage: tempGif,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              height: '100%',
            }}
          />
          <div
            className={`w-full h-full absolute top-0  bg-[#030202] bg-opacity-30 ${
              isScroll && 'hidden'
            } `}
          />{' '}
          {/* @ts-ignore */}
          <CSSTransition
            in={isScroll}
            timeout={2000}
            classNames='hidden-absolute'
          >
            <div className='w-full h-full absolute top-0 z-10 flex flex-col  text-white'>
              <GrowBox />
              <div className='flex justify-between'>
                <div className='pl-6 pb-6 '>
                  <div className='flex items-end'>
                    <div
                      className='font-Roboto font-bold'
                      style={{ fontSize: 40 }}
                    >
                      {step.id + 1}
                    </div>
                    <div className='font-NotoSansKR font-regular text-xs pb-3 ml-3'>{`${
                      step.rep
                    }rep ${step.rest ? `${step.rest}res` : ''}${
                      step.set
                    }set`}</div>
                  </div>
                  <div className='font-NotoSansKR font-bold whitespace-pre text-3xl mt-1'>
                    {step.name}
                  </div>
                </div>
                <div className='flex flex-col'>
                  <GrowBox />
                  <img
                    src={arrow}
                    className='w-14 opacity-40 rotate-180 mb-4'
                  />
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>
      <div className='text-white'>hihihihihi</div>
    </div>
  );
};

export default Guide;
