import React from "react";
import "./call-to-action.scss";
import { ICallToAction } from "./models/ICallToAction";

const CallToAction: React.FC<ICallToAction> = ({ title, callToActionText }) => {
  return (
    <div className="call-to-action">
      <h4>{title.toUpperCase()}</h4>
      <p>{callToActionText.toUpperCase()}</p>
    </div>
  );
};

export default CallToAction;
