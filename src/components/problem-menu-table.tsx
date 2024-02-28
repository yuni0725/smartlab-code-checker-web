import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import styled from "styled-components";
import ProblemMenuTableContent from "./problem-menu-table-content";

export interface ProblemTableType {
  difficulty: string;
  fileID: string;
  lang: string;
  title: string;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  margin: 30px 0px;
  padding: 0px 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  --border-color: #c6c9cc;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  table-layout: auto;
`;

const Tr = styled.tr`
  &:nth-child(odd) td {
    background-color: #eaeaed;
  }
`;

const Th = styled.th`
  background-color: ghostwhite;
  color: var(--font-color);
  font-size: 22px;
  font-weight: bolder;
  text-align: left;

  padding: 6px 15px;

  border-top: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  &:first-child {
    border-left: 1px solid var(--border-color);
  }
`;

export default function ProblemTable() {
  const [problemTable, setProblemTable] = useState<ProblemTableType[]>([]);
  const getProblem = async () => {
    const problemQuery = query(collection(db, "problem"));
    const snapshot = await getDocs(problemQuery);
    const problems = snapshot.docs.map((doc) => {
      const { difficulty, fileID, lang, title } = doc.data();
      return { difficulty, fileID, lang, title };
    });
    setProblemTable(problems);
  };

  useEffect(() => {
    getProblem();
  }, []);

  return (
    <Wrapper>
      <Table>
        <thead>
          <Tr>
            <Th className="title">문제 제목</Th>
            <Th className="lang">언어</Th>
            <Th className="difficulty">난이도</Th>
            <Th className="link">링크</Th>
          </Tr>
        </thead>
        <tbody>
          {problemTable.map((problem) => (
            <ProblemMenuTableContent key={problem.fileID} {...problem} />
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}
