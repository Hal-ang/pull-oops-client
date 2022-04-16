import React from 'react';
import {useParams} from 'react-router';

const Diary = () => {
  const {date} = useParams();
  return <div>{date}</div>;
};

export default Diary;
