
export const SendMessageForm = ({value, isLoading, onSubmit, onChange}) => {

  return (<div>
    <input value={value} onChange={onChange} type="text"/>
    <button onClick={onSubmit}>send</button>
    {
      isLoading && <div>
        loading...
      </div>
    }
  </div>)
}
