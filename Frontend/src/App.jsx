import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import RouteLoader from './Components/RouteLoader';
import Home from './Components/Home/Home';
import NcrRoutes from './Routes/NcrRoutes';

function App() {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div style={{ font: "Nunito" }}>
      <RouteLoader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ncr/*' element={<NcrRoutes setActiveTab={setActiveTab} activeTab={activeTab} />} />
      </Routes>
    </div>
  );
}

export default App;
