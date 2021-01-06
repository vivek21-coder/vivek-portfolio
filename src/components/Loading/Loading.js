import React from 'react';
import './Loading.css';
import PropTypes from 'prop-types';

const Loading = (props) => {
  const { height, width } = props;

  return (
    <div
      className="loading-container"
      style={{
        height,
        width,
      }}
    >
      Loading...
    </div>
  );
};

Loading.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

Loading.defaultProps = {
  height: 0,
  width: 0,
};

export default Loading;
