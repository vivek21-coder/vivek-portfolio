import React from 'react';
import PropTypes from 'prop-types';

const Name = (props) => {
  const { display_name } = props;

  return (
    <div className="about-page-name">
      {display_name}
    </div>
  );
};

Name.propTypes = {
  display_name: PropTypes.string,
};

Name.defaultProps = {
  display_name: '',
};

export default Name;
