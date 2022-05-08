import React from 'react';
import { useMemo } from 'react';

const useDocument = () => {
  const clientSize = useMemo(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      console.log(rootElement.clientHeight);
      return {
        width: rootElement.clientWidth,
        height: rootElement.clientHeight,
      };
    }
    return { width: 0, height: 0 };
  }, [document.getElementById('root')]);

  return { clientSize };
};

export default useDocument;
