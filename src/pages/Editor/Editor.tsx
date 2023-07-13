import Header from "@components/layout/Header";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  EditorTitle,
  EditorWrap,
  RegistrationBtn,
  TextareaTitle,
  Wrap,
} from "@pages/Editor/styles";

const Editor = () => {
  return (
    <>
      <Header />
      <Wrap>
        <EditorWrap>
          <EditorTitle>글쓰기</EditorTitle>
          <TextareaTitle
            placeholder="제목을 입력해 주세요."
            className="textarea_input"
          />
          <CKEditor
            editor={ClassicEditor}
            config={{ placeholder: "내용을 입력하세요." }}
            onReady={(editor) => {
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
          <RegistrationBtn type="button">등록</RegistrationBtn>
        </EditorWrap>
      </Wrap>
    </>
  );
};

export default Editor;
