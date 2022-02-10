import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {hasProjectSelector} from "../../../store/project/selectors";


export const withHasProject = (Component, NotFoundComponent) => {
  return (props) => {
    const { projectID } = useParams();
    const hasProject = useSelector(hasProjectSelector(projectID))

    if(!hasProject) {
      return NotFoundComponent ? <NotFoundComponent/> : <div>404</div>
    }

    return (<Component {...props}/>)
  }
}
