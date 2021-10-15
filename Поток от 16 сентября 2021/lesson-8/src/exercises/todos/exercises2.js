import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Accordion, Alert, Stack } from "react-bootstrap";
import { useForceUpdate } from "../../hooks/useForceUpdate";
import { getDataAsync } from "../../store/todos/action";

export const StudentExercises2 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAsync);
  }, []);

  return (
    <Stack gap={3}>
      <h1>Middleware</h1>
      <Alert variant="primary">
        Упражнения для реализации асинхронных экшенов
      </Alert>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>1 задание. reducer</Accordion.Header>
          <Accordion.Body>
            Мы реализуем тот же функционал что и в первой части, но с
            использованием redux. Для начала нужно доделать{" "}
            <b>store/todos/reducer</b>, добавьте не достающие поля и экшены для
            изменения статусов и добавления данных.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>2 задание. асинхроннй экшен</Accordion.Header>
          <Accordion.Body>
            <p>
              В <b>store/todos/action</b> создайте метод для получения данных из
              API, Метод должен соответствевать сигнатуре функции
            </p>
            <code>(dispatch, getState) => {}</code>
            <p>
              внутри метода необходимо устонавливать статус загрузки перед
              вызовом запроса и после.
            </p>
            <p>
              после успешного выполнения запроса нужно сохранить полученные
              данные в redux.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>3 задание. вывод данных</Accordion.Header>
          <Accordion.Body>
            <p>
              Теперь в компоненте <b>Exercises2</b> получить из redux статус
              загрузки ошибки и данные и отобразите соответствующие им
              компоненты
            </p>
            <h2>Статусы и данные отобразить здесь ☟</h2>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
};
