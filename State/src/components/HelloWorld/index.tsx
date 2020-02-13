import React, { FC, useContext, useEffect, useState } from "react";

import { AddAlert, ClearAlerts } from "context/alert/IAlert";

import AlertContext from "context/alert/AlertContext";

const HelloWorld: FC = () => {
  const alertContext = useContext(AlertContext);
  const {
    addAlert,
    clearAlerts
  }: { addAlert: AddAlert; clearAlerts: ClearAlerts } = alertContext;

  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!loading) return;
    setLoading(false);

    addAlert("Hi", "danger", 5000);
  }, [loading, addAlert]);

  useEffect(() => {
    addAlert(`Hello: ${counter}`, "light");
  }, [counter]);

  return (
    <div className="container flex col center">
      <h1>Hello World</h1>
      <div className="row">
        <button className="btn m" onClick={() => setCounter(counter + 1)}>
          Button
        </button>
        <button className="btn m" onClick={clearAlerts}>
          Clear Alerts
        </button>
      </div>
    </div>
  );
};

export default HelloWorld;
