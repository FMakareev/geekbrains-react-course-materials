import {connect} from "react-redux";
import {
  createAddMessageRequest, createRemoveMessageRequest,
  getMessagesErrorStatusSelector,
  getMessagesLoadingStatusSelector,
  getMessagesSelector
} from "../store/message";
import {useSendMessageForm} from "../hooks";


const mapStateToProps = (state) => ({
  messageList: getMessagesSelector(state),
  isLoading: getMessagesLoadingStatusSelector(state),
  isError: getMessagesErrorStatusSelector(state),
})

const mapDispatchToProps = {
  createMessage: createAddMessageRequest,
  removeMessage: createRemoveMessageRequest,
}

export const messageConnect = connect(mapStateToProps, mapDispatchToProps)


export const sendMessageFormHoc = (Component) => {
  return (props) => {
    const [inputValue, {onChange, onSubmit}] = useSendMessageForm({
      onSend: props.createMessage,
    });

    return <Component {...props} inputValue={inputValue} onChange={onChange} onSubmit={onSubmit}/>
  }
}
