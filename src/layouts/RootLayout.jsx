import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../conponents/SideBar/SideBar";
import Search from "../conponents/Search/Seach";
import useAuth from "../hooks/useAuth";

const RootLayout = () => {
  const { handleGetuser } = useAuth();

  useEffect(() => {
    handleGetuser();
  }, []);

  return (
    <div className="py-md-4 d-xl-flex">
      <SideBar />
      <div className="w-100">
        <Search />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
