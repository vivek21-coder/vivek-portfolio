import React from 'react';

/**
 * Returns a Page component in return of arguments
 * */
import About from '../../components/page-types/About/About';
import Skills from '../../components/page-types/Skills/Skills';
import Contact from '../../components/page-types/Contact/Contact';
import Profiles from '../../components/page-types/Profiles/Profiles';

const get_page = (height, width, page_type, data) => {
  switch (page_type) {
    case 'About':
      return <About height={height} width={width} data={data} />;
    case 'Skills':
      return <Skills height={height} width={width} data={data} />;
    case 'Profiles':
      return <Profiles height={height} width={width} data={data} />;
    // case 'Projects':
    //   return <Projects height={height} width={width} data={data} />;
    case 'Contact':
      return <Contact height={height} width={width} data={data} />;
    default:
      return null;
  }
};

export default get_page;
