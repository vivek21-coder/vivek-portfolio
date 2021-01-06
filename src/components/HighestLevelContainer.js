import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import get_data from '../utility/get_data';
import Loading from './Loading/Loading';
import TopContainer from './TopContainer/TopContainer';

const HighestLevelContainer = (props) => {
  const { height, width } = props;

  const [loading, set_loading] = useState(true);
  const [data, set_data] = useState(null);

  useEffect(() => {
    get_data().then((r) => {
      set_data(r);
      set_loading(false);
    });
  }, []);

  if (loading) {
    return (
      <Loading height={height} width={width} />
    );
  }

  return (
    <TopContainer height={height} width={width} data={data} />
  );
};

HighestLevelContainer.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

HighestLevelContainer.defaultProps = {
  height: 0,
  width: 0,
};

export default HighestLevelContainer;
