import React from 'react';
import {useParams} from 'react-router';

const Guide = () => {
  const {stepId} = useParams();

  return <div>{stepId}</div>;
};

export default Guide;
