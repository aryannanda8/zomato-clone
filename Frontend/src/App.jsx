import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import RouteLoader from './Components/RouteLoader';
import Home from './Components/Home/Home';
import NcrRoutes from './Routes/NcrRoutes';
import { Provider } from 'react-redux';
import appStore from './Utils/appStore';

function App() {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <Provider store={appStore}>
      <div style={{ font: "Nunito" }}>
        <RouteLoader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ncr/*' element={<NcrRoutes setActiveTab={setActiveTab} activeTab={activeTab} />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
