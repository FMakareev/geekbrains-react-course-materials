import {Link} from "react-router-dom";


export const ProjectsPresenter = ({handleCreateProject, projects, children}) => {
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
