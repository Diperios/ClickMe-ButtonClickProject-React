import * as React from 'react';
import { Counter } from './Counter';
import './style.css';
import { WeirdCounters } from './WeirdCounters';

export default function App() {
  return (
    <div>
      <h1>Button Click App!</h1>
      <p>click buttons to see some magic happen :)</p>
      <Counter/>
      <WeirdCounters/>
    </div>
  );
}
