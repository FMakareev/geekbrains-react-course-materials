import React, {useEffect, useMemo, useState} from 'react';
import {FormExample} from "../FormExample";


export const ListData = (props) => {
  const [refresh, setRefresh] = useState(false);
  const [list, setList] = useState(props.list || []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setList(props.list)
  }, [props.list]);

  const filteredList = useMemo(() => {
    console.log('useMemo');
    if (filter) {
     return list.filter((item) => item.indexOf(filter) !== -1)
    }
    return list;
  }, [filter]);
  console.log('refresh');
  return <div>
    <button onClick={() => {
      setRefresh(!refresh)
    }}>
      update
    </button>
    <FormExample
      onSubmit={(value) => {
        setFilter(value);
        console.log('onSubmit: ', value);
      }}
    />
    <ul>
      {
        filteredList.map((item) =><li>
          {
            item
          }
        </li>)
      }
    </ul>
  </div>
}