import styled from "styled-components";
import { ProblemTableType } from "./problem-menu-table";
import { Link } from "react-router-dom";

const Tr = styled.tr`
  &:nth-child(odd) td {
    background-color: #eaeaed;
  }
`;

const Td = styled.td`
  font-size: 20px;
  font-weight: 400;

  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);

  padding: 6px 15px;

  background-color: ghostwhite;

  &:first-child {
    border-left: 1px solid var(--border-color);
  }
`;

const GoToProblemPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    color: var(--highlight-color);
  }
`;

export default function ProblemMenuTableContent({
  fileID,
  lang,
  difficulty,
  title,
}: ProblemTableType) {
  return (
    <Tr>
      <Td>{title}</Td>
      <Td>{lang}</Td>
      <Td>{difficulty}</Td>
      <Td>
        <GoToProblemPage>
          <Link to={`/problem/${fileID}`} style={{ textDecoration: "none" }}>
            문제보기
          </Link>
        </GoToProblemPage>
      </Td>
    </Tr>
  );
}
