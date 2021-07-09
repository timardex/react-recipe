import React from 'react';
import './styles.scss';

const Confirmation = (props) => {
  const { apiResponse } = props;
  return (
    <div id="confirmation">
      {apiResponse}
    </div>
  );
}

export default Confirmation;