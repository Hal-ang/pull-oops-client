import React from 'react';
import {useParams} from 'react-router';

const Daily = () => {
  const {date} = useParams();
  return <div>{date}</div>;
};

export default Daily;
