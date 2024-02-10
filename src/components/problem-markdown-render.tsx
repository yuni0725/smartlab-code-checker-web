import { useEffect, useState } from "react";
import styled from "styled-components";
import MarkdownPreview from "@uiw/react-markdown-preview";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 15px;
  margin: 10px 5px 10px 10px;
  padding: 10px;
  background-color: white;

  font-size: 18px;
  color: var(--font-color);
`;

export default function MarkdownRenderer() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("src/assets/problem/01.md")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  });
  return (
    <Wrapper>
      <MarkdownPreview
        wrapperElement={{ "data-color-mode": "light" }}
        source={markdown}
      ></MarkdownPreview>
    </Wrapper>
  );
}
