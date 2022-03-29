import {useDispatch, useSelector} from "react-redux";
import {getProjectList, getProjectIsLoading, getProjectError} from "../../store/projects/selectors";
import {createProjectThunk, getProjectsThunk} from "../../store/projects/actions";
import {ProjectsPresenter} from "./ProjectsPresenter";
import {useEffect} from "react";


export const ProjectsPage = ({children}) => {
  const projects = useSelector(getProjectList);
  const isLoading = useSelector(getProjectIsLoading);
  const error = useSelector(getProjectError);
  const dispatch = useDispatch();
  console.log('error: ', error);
  const handleCreateProject = (values) => {
    const id = Date.now()
    dispatch(createProjectThunk({
      id,
      ...values,
    }))
  }

  useEffect(() => {
    dispatch(getProjectsThunk());
  }, [])




  return (<ProjectsPresenter isLoading={isLoading}
                             error={error} handleCreateProject={handleCreateProject} projects={projects}>
    {children}
  </ProjectsPresenter>  )
}
