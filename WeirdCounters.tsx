import React = require('react');
import { DumbCounter } from './DumbCounter';

export function WeirdCounters() {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);

  const handleClickMaker = (btnNum) => {
    switch (btnNum) {
      case 1:
        return () => {
          setCount1(count1 + 1);
          setCount2(count2 + 1);
          setCount3(count3 + 1);
        };
      case 2:
        return () => {
          setCount2(count2 + 1);
          setCount3(count3 + 1);
        };
      case 3:
        return () => {
          setCount3(count3 + 1);
        };
    }
  };

  return (
    <div>
      <DumbCounter count={count1} handleClick={handleClickMaker(1)} />
      <DumbCounter count={count2} handleClick={handleClickMaker(2)} />
      <DumbCounter count={count3} handleClick={handleClickMaker(3)} />
    </div>
  );
}
