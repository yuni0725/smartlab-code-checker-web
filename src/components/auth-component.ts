import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
  width: 420px;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 42px;
  text-align: center;
  margin-bottom: 5px;
  color: var(--font-color);
  font-weight: 500;
`;

export const Form = styled.form`
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;

  width: 100%;
  font-size: 16px;

  background-color: white;
  color: var(--font-color);

  &:focus {
    outline: 2px solid black;
  }

  &[type="submit"] {
    cursor: pointer;
    outline: none;
    background-color: var(--highlight-color);
    color: white;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Error = styled.span`
  margin-left: 15px;
  font-size: 16px;
  color: tomato;
`;

export const ErrorBottom = styled.span`
  margin-left: 15px;
  font-size: 16px;
  color: tomato;
  text-align: center;
`;

export const Switcher = styled.span`
  margin-top: 20px;
  a {
    color: var(--highlight-color);
  }
`;

export default function isValueTypeOfEmail(textShouldBeCheck: string): boolean {
  if (textShouldBeCheck.includes("@")) {
    return true;
  }
  return false;
}
