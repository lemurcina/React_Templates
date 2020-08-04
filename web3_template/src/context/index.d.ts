declare module "context" {
  import { Provider } from "ethers/providers";

  export type Action = {
    payload?: any;
    type: string;
  };

  /*
   *Alerts
   */

  export type Alert = {
    msg: string;
    type: string;
    id: string;
  };

  export type Alerts = Alert[];

  export type AddAlert = (
    msg: string,
    type: "primary" | "light" | "dark" | "danger" | "success" | "white",
    timeout?: number
  ) => void;

  export type RemoveAlert = (id: string) => void;

  export type ClearAlerts = () => void;

  export interface AlertContext extends Alerts {
    alerts: Alerts;
    addAlert: AddAlert;
    removeAlert: RemoveAlert;
    clearAlerts: ClearAlerts;
  }

  /*
   * Web3
   */

  export type SetProvider = (provider: Provider) => void;

  export interface Web3State {
    provider: Provider;
  }

  export interface Web3Context extends Web3State {
    setProvider: SetProvider;
  }
}
