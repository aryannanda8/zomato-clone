import React, { useState, useEffect } from 'react';

const LoadingBar = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const handleProgress = () => {
      if (document.readyState === 'complete') {
        setLoadingProgress(100);
      } else {
        setLoadingProgress(prevProgress => Math.min(prevProgress + 10, 90));
      }
    };

    document.addEventListener('DOMContentLoaded', handleProgress);
    window.addEventListener('load', handleProgress);

    return () => {
      document.removeEventListener('DOMContentLoaded', handleProgress);
      window.removeEventListener('load', handleProgress);
    };
  }, []);

  useEffect(() => {
    // Hide the loading bar when progress reaches 100%
    if (loadingProgress >= 100) {
      setTimeout(() => {
        setLoadingProgress(0);
      }, 1000); // Add a delay before resetting the progress
    }
  }, [loadingProgress]);

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-transparent z-50">
      <div className="h-full bg-red-500 transition-width" style={{ width: `${loadingProgress}%` }}></div>
    </div>
  );
};

export default LoadingBar;
