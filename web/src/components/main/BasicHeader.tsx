import '../../styles/guide.css';

import React, { useMemo } from 'react';

import Arrow from '../../assets/left-arrow.png';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

const BasicHeader = React.memo(
  ({
    inProps,
    timeout,
    text,
  }: {
    inProps?: boolean;
    timeout?: number;
    text?: string;
  }) => {
    const isAnimation = useMemo(
      () => inProps !== undefined && timeout,
      [inProps, timeout]
    );

    const InnerButton = useMemo(
      () => (
        <Link
          to='/'
          className={`w-full px-[21px] py-5 ${
            isAnimation ? 'hidden' : 'flex'
          } flex-row justify-start items-center`}
        >
          <img src={Arrow} className='w-4 h-4 rotate-180' />
          {text && <div className='font-bold text-base ml-3 pb-1'>{text}</div>}
        </Link>
      ),
      [isAnimation]
    );

    if (inProps !== undefined && timeout) {
      return (
        // @ts-ignore
        <CSSTransition in={inProps} timeout={timeout} classNames='guide-header'>
          {InnerButton}
        </CSSTransition>
      );
    }

    return InnerButton;
  }
);

export default BasicHeader;
