import styled from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  width: 70px;
  height: 35px;
  background-color: var(--highlight-color);
  color: ghostwhite;
  border: none;
  border-radius: 5px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default function LogOut() {
  const navigate = useNavigate();
  const logOut = async () => {
    const ok = confirm("Are you sure you want to log out?");
    if (ok) {
      auth.signOut();
      navigate("/login");
    }
    return;
  };
  return <Button onClick={logOut}>Log Out</Button>;
}
