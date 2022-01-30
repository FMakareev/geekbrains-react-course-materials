import {Projects} from "./todo/components/Projects";
import {Tasks} from "./todo/components/Tasks/tasks";
import {Route} from "react-router";


export const ReduxExample = () => {
  return <div style={{
    display: 'flex',
    flexDirection: 'row',
    gap: '16px'
  }}>
    <Route path={'/projects'}>
      <Projects />
    </Route>
    <Route path={'/projects/:projectID'}>
      <Tasks />
    </Route>
  </div>
}
