import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { useLocation } from 'react-router-dom';

const RouteLoader = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setProgress(30);
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer); // Clear timeout if the component unmounts
  }, [location.pathname]);

  return (
    <LoadingBar
      color='#f11946'
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
  );
};

export default RouteLoader;
