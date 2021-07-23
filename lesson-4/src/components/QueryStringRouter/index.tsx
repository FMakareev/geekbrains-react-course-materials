import React, { ReactNode, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

type Props = {
  children?: ReactNode;
  modalType?: string;
};

export const QueryStringRouter = ({ children, modalType }: Props) => {
  const [isActive, setActive] = useState(false);
  const { listen, location } = useHistory();

  const listenerCallback = (location: any) => {
    const paramsObject = new URLSearchParams(location.search);

    if (!paramsObject.has('modalType')) {
      return;
    }

    if (paramsObject.get('modalType') === modalType) {
      setActive(true);
      return;
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    listenerCallback(location);
    listen(listenerCallback);
  }, []);

  if (!isActive) {
    return null;
  }

  return <>{children}</>;
};
