import React from 'react';
import { Route } from 'react-router-dom';
import CreatePlant from './components/CreatePlant';

function App() {
  return (
    <>
      <Route to='/create-plant'>
        <CreatePlant />
      </ Route>
    </>
  );
}

export default App;
