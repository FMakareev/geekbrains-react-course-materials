import React from 'react';
import {MessageItem} from "../MessageItem";


export const MessageList = ({messages, onRemove}) => (<ul>
  {
    messages.map(({message, id}) => <MessageItem
      key={id}
      message={message}
      onRemove={() => onRemove(id)}
    />)
  }
</ul>)
