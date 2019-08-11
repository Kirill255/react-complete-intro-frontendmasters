import React, { useState, useRef } from "react";

const RefComponent = () => {
  const [stateNumber, setStateNumber] = useState(0);
  const numRef = useRef(0);

  function incrementAndDelayLogging() {
    setStateNumber(stateNumber + 1);
    numRef.current++;
    setTimeout(() => alert(`state: ${stateNumber} | ref: ${numRef.current}`), 1000);
  }

  return (
    <div>
      <h1>useRef Example</h1>
      <button onClick={incrementAndDelayLogging}>delay logging</button>
      <h4>state: {stateNumber}</h4>
      <h4>ref: {numRef.current}</h4>
    </div>
  );
};

export default RefComponent;

/*
в компонент у нас выводится state: 1, ref: 1
а в алерт state: 0, ref: 1
но почему? они же вместе обновляются в одной ф-ции incrementAndDelayLogging
setStateNumber(stateNumber + 1);
numRef.current++;
всё дело в замыкании
numRef.current++ обновляется напрямую, а setStateNumber(stateNumber + 1) использует переменную stateNumber, которая в момент клика равна 0, и она обновится только после перерендера компонента, эта переменная как бы ссылается на своё предыдущее состояние, которое в данный момент ещё не обновилось

если мы быстро кликнем на кнопку например 2 раза, то увидим что в компонент у нас выводится state: 2, ref: 2
а в первом алерте увидим state: 0, ref: 2, затем во втором алерте state: 1, ref: 2
*/
