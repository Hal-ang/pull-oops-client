import React from 'react';

const GrowBox = React.memo(
  () => <div className="grow flex" />,
  () => true,
);

export default GrowBox;
