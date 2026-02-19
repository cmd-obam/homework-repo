import React from "react";
import Header from "../common/Header";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function MainLayout() {
  return (
    <Layout>
      <Header />
      <div>
        <Outlet />
      </div>
    </Layout>
  );
}
