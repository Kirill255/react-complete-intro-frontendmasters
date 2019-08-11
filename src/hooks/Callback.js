import React, { useState, useEffect, useCallback, memo } from "react";

// memo это как PureComponent для классов, только для ф-ций, он означает что не нужно перерендеривать компонент если пропсы не изменились, это ещё старый API (не путать с хуком useMemo), а пропсы у нас меняются только при клике на кнопку, т.к. мы используем useCallback и в пропсы приходит одна и та же ф-ция fibonacci
// суть в том что в CallbackComponent у нас есть таймер который заставляет перерендериваться компонент каждую секунду, т.к. в этом компоненте есть ещё один компонент -> ExpensiveComputationComponent то он тоже перерендеривался бы каждый раз
const ExpensiveComputationComponent = memo(({ compute, count }) => {
  return (
    <div>
      <h1>computed: {compute(count)}</h1>
      <h4>last re-render {new Date().toLocaleTimeString()}</h4>
    </div>
  );
});

const CallbackComponent = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });

  const fibonacci = (n) => {
    if (n <= 1) {
      return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  return (
    <div>
      <h1>useCallback Example {time.toLocaleTimeString()}</h1>
      <button onClick={() => setCount(count + 1)}>current count: {count}</button>
      <ExpensiveComputationComponent compute={useCallback(fibonacci, [])} count={count} />
    </div>
  );
};

export default CallbackComponent;
