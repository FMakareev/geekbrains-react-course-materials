import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessageThunk } from "../../store/messages/reducer";

export const Homework = () => {
  const dispatch = useDispatch();

  const onSendMessage = useCallback((text) => {
    const message = {
      author: "me",
      message: text,
      id: Date.now()
    };

    dispatch(addMessageThunk(message));
  }, []);

  const [value, { onChange, onSubmit }] = useSendMessageForm({
    onSend: onSendMessage
  });

  const messages = useSelector((state) => state.messages.messages);

  return (
    <div>
      <SendMessageForm value={value} onChange={onChange} onSubmit={onSubmit} />
      <ul>
        {messages.map(({ id, message, author }) => (
          <li key={id}>
            [{author}]:[{id}]: {message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const SendMessageForm = ({
  value,
  isLoading,
  isError,
  onSubmit,
  onChange
}) => {
  return (
    <div>
      <input value={value} onChange={onChange} type="text" />
      <button onClick={onSubmit}>send</button>
      {isLoading && <div>loading...</div>}
      {isError && <div>error</div>}
    </div>
  );
};

export const useSendMessageForm = ({ onSend }) => {
  const [value, setValue] = useState("");

  const resetValue = () => setValue("");

  const onChange = (event) => setValue(event.target.value);

  const onSubmit = () => {
    if (value.length === 0) {
      return;
    }
    onSend(value);
    resetValue();
  };

  return [
    value,
    {
      onChange,
      onSubmit
    }
  ];
};
