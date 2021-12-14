
export const SendMessageForm = ({value, isLoading, isError, onSubmit, onChange}) => {
  return (<div>
    <input value={value} onChange={onChange} type="text"/>
    <button onClick={onSubmit}>send</button>
    {
      isLoading && <div>
        loading...
      </div>
    }
    {
      isError && <div>
        error
      </div>
    }
  </div>)
}
