import React, { useEffect, useState } from "react";
import { Accordion, Button, Stack } from "react-bootstrap";
import { useForceUpdate } from "../../hooks/useForceUpdate";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import { List } from "../../components/List";

export const StudentExercises1 = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState([]);

  // @TODO:START: код функиции писать тут
  const getData = async () => {
    setLoading(true);
    setData([]);
    setError(false);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      const data = await response.json();
      setData(data);
    } catch (e) {
      console.log(e);
      setError(true);
    }
    setLoading(false);
  };
  // @TODO:END:

  useEffect(() => {
    // @TODO:START: вызов функции тут
    void getData();
    // @TODO:END:
  }, []);

  return (
    <Stack gap={3}>
      <h1>Fetch</h1>

      <Button onClick={getData}>Recall effect</Button>

      {}

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            1 задание. Простой запрос и вывод в консоль
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Создайте функцию которая будет обращаться к API{" "}
              <strong>https://jsonplaceholder.typicode.com/todos/1</strong> и
              выводить в консоль из объекта{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/Response"
                target="_blank"
              >
                Response
              </a>{" "}
              поля:
              <ul>
                <li>status</li>
                <li>statusText</li>
                <li>ok</li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Response/json"
                    target="_blank"
                  >
                    json()
                  </a>
                </li>
              </ul>
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>2 задание. Async/Await</Accordion.Header>
          <Accordion.Body>
            Переделать запрос на Async/Await вместо then
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            3 задание. Вывод данных в компонент
          </Accordion.Header>
          <Accordion.Body>
            <p>Создайте 3 стейта:</p>

            <ul>
              <li>
                <b>isLoading</b> - статус выполнения запроса, если true то
                отобразить компонент <b>Loader</b> -
              </li>
              <li>
                <b>isError</b> - статус если запрос завершен с ошибкой, если
                true то отобразить компонент <b>Error</b> -
              </li>
              <li>
                <b>data</b> - данные полученные от API, эти данные необходимо
                передать в компонент <b>List</b> - но, только если{" "}
                <b>isLoading</b> == false и <b>isError</b> == false
              </li>
            </ul>

            <h2>код писать сюда ☟</h2>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {isLoading && <Loader />}

      {isError && <Error reload={getData} />}
      <List list={data} />
    </Stack>
  );
};
