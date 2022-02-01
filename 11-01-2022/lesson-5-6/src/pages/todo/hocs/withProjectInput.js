import {useCallback, useState} from "react";
import {useDispatch} from 'react-redux';
import {ADD_PROJECT, addProjectAction} from "../../../store/project/actions";

export const withProjectInput = (Component) => {
  return (props) => {
    const [projectNameValue, setProjectNameValue] = useState();
    const dispatch = useDispatch();

    const onChangeProjectName = useCallback((event) => {
      setProjectNameValue(event.target.value);
    }, [])

    const onSubmitProject = useCallback((event) => {
      event.preventDefault();
      dispatch(addProjectAction({
        id: Date.now(),
        name: projectNameValue,
      }))

      setProjectNameValue('');
    }, [projectNameValue]);

    return (<Component
      projectNameValue={projectNameValue}
      onSubmitProject={onSubmitProject}
      onChangeProjectName={onChangeProjectName}
      {...props}
    />)
  }
}
