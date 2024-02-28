import { useState } from "react";
import styled from "styled-components";
import { Editor } from "@monaco-editor/react";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useParams } from "react-router-dom";

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
  const { fileID } = useParams<string>();
  const [lang, setLang] = useState("python");
  const [codeText, setCodeText] = useState("");
  const [loadingToSaveCode, setLoadingToSaveCode] = useState(false);

  const onLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value.toLowerCase());
  };

  const onEditerChange = (e: any) => {
    setCodeText(e);
  };

  const onCodeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = auth.currentUser;
    const fileAndLangName = fileID + "-" + lang;
    if (!user || typeof fileID == "undefined") return;
    if (confirm("Are you sure you want to save it?")) {
      try {
        setLoadingToSaveCode(true);
        await setDoc(
          doc(db, "codeUserSavedIt", `${user.displayName}`),
          {
            [fileAndLangName]: codeText,
          },
          { merge: true }
        );
      } catch (e) {
        alert(e);
      } finally {
        setLoadingToSaveCode(false);
      }
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
            <SaveBtn type="submit">
              {loadingToSaveCode ? "Wait for a moment..." : "Save"}
            </SaveBtn>
          </SaveForm>
        </CenterDiv>
      </Menu>
      <EditorDiv>
        <Editor
          theme="vs"
          language={lang}
          onChange={onEditerChange}
          options={{ minimap: { enabled: false } }}
        ></Editor>
      </EditorDiv>
    </Wrapper>
  );
};
