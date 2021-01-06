import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useScrollPosition from '../../../hooks/scroll_hooks';
import get_page from '../../../utility/pages/get_page';

const SinglePageContainer = (props) => {
  const {
    height, width,
    page_num,
    background_color, background_image,
    page_type, data,
  } = props;

  const [background_position, set_background_position] = useState(2 * page_num * height);

  useScrollPosition((position) => {
    const start = (2 * page_num - 1) * height;
    const mid = 2 * page_num * height;
    const end = (2 * page_num + 1) * height;

    if (position >= start && position <= end) {
      set_background_position((position - mid) * 0.9);
    }
  });

  return (
    <div
      className="page_container"
      style={{
        height,
        width,
        backgroundColor: background_color,
        backgroundImage: `url("${background_image}")`,
        backgroundPositionY: background_position,
      }}
    >
      {get_page(height, width, page_type, data)}
    </div>
  );
};

SinglePageContainer.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  page_num: PropTypes.number,
  background_color: PropTypes.string,
  background_image: PropTypes.string,
  page_type: PropTypes.string,
  data: PropTypes.instanceOf(Object),
};

SinglePageContainer.defaultProps = {
  height: 60,
  width: 60,
  page_num: 0,
  background_color: '#000000',
  background_image: 'https://drive.google.com/uc?export=view&id=1eTuBmJc0ojwFIqIESVaVCrZ0ZR9i-ouJ',
  page_type: 'empty',
  data: {},
};

export default SinglePageContainer;
