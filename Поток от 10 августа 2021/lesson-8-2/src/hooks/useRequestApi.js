import {useEffect, useState} from "react";


/**
 * @param {Object} props
 * @param {string} props.url - адрес который будет вызывать fetch
 * @param {Object} props.options - параметры для функции fetch
 * @param {Boolean} props.isAutoLoad - стоит ли вызвать запрос автоматически при первой инициализации
 *
 * @return {Array} state - возвращаемый из хука массив, по структуре схож с тем что вернет useState,
 * вернет состояние и метод для его изменения
 * @return {Object} state[0]
 * @return {Boolean} state[0].isLoading - состояние загрузки
 * @return {Object} state[0].error - ошибка которая возникла при вызове API
 * @return {Object} state[0].data - данные полученные из API
 * @return {function} state[1] - функция для вызова запроса
 *
 * @desc хук не подходит для использования в проектах,
 * он лишь демонстрирует принцип того как можно абстрагировать
 * выполнение запроса и хранение данных о состоянии запроса
 * */
export const useRequestApi = ({url, options, isAutoLoad}) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const makeRequest = async () => {
    try {
      setError(undefined);
      setData(undefined);
      setLoading(true)
      const response = await fetch(url, options);

      const result = await response.json();

      setData(result);

    } catch (e) {
      setError(e);
      console.dir(e);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (isAutoLoad) {
      makeRequest();
    }
  }, [])


  return [
    {
      isLoading,
      error,
      data,
    },
    makeRequest
  ]
}