import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type TDashboardRoute = {
  key: string;
  label: ReactNode;
};

type TUserPaths = {
  name: string;
  path: string;
  element: ReactNode;
};

export const sidebarGenerator = (items: TUserPaths[], role:string) => {
  const sidebarItems = items.reduce((acc: TDashboardRoute[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    return acc;
  }, []);

  return sidebarItems;
};
