import React, { useState, useLayoutEffect, useRef } from "react";

const LayoutEffectComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const el = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    setWidth(el.current.clientWidth);
    setHeight(el.current.clientHeight);
  });

  return (
    <div>
      <h1>useLayoutEffect Example</h1>
      <h2>textarea width: {width}px</h2>
      <h2>textarea height: {height}px</h2>
      <textarea
        onClick={() => {
          setWidth(0);
        }}
        ref={el}
      />
    </div>
  );
};

export default LayoutEffectComponent;

/*
при клике на textarea, мы обновляем state, на самом деле не важно какое- значение м будем устанавливать, это делается только для того что бы запустить перерендер компонента, то есть если обновляется state, то запускается перерендер

мы обновляем state -> запускается перерендер, если запускается перерендер -> запускается useLayoutEffect, в котором мы снова пересчитываем значения элемента, несмотря на то что у нас запускается два перерендера, react оптимизирован так, что компонент всё равно отрисовывается только один раз

useLayoutEffect почти то же самое что и useEffect, но useEffect он технически асинхронный, а useLayoutEffect синхронный, то есть запускается сразу после перерендера и сразу выполняется, а useEffect то же запускается сразу после перерендера, но выполниться может через время, он асинхронный, и он как бы планирует своё выполнение на потом
*/
