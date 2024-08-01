import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { useLocation } from 'react-router-dom';

const RouteLoader = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setProgress(30);

    // Simulate some loading time
    const timer = setTimeout(() => setProgress(100), 500); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);

  return (
    <LoadingBar
      color='#f11946'
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
  );
};

export default RouteLoader;
