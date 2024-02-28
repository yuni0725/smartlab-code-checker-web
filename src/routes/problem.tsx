import styled from "styled-components";
import { CodeEditorForCoding } from "../components/problem-code-editor";
import MarkdownRenderer from "../components/problem-markdown-render";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  height: 100vh;
`;

export default function Problem() {
  return (
    <Wrapper>
      <MarkdownRenderer></MarkdownRenderer>
      <CodeEditorForCoding></CodeEditorForCoding>
    </Wrapper>
  );
}
