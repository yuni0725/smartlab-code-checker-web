import { useState } from "react";
import styled from "styled-components";
import CodeEditor from "@uiw/react-textarea-code-editor";

const Wrapper = styled.div`
  display: grid;

  grid-template-rows: 70px auto;
`;

const Menu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  padding-top: 10px;

  width: 100%;
`;

const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Select = styled.select`
  padding: 10px;

  width: 80%;
  height: 80%;

  border-radius: 5px;
  border: 1.5px solid black;

  font-size: 18px;

  cursor: pointer;

  background-color: ghostwhite;
`;

const SaveForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SaveBtn = styled.button`
  width: 80%;
  height: 80%;
  background-color: var(--highlight-color);
  color: ghostwhite;
  font-size: 18px;

  cursor: pointer;

  border: none;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

const EditorDiv = styled.div`
  padding: 10px 10px 10px 5px;
`;

export const CodeEditorForCoding = () => {
  const [lang, setLang] = useState("python");
  const [codeText, setCodeText] = useState("");

  const onLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value.toLowerCase());
  };

  const onEditerChange = (e: any) => {
    setCodeText(e.target.value);
  };

  const onCodeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirm("Are you sure you want to submit?")) {
    }
    return;
  };

  return (
    <Wrapper>
      <Menu>
        <CenterDiv>
          <Select onChange={onLangChange}>
            <option value="Python">Python</option>
            <option value="C">C</option>
            <option value="Java">Java</option>
          </Select>
        </CenterDiv>
        <CenterDiv>
          <SaveForm onSubmit={onCodeSubmit}>
            <SaveBtn type="submit">Save</SaveBtn>
          </SaveForm>
        </CenterDiv>
      </Menu>
      <EditorDiv>
        <CodeEditor
          value={codeText}
          language={lang}
          onChange={onEditerChange}
          padding={10}
          style={{
            backgroundColor: "white",
            fontSize: "18px",
            height: "100%",
          }}
        />
      </EditorDiv>
    </Wrapper>
  );
};
