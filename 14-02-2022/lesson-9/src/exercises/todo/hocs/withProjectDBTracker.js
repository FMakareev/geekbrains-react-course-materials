import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {
  addProjectOffTracker,
  addProjectTracker,
  removeProjectOffTracker,
  removeProjectTracker
} from "../../../store/project/actions";


export const withProjectDBTracker = (Component) => {

  return (props) => {
    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(addProjectTracker);
      dispatch(removeProjectTracker);

      return () => {
        dispatch(removeProjectOffTracker);
        dispatch(addProjectOffTracker);
      }
    }, [])

    return <Component {...props}/>
  }
}
