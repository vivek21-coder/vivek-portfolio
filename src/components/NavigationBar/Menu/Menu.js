import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import scroll_to_page from '../../../utility/scroll_to_page';

const Menu = (props) => {
  const { current_page, height, tab_names } = props;

  const scrollTo = (i) => {
    scroll_to_page(i, height);
  };

  useEffect(() => {
    scrollTo(current_page);
  }, [height]);

  return (
    <div className="navigation_items_container">
      {tab_names.map((ele, i) => (
        <button
          key={ele.key}
          type="button"
          onClick={() => scrollTo(i)}
          className={`navigation_item ${
            current_page === i
              ? 'navigation_item_selected'
              : ''
          }`}
          style={{
            width: ele.width,
            minWidth: ele.minWidth,
            maxWidth: ele.maxWidth,
          }}
        >
          {ele.name}
        </button>
      ))}
    </div>
  );
};

Menu.propTypes = {
  height: PropTypes.number,
  current_page: PropTypes.number,
  tab_names: PropTypes.instanceOf(Array),
};

Menu.defaultProps = {
  height: 0,
  current_page: 0,
  tab_names: [],
};

export default Menu;
