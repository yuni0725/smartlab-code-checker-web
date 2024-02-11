import styled from "styled-components";
import { ProblemTableType } from "./problem-menu-table";
import { Link } from "react-router-dom";

const Tr = styled.tr`
  &:nth-child(odd) td {
    background-color: #eaeaed;
  }
`;

const Td = styled.td`
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);

  padding: 6px 15px;

  background-color: ghostwhite;

  &:first-child {
    border-left: 1px solid var(--border-color);
  }
`;

const GoToProblemPage = styled.div`
  text-align: left;

  a {
    color: var(--highlight-color);
    font-weight: 600;
  }
`;

export default function ProblemMenuTableContent({
  fileId,
  lang,
  difficulty,
  problemNum,
  title,
}: ProblemTableType) {
  return (
    <Tr>
      <Td>{problemNum}</Td>
      <Td>{title}</Td>
      <Td>{lang}</Td>
      <Td>{difficulty}</Td>
      <Td>
        <GoToProblemPage>
          <Link to={`../problem/${fileId}`} style={{ textDecoration: "none" }}>
            문제보기
          </Link>
        </GoToProblemPage>
      </Td>
    </Tr>
  );
}
