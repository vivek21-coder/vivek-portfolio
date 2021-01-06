const get_display_names = (data) => {
  const arr = [''];

  data.forEach((val) => {
    for (let i = 1; i < val.length; i += 1) {
      for (let j = 0; j <= Math.floor(Math.random() * 4); j += 1) {
        arr.push(val.substr(0, i));
      }
    }

    for (let i = 0; i < 3 * val.length; i += 1) {
      arr.push(val);
    }

    for (let i = val.length; i > 0; i -= 1) {
      arr.push(val.substr(0, i));
    }

    arr.push('');
  });

  return arr;
};

export default get_display_names;
