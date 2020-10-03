import React from "react";
import { MenuItem } from "../components/menu-item/MenuItem";
import { IMenuItem } from "../components/menu-item/models/IMenuItem";
import "./homepage.scss";

export const Homepage = () => {
  const menuItems = [
    {
      backgroundImage:
        "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
      callToAction: { title: "Men", callToActionText: "shop now" },
    },
    {
      backgroundImage:
        "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      callToAction: { title: "Women", callToActionText: "shop now" },
    },
    {
      backgroundImage:
        "https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      callToAction: { title: "Baby", callToActionText: "shop now" },
    },
    {
      backgroundImage:
        "https://images.pexels.com/photos/5085333/pexels-photo-5085333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      callToAction: { title: "Occasion", callToActionText: "shop now" },
      variant: "large",
    },
    {
      backgroundImage:
        "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
      callToAction: { title: "Formal", callToActionText: "shop now" },
      variant: "large",
    },
  ];

  const renderMenuItems = () => {
    const smallMenuItems: IMenuItem[] = [];
    const largeMenuItems: IMenuItem[] = [];
    menuItems.forEach((menuItem) =>
      menuItem.variant && menuItem.variant === "large"
        ? largeMenuItems.push(menuItem)
        : smallMenuItems.push(menuItem)
    );
    return (
      <div>
        <div className="menu-cards-container">
          {renderItems(smallMenuItems)}
        </div>
        <div className="menu-cards-container">
          {renderItems(largeMenuItems)}
        </div>
      </div>
    );
  };

  const renderItems = (items: IMenuItem[]) => {
    return items.map((item) => <MenuItem {...item} />);
  };

  return <div>{renderMenuItems()}</div>;
};
