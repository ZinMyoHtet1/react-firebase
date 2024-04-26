import React from "react";
import { Outlet } from "react-router";

function HomeLayout() {
  return (
    <div>
      homeLayout
      <Outlet />
    </div>
  );
}

export default HomeLayout;
