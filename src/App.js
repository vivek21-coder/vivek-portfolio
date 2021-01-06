/**
 * @author vivek21-coder
 *
 * */

import React, { useEffect, useState } from 'react';
import './App.css';
import HighestLevelContainer from './components/HighestLevelContainer';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <HighestLevelContainer height={height} width={width} />
  );
}

export default App;
