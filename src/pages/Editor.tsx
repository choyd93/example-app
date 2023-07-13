import React, { useEffect } from "react";
import styled from "styled-components";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Header from "@components/layout/Header";

const Wrap = styled.div`
  width: 100%;
  padding-top: 60px;
`;

const EditorWrap = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const EditorTitle = styled.div`
  margin: 16px 0;
  font-size: 22px;
`;

const Editor = () => {
  const createEditor = () => {
    const element = document.querySelector<HTMLElement>("#editor");
    if (element) {
      ClassicEditor.create(element).catch((error) => {
        console.error(error);
      });
    }
  };

  useEffect(() => {
    createEditor();
  }, []);

  return (
    <>
      <Header />
      <Wrap>
        <EditorWrap>
          <EditorTitle>글쓰기</EditorTitle>
          <div id="editor" />
        </EditorWrap>
      </Wrap>
    </>
  );
};

export default Editor;
