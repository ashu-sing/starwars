import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { MainLayout, MainContent } from "./styles";

const Lay = ({ children }) => {
  return (
    <MainLayout>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </MainLayout>
  );
};

export default Lay;
