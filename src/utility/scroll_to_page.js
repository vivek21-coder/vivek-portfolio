const scroll_to_page = (page_num, page_height) => {
  window.scrollTo(0, 2 * page_num * page_height);
};

export default scroll_to_page;
