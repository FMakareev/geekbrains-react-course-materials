import {getProjects, getProjectsIsLoading} from "../../../store/project/selectors";
import {addProjectAction, removeProjectAction} from "../../../store/project/actions";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
  projects: getProjects(state),
  isLoading: getProjectsIsLoading(state),
})

const mapDispatchToProps = {
  addProject: addProjectAction,
  removeProject: removeProjectAction
}


export const withProjectConnect = connect(mapStateToProps, mapDispatchToProps);
