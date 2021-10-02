import {useSelector, useDispatch} from 'react-redux'
import {
  createAddMessageRequest,
  createRemoveMessageRequest,
  getMessagesLoadingStatusSelector,
  getMessagesSelector
} from "./store/message";
import styles from './styles.module.css';

import {SendMessageForm} from './components/SendMessageForm';
import {SendMessageFormHOC} from './containers/SendMessageFormHOC';

const SendMessageFormWithHOC = SendMessageFormHOC(SendMessageForm);

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



function App() {

  const messages = useSelector(getMessagesSelector);
  const isLoading = useSelector(getMessagesLoadingStatusSelector);
  const dispatch = useDispatch();

  const onRemove = (id) => () => dispatch(createRemoveMessageRequest(id))
  const onAddMessage = (message) => {
    const fn = createAddMessageRequest({message, id: Date.now()});
    dispatch(fn);
  }

  return (
    <div className={styles.wrapper}>
      <SendMessageFormWithHOC isLoading={isLoading} onSend={onAddMessage}/>
      <MessageList messages={messages} onRemove={onRemove}/>
    </div>
  );
}

export default App;
