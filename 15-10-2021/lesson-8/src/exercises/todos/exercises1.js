import React, { useEffect, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import { List } from "../../components/List";
import {useFetchListData} from "../../hooks/useFetchListData";

const TODOS_API = "https://jsonplaceholder.typicode.com/todos";

export const StudentExercises1 = () => {

  const {
    loading,
    error,
    data,
    getData,
  } = useFetchListData(TODOS_API);

  useEffect(() => {
    getData();
  }, [])

  return (
    <Stack gap={3}>
      <h1>Fetch</h1>

      <Button onClick={getData} >Recall effect</Button>

      {
        loading &&
        <Loader />
      }

      {
        error && <Error reload={getData} />
      }

      {
        !loading && data.length > 0 &&
        <List list={data} />
      }
    </Stack>
  );
};
