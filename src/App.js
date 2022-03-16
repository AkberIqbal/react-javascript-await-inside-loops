import React, { useEffect } from 'react';
import './style.css';
import { runOnce, runOnceTwo } from './loops';

export default function App() {
  const someObj = {
    one: 1,
    two: 2,
  };

  useEffect(() => {
    console.log('test');
    runOnce(someObj);
    runOnceTwo(someObj);
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
