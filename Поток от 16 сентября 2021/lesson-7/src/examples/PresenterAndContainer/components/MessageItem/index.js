

export const MessageItem = ({message, onRemove}) => (<li className='messageItem'>
  {message}
  <button onClick={onRemove}>x</button>
</li>)
