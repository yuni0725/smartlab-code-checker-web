import { Outlet } from "react-router-dom";
import NavigationBar from "./navigation-bar";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout() {
  return (
    <Wrapper>
      <NavigationBar></NavigationBar>
      <Outlet />
    </Wrapper>
  );
}
