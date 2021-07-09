import React from 'react';
import './styles.scss';

const Confirmation = (props) => {
  const { apiResponse } = props;
  return (
    <div id="confirmation">
      {typeof apiResponse === 'string' ? apiResponse : `Recipe with id ${apiResponse} has been created`}
    </div>
  );
}

export default Confirmation;