import React, { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000);
    return () => clearTimeout(timer);
    // если мы не! передадим, второй параметр, компонент будет перерендериваться бесконечно из-за setState (По умолчанию useEffect выполняется после каждого рендера и обновления), то есть если мы обновили состояние -> значит запустился рендер, если запустился/обновился рендер -> значит снова запустился useEffect, в принципе это тот же самый эффект который нам нужен
  });

  // useEffect(() => {
  //   const timer = setTimeout(setTime(new Date()), 1000);
  //   return () => clearTimeout(timer);
  //   // или так, обновляем когда меняется значение time
  // }, [time]);

  return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
};

export default EffectComponent;
