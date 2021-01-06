import { useEffect } from 'react';

const useScrollPosition = (callback) => {
  const handleScroll = () => {
    callback(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
};

export default useScrollPosition;
