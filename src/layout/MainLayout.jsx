import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

const MainLayout = () => {
  return (
    <div className="bg-[#cdcae9] w-full min-h-screen">
      <Header></Header>
      <Sidebar></Sidebar>
      <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
