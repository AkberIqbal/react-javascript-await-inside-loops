import React, { useEffect } from 'react';
import './style.css';
import { runOnceUsingForEach, runOnceUsingFor, runOnceTwo } from './loops';

export default function App() {
  const someObj = {
    one: 1,
    two: 2,
  };

  useEffect(() => {
    // console.log('test');
    runOnceUsingForEach(someObj);
    setTimeout(() => {
      runOnceUsingFor(someObj);
    }, 2000);
    setTimeout(() => {
      runOnceTwo(someObj);
    }, 6000);
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
