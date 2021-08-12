import {useEffect} from "react";


export const useDocumentTitle = (title) => {
  useEffect(() => {
    if(typeof title === 'string' && title.trim().length > 0) {
      document.title = title;
    }
  }, [title])
}