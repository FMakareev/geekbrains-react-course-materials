import React from 'react';
import {SendMessageForm} from "../components/SendMessageForm";
import {MessageList} from "../components/MessageList";
import {messageConnect, sendMessageFormHoc} from "../hocs";

export const MessageContainerRender = ({
                                         messageList,
                                         isLoading,
                                         isError,
                                         removeMessage,
                                         inputValue,
                                         onChange,
                                         onSubmit
}) => {
  return (
    <>
      <MessageList onRemove={removeMessage} messages={messageList}/>
      <SendMessageForm
        value={inputValue}
        onChange={onChange}
        onSubmit={onSubmit}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
};


export const MessageContainer = messageConnect(
  sendMessageFormHoc(
    MessageContainerRender
  )
)
