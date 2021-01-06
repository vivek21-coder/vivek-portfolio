import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typewriter from './Typewriter/Typewriter';

const Profile = (props) => {
  const { profile_data } = props;

  const [a_an, set_a_an] = useState('a');

  return (
    <div className="about-page-profile">

      <div>
        I&apos;m
        {' '}
        {a_an}
      </div>

      <div className="about-page-profile-inner">
        <Typewriter set_a_an={set_a_an} data={profile_data} />
      </div>

    </div>
  );
};

Profile.propTypes = {
  profile_data: PropTypes.instanceOf(Array),
};

Profile.defaultProps = {
  profile_data: [],
};

export default Profile;
