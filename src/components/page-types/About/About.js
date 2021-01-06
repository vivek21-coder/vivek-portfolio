import React from 'react';
import './About.css';

import PropTypes from 'prop-types';
import Name from './components/Name';
import Profile from './components/Profile';

const About = (props) => {
  const { data } = props;

  const { display_name, profile_data } = data;

  return (
    <div className="about-page-container">
      <Name display_name={display_name} />
      <Profile profile_data={profile_data} />
    </div>
  );
};

About.propTypes = {
  data: PropTypes.instanceOf(Object),
};

About.defaultProps = {
  data: {},
};

export default About;
