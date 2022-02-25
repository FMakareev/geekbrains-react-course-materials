import {Redirect, useParams} from "react-router-dom";
import {projects} from "../Projects";


export const Task = () => {
  const {projectId, taskId} = useParams();

  if (!projects.find((item) => item.id === projectId)) {
    return <Redirect to={'/projects'}/>
  }

  return <div>
    <h1>
      Task #{taskId}
    </h1>
  </div>
}
