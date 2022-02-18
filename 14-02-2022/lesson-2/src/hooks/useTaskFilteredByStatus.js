import {useMemo} from "react";
import {FILTER_BY_STATUS_COMPLETED, FILTER_BY_STATUS_IN_WORK} from "../constants";


export const useTaskFilteredByStatus = ({list, filterStatus}) => {

  const filteredList = useMemo(() => {
    if(filterStatus === FILTER_BY_STATUS_COMPLETED) {
      return list.filter(({status}) => status === true);
    }
    if(filterStatus === FILTER_BY_STATUS_IN_WORK) {
      return list.filter(({status}) => status === false);
    }

    return list;
  }, [list, filterStatus]);

  return {filteredList};
}
