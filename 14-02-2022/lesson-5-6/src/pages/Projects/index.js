import {useDispatch, useSelector} from "react-redux";
import {getProjectList} from "../../store/projects/selectors";
import {createProjectThunk} from "../../store/projects/actions";
import {ProjectsPresenter} from "./ProjectsPresenter";


export const ProjectsPage = ({children}) => {
  const projects = useSelector(getProjectList);
  const dispatch = useDispatch();

  const handleCreateProject = () => {
    const id = Date.now()
    dispatch(createProjectThunk({
      id: Date.now(),
      name: `Project_${id}`,
    }))
  }


  return (<ProjectsPresenter handleCreateProject={handleCreateProject} projects={projects}>
    {children}
  </ProjectsPresenter>  )
}
