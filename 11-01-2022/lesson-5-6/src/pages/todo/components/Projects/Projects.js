import {Spinner} from "react-bootstrap";
import {ProjectInput} from "../ProjectInput/ProjectInput";
import {ProjectList} from "../ProjectList/ProjectList";
import {withProjectInput} from "../../hocs/withProjectInput";
import {withProjectConnect} from "../../hocs/withProjectConnect";


export const Projects = ({
  projects,
  removeProject,
  projectNameValue,
  onSubmitProject,
  onChangeProjectName,
                           isLoading
}) => (<div>
  <h1 className="mb-3" >
    projects
  </h1>

  <ProjectList projects={projects} removeProject={removeProject}/>
  {
    isLoading && <Spinner animation="grow" />
  }
  <ProjectInput
    onChange={onChangeProjectName}
    onSubmit={onSubmitProject}
    value={projectNameValue}
  />
</div>)


export default withProjectConnect(withProjectInput(Projects))
