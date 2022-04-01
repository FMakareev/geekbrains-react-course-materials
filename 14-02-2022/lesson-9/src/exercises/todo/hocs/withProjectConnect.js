import {getProjects, getProjectsIsLoading} from "../../../store/project/selectors";
import {addProjectAction, removeProjectCommand} from "../../../store/project/actions";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
  projects: getProjects(state),
  isLoading: getProjectsIsLoading(state),
})

const mapDispatchToProps = {
  addProject: addProjectAction,
  removeProject: removeProjectCommand
}


export const withProjectConnect = connect(mapStateToProps, mapDispatchToProps);
