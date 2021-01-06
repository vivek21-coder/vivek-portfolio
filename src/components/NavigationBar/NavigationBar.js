import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NavigationBar.css';
import useScrollPosition from '../../hooks/scroll_hooks';
import mix_two_colors from '../../utility/colors/mix_two_colors';
import Menu from './Menu/Menu';
import arr_to_rgb from '../../utility/colors/arr_to_rgb';

const NavigationBar = (props) => {
  const { height, data } = props;

  const { tab_names, tab_colors } = data;

  const [color, set_color] = useState([0, 0, 0]);
  const [current_page, set_current_page] = useState(0);

  useScrollPosition((position) => {
    const page = Math.min(3, Math.floor(position / (2 * height)));

    set_color(
      mix_two_colors(
        tab_colors[page],
        tab_colors[page + 1],
        (position - page * (2 * height)) / (2 * height),
      ),
    );

    set_current_page(Math.min(3, Math.floor((position + height) / (2 * height))));
  });

  return (
    <div>
      <div
        className="navigation_bar"
        style={{
          backgroundColor: arr_to_rgb(color),
        }}
      >
        <Menu
          current_page={current_page}
          height={height}
          tab_names={tab_names}
        />
      </div>
    </div>
  );
};

NavigationBar.propTypes = {
  height: PropTypes.number,
  data: PropTypes.instanceOf(Object),
};

NavigationBar.defaultProps = {
  height: 60,
  data: {
    tab_names: [],
    tab_colors: [],
  },
};

export default NavigationBar;
