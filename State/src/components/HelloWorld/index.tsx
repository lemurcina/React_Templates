import React, { FC, useContext, useEffect } from "react";

import { AddAlert } from "context/alert/IAlert";

import AlertContext from "context/alert/AlertContext";

const HelloWorld: FC = () => {
  const alertContext = useContext(AlertContext);
  const { addAlert }: { addAlert: AddAlert } = alertContext;

  useEffect(() => {
    addAlert("Hi", "danger");
  }, [addAlert]);

  return <h1>Hello World</h1>;
};

export default HelloWorld;
