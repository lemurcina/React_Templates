import React, { FC } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import HelloWorld from "components/HelloWorld";
import Alerts from "components/layout/Alerts";

import AlertState from "context/alert/AlertState";
import Web3State from "context/web3/Web3State";

import "./App.css";

library.add(faInfoCircle, faTimesCircle);

const App: FC = () => (
  <AlertState>
    <Web3State>
      <Alerts />
      <HelloWorld />
    </Web3State>
  </AlertState>
);

export default App;
