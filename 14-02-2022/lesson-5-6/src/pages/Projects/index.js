import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {getProjectList} from "../../store/projects/selectors";
import {createProject} from "../../store/projects/actions";


export const ProjectsPage = ({children}) => {
  const projects = useSelector(getProjectList);
  const dispatch = useDispatch();

  const handleCreateProject = () => {
    const id = Date.now()
    dispatch(createProject({
      id: Date.now(),
      name: `Project_${id}`,
    }))
  }

  return <div>
    <div>
      <button onClick={handleCreateProject}>
        create
      </button>
      <ul>
        {
          projects?.map((item) => {
            return <li key={item.id}>
              <Link to={`/projects/${item.id}`}>
                {item.name}
              </Link>
            </li>
          })
        }
      </ul>
    </div>
    <div>
      {children}
    </div>
  </div>
}
