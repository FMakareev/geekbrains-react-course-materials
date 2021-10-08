import React from 'react';
import {SendMessageForm} from "../components/SendMessageForm";
import {MessageList} from "../components/MessageList";
import {useDispatch, useSelector} from "react-redux";
import {useSendMessageForm} from "../hooks/useSendMessageForm";
import {
  createAddMessageRequest,
  createRemoveMessageRequest,
  getMessagesErrorStatusSelector,
  getMessagesLoadingStatusSelector,
  getMessagesSelector
} from "../store/message";

export const MessageContainer = () => {
  const dispatch = useDispatch();
  const messageList = useSelector(getMessagesSelector);
  const isLoading = useSelector(getMessagesLoadingStatusSelector);
  const isError = useSelector(getMessagesErrorStatusSelector);

  const onSendMessage = async (messageText) => {
    dispatch(createAddMessageRequest(messageText))
  }

  const onRemoveMessage = (messageId) => async () => {
    dispatch(createRemoveMessageRequest(messageId))
  }

  const [inputValue, {onChange, onSubmit}] = useSendMessageForm({
    onSend: onSendMessage,
  });

  return (
    <div>
      <MessageList onRemove={onRemoveMessage} messages={messageList}/>
      <SendMessageForm
        value={inputValue}
        onChange={onChange}
        onSubmit={onSubmit}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};
