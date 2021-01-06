/**
 * Function to fetch all the data needed by site from Backend
 * */

import log from './log';

const get_data = async () => {
  // const data = {
  //   navigation_data: {
  //     total_length: 34,
  //     tab_names: [
  //       {
  //         key: 'tab_name_0',
  //         name: 'About',
  //         minWidth: 7 * 8.4,
  //         width: `${700 / 34}%`,
  //         maxWidth: 11 * 8.4,
  //       },
  //       {
  //         key: 'tab_name_1',
  //         name: 'Skills',
  //         minWidth: 8 * 8.4,
  //         width: `${800 / 34}%`,
  //         maxWidth: 12 * 8.4,
  //       },
  //       {
  //         key: 'tab_name_2',
  //         name: 'Projects',
  //         minWidth: 10 * 8.4,
  //         width: `${1000 / 34}%`,
  //         maxWidth: 14 * 8.4,
  //       },
  //       {
  //         key: 'tab_name_3',
  //         name: 'Contact',
  //         minWidth: 9 * 8.4,
  //         width: `${900 / 34}%`,
  //         maxWidth: 13 * 8.4,
  //       },
  //     ],
  //     tab_colors: [
  //       [0, 0, 0],
  //       [68, 51, 60],
  //       [108, 71, 48],
  //       [33, 44, 53],
  //       [0, 0, 0],
  //     ],
  //   },
  //   pages_data: [
  //     {
  //       key: 'page_0',
  //       page_type: 'About',
  //       background_image: 'https://drive.google.com/uc?export=view&id=1wiql_sEbFdYI-yuuk-hajRdS3tx3vXPg',
  //       background_color: '#000000',
  //       additional_data: {},
  //     },
  //     {
  //       key: 'page_1',
  //       page_type: 'Skills',
  //       background_image: 'https://drive.google.com/uc?export=view&id=1aH0My1dGvQZ9XhXNqua-oyBSGK6jeefj',
  //       background_color: '#000000',
  //       additional_data: {},
  //     },
  //     {
  //       key: 'page_2',
  //       page_type: 'Projects',
  //       background_image: 'https://drive.google.com/uc?export=view&id=1aV-MLau_xbKadfMBoIJaVwdV-XNNwijY',
  //       background_color: '#FFFFFF',
  //       additional_data: {},
  //     },
  //     {
  //       key: 'page_3',
  //       page_type: 'Contact',
  //       background_image: 'https://drive.google.com/uc?export=view&id=1ZKD18ATMzrcrBdsSOkmOirbZQYLZh_PT',
  //       background_color: '#ff0000',
  //       additional_data: {},
  //     },
  //   ],
  // };
  // console.log(JSON.stringify(data));

  const r = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/fetch-data`,
    {
      method: 'GET',
    },
  );

  log(r);

  const data = await r.json();

  log(data);

  return data;
};

export default get_data;
