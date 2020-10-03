import { ICallToAction } from "./ICallToAction";

export interface IMenuItem {
  backgroundImage: string;
  callToAction: ICallToAction;
  variant?: string;
}
