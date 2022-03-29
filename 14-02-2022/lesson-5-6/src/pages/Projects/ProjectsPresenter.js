import {Link} from "react-router-dom";
import {useForm} from "../../hooks/useForm";


export const ProjectsPresenter = ({handleCreateProject, projects, children, isLoading, error}) => {

  const {onChange, onSubmit, getValue} = useForm({name: ''}, handleCreateProject)

  return <div>
    <div>
      <form onSubmit={onSubmit} >
        <input type="text" value={getValue('name')} onChange={onChange('name')}/>
        <button onClick={handleCreateProject}>
          create
        </button>
      </form>
      {
        error &&
        <div>
          {JSON.stringify(error)}
        </div>
      }
      {
        isLoading &&
        <div>
          Loading
        </div>
      }
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
