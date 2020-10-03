import React from "react";
import CallToAction from "./CallToAction";
import { IMenuItem } from "./models/IMenuItem";
import "./menu-item.scss";

export const MenuItem: React.FC<IMenuItem> = ({
  backgroundImage,
  callToAction,
  variant,
}) => {
  return (
    <div className={`menu-card${variant ? "-" + variant : ""}`}>
      <div
        className="menu-card-content"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <CallToAction
          title={callToAction.title}
          callToActionText={callToAction.callToActionText}
        />
      </div>
    </div>
  );
};
