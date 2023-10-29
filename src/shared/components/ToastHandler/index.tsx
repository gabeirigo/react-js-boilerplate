import { HttpStatusCode } from "axios";
import React, { useEffect, useRef, useState } from "react";

const ToastHandler: React.FC = () => {
  const toastElement = useRef<any>();
  const [errorDetails, setErrorDetails] = useState<{
    status: HttpStatusCode;
    detail: any;
  }>();
  const windowInstance = window;

  useEffect(() => {
    windowInstance.addEventListener("errorHandlerEvent", handlerError);

    return () => {
      windowInstance.removeEventListener("errorHandlerEvent", handlerError);
    };
  }, [windowInstance]);

  useEffect(() => {
    toastElement.current?.show(errorDetails?.detail);
  }, [errorDetails]);

  function handlerError(event: any) {
    setErrorDetails(event.detail);
  }

  return <>mensagem de erro</>;
};

export default ToastHandler;
