import React, { FC, useReducer } from "react";

import Web3Context from "./Web3Context";
import Web3Reducer from "./Web3Reducer";

import {} from "../types";

import {} from "./IWeb3";

const Web3State: FC = props => {
  const initialState: any = {};

  const [state, dispatch] = useReducer(Web3Reducer, initialState);

  /*
   * Actions
   */

  return (
    <Web3Context.Provider value={{}}>{props.children}</Web3Context.Provider>
  );
};

export default Web3State;
