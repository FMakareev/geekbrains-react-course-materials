import {useCallback, useState} from "react";
import {FILTER_BY_STATUS_ALL} from "../constants";


export const useFilterByStatus = () => {
  const [filterStatus, setFilterStatus] = useState(FILTER_BY_STATUS_ALL);

  const onChangeStatus = useCallback((event) => {
    setFilterStatus(event.target.value)
  }, [])

  return {
    filterStatus,
    onChangeStatus
  }
}
