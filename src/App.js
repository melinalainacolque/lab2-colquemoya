import React, { useEffect, useState  } from 'react';

import Counter from './ui/components/Counter';


function App() {
  
  useEffect (() =>{
  document.title = `HAS CLICK ${Counter} veces`;
    console.log (Counter)
  }
 )
  return (
    <div className="container">
      <Counter/>
     
    </div>
  );
}

export default App;
