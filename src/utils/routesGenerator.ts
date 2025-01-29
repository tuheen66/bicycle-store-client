import { ReactNode } from "react";

type TRoute = {
  path: string;
  element: ReactNode;
};

type TUserPaths = {
  name?: string;
  path: string;
  element: ReactNode;
};

export const routeGenerator = (items: TUserPaths[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    return acc;
  }, []);

  return routes;
};
