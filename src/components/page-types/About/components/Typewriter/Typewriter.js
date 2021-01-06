import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import get_display_names from './get_display_names';
import get_a_or_an from '../../../../../utility/get_a_or_an';

const Typewriter = (props) => {
  const { data, set_a_an } = props;

  const [display_names, set_display_names] = useState(['']);
  const [current_display_index, set_current_display_index] = useState(0);

  let interval = null;

  useEffect(() => {
    set_display_names(get_display_names(data));
  }, []);

  useEffect(() => {
    if (display_names.length > 1) {
      clearInterval(interval);
      interval = setInterval(() => {
        set_current_display_index((val) => (val + 1) % display_names.length);
      }, 35);
    }
  }, [display_names]);

  useEffect(() => {
    set_a_an(get_a_or_an(display_names[current_display_index]));
  }, [current_display_index]);

  return (
    <div>
      {display_names[current_display_index]}
      <span className="about-page-profile-caret">_</span>
    </div>
  );
};

Typewriter.propTypes = {
  data: PropTypes.instanceOf(Array),
  set_a_an: PropTypes.func,
};

Typewriter.defaultProps = {
  data: [],
  set_a_an: () => {},
};

export default Typewriter;
