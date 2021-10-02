import React, {useCallback, useState} from 'react';

/**
 * @example
 * hasLogger(Component)
 *
 * @desc hoc Для логирования свойств компонента
 * */
export const hasLogger  = function (Component) {
  console.log('[LOGGER Props]:[0] ', Component);

  const WrapperComponent = function (props) {
    console.log('[LOGGER Props]:[2] ',props);
    return <Component {...props}/>
  }
  console.log('[LOGGER Props]:[1] ', WrapperComponent);

  return WrapperComponent;
};


/**
 * @example
 * hasCounter(Component)
 *
 * @desc компонент инкапсулирует логику работы счетчика
 * */
export const hasCounter = function (Component) {
  console.log('[hasCounter]:[0] ', Component);

  const WrapperComponent = function (props) {
    const [counterState, setCounter] = useState(0);

    const increment = useCallback(() => {
      setCounter((counter) => counter + 1)
    }, [])

    const decrement = useCallback(() => {
      setCounter((counter) => counter - 1)
    }, [])

    console.log('[hasCounter]:[2] ',props);
    return <Component
      counterState={counterState}
      increment={increment}
      decrement={decrement}
      {...props}
    />
  }
  console.log('[hasCounter]:[1] ', WrapperComponent);

  return WrapperComponent;
};

/**
 * @example
 * hasProps({sample: 'Sample Prop'})(Component)
 *
 * @desc hoc Для внедрения какого либо свойства в props оборачиваемого компонента
 * */
export const hasProps  = null;

/**
 * @example
 * branch(testFunction, Component1, Component2)
 *
 * @desc hoc принимает 3 параметра: тестовая функция, ComponentOnPass, ComponentOnFail и в зависимости от
 * результата работы тестовой функции будет возвращен один из компонентов
 * */
export const branch = null;


export const hasLoader = null

/**
 * @link https://github.com/reduxjs/redux/blob/master/src/compose.ts#L46
 * */
export const compose = (...fns) => {

  if (fns.length === 0) {
    return (arg) => arg;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return fns.reduce((accumulator, itemFN) => {
    return (...args) => accumulator(itemFN(...args))
  })
};
