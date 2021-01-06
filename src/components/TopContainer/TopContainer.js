import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from '../NavigationBar/NavigationBar';
import AllPagesContainer from '../PageContainers/AllPagesContainer';

const TopContainer = (props) => {
  const {
    height,
    width,
    data,
  } = props;

  const {
    navigation_data,
    pages_data,
  } = data;

  return (
    <div className="App">

      <NavigationBar
        height={height}
        data={navigation_data}
      />

      <AllPagesContainer
        height={height}
        width={width}
        data={pages_data}
      />

    </div>
  );
};

TopContainer.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  data: PropTypes.instanceOf(Object),
};

TopContainer.defaultProps = {
  height: 0,
  width: 0,
  data: {},
};

export default TopContainer;
