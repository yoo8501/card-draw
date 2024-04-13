import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
const Wrap = styled.div`
  margin: 16px;
  padding: 16px;
  min-height: calc(100vh - 32px);
  background-color: gray;
`;
export default function Layout({ children }: any) {
  return (
    <Wrap>
      <Outlet />
    </Wrap>
  );
}
