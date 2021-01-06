import React from 'react';
import PropTypes from 'prop-types';
import SinglePageContainer from './SinglePageContainer/SinglePageContainer';

const AllPagesContainer = (props) => {
  const {
    height,
    width,
    data,
  } = props;

  return (
    <div>

      {data.map((ele, i) => (
        <div key={ele.key}>

          <SinglePageContainer
            data={ele.additional_data}
            page_type={ele.page_type}
            height={height}
            width={width}
            page_num={i}
            background_color={ele.background_color}
            background_image={ele.background_image}
          />

          <div style={{ height, backgroundColor: '#0a73f1', zIndex: 1000 }} />

        </div>
      ))}

    </div>
  );
};

AllPagesContainer.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  data: PropTypes.instanceOf(Array),
};

AllPagesContainer.defaultProps = {
  height: 0,
  width: 0,
  data: [],
};

export default AllPagesContainer;
