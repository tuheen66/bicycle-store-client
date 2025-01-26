const adminPaths2 = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      element: "ADMIN DASHBOARD",
    },
    {
      name: "Create Bicycle",
      path: "create-bicycle",
      element: "CREATE BICYCLE",
    },
  ];
  
  const newArray = adminPaths2.map((item) => {
    return {
      path: item.path,
      element: item.element,
    };
  });
  console.log(newArray)
  