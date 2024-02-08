import styled from "styled-components";
import { HiBars3, HiHome, HiUserCircle } from "react-icons/hi2";
import LogOut from "./auth-logout-btn";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 50px;

  display: grid;
  grid-template-columns: 0.5fr 4fr 1fr 0.5fr;

  border: 1px solid lightgray;
`;

const Head = styled.div`
  height: inherit;
  text-align: center;
`;

const Logo = styled.img`
  width: inherit;
  height: inherit;
  padding: 3px;
`;

const Menu = styled.div`
  height: inherit;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; */

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MenuItem = styled.div`
  height: inherit;
  width: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;

  cursor: pointer;
`;

const IconTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: var(--font-color);
`;

const LogOutDiv = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserDiv = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default function NavigationBar() {
  return (
    <Wrapper>
      <Head>
        <Logo src="src\assets\image\smartlab-logo.svg"></Logo>
      </Head>
      <Menu>
        <Link to="/" style={{ textDecoration: "none" }}>
          <MenuItem>
            <HiHome size="20" color="#313638" />
            <IconTitle>Home</IconTitle>
          </MenuItem>
        </Link>
        <Link to="/problem" style={{ textDecoration: "none" }}>
          <MenuItem>
            <HiBars3 size="20" color="#313638" />
            <IconTitle>Problem</IconTitle>
          </MenuItem>
        </Link>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
      </Menu>
      <LogOutDiv>
        <LogOut></LogOut>
      </LogOutDiv>
      <UserDiv>
        <HiUserCircle size="30" />
      </UserDiv>
    </Wrapper>
  );
}
