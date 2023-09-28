import React from 'react';
import './App.css';
import { Search } from './Search/Search';
import { EventInfo } from './EventInfo/EventInfo';

const App = () => {
  return (
    <div className="App">
      <EventInfo/>
      <Search />
    </div>
  );
}

export default App;
