import {useSelector, useDispatch} from 'react-redux'
import {
  createAddMessageRequest,
  createRemoveMessage,
  getMessagesLoadingStatusSelector,
  getMessagesSelector
} from "./store/message";
import styles from './styles.module.css';
import {useState} from "react";

const MessageItem = ({message, onRemove}) => (<div
  className={styles.messageItem}
>{message}
  <button onClick={onRemove}>x</button>
</div>)


const MessageList = ({messages, onRemove}) => (<div className={styles.messageList}>
  {
    messages.map(({message, id}) => <MessageItem key={id} message={message} onRemove={onRemove(id)}/>)
  }
</div>)

const SendMessageForm = ({onSend, isLoading}) => {
  const [value, setValue] = useState('');

  const resetValue = () => setValue('');

  const onChange = (event) => setValue(event.target.value);

  const onSubmit = () => {
    onSend(value);
    resetValue()
  }

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


function App() {

  const messages = useSelector(getMessagesSelector);
  const isLoading = useSelector(getMessagesLoadingStatusSelector);
  const dispatch = useDispatch();

  const onRemove = (id) => () => dispatch(createRemoveMessage(id))
  const onAddMessage = (message) => dispatch(createAddMessageRequest({message, id: Date.now()}))

  return (
    <div className={styles.wrapper}>
      <SendMessageForm isLoading={isLoading} onSend={onAddMessage}/>
      <MessageList messages={messages} onRemove={onRemove}/>
    </div>
  );
}

export default App;
