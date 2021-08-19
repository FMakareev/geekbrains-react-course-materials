import React, {useState} from 'react';

const SimpleForm = ({render, children}) => {
  const [formValues, setFormValues] = useState({});

  const setFieldValue = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const getFieldValue = (name) => formValues[name];

  const resetForm = () => {
    setFormValues({});
  }

  const resetFieldValue = (name) => {
    setFieldValue(name, '');
  }

  const props = {
    getFieldValue,
    setFieldValue,
    resetForm,
    resetFieldValue,
    formValues
  }

  if (render && typeof (render) === 'function') {
    return render(props);
  }
  if (children && typeof (children) === 'function') {
    return children(props);
  }

  return null;
}


const RenderFirstElement = ({children}) => {
  console.log(React.Children.count(children));
  return React.Children.map(children, (child, index) => {

    if (index === 0) {
      return child;
    }
    return null;
  })
}

const Example = ({children}) => {

  console.log(children);
  return <div>
    isArray: {React.Children.map(React.Children.toArray(children), (child) => {

      return child;
  })}
    {children}
  </div>
}

const AddClassForAllChildren = ({children, className}) => {

  return React.Children.map(children, (child, index) =>{
    console.log(child);
    return React.cloneElement(child, {
      className
    })
  })
}


export const RenderProp = (props) => {
  return (
    <div>
      <h1>children</h1>

      <AddClassForAllChildren className="avatar">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </AddClassForAllChildren>

      <Example>
        <div>
          Example
        </div>
      </Example>

      <RenderFirstElement>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </RenderFirstElement>

      RenderProp
      <br/>
      <br/>
      <br/>
      <SimpleForm>
        {
          (props) => {
            return <div>
              {
                JSON.stringify(props.formValues)
              }
              <br/>
              <input
                onChange={(event) => {
                  const value = event.target.value;
                  props.setFieldValue("email", value)
                }}
                value={props.getFieldValue('email')}
                name="email"
                type="text"
              />
              <input
                onChange={(event) => {
                  const value = event.target.value;
                  props.setFieldValue("phone", value)
                }}
                value={props.getFieldValue('phone')}
                name="phone"
                type="text"
              />
            </div>
          }
        }
      </SimpleForm>
    </div>
  );
};