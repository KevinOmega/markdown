import React from "react";
import { FaExpandAlt } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Editor = () => {
  const { text, setText, editorVisible, previewVisible, setPreviewVisible } =
    useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleExpand = () => {
    setPreviewVisible(!previewVisible);
  };

  return (
    <div
      className={`section-container ${!editorVisible && "hide"} ${
        !previewVisible && "big-section"
      }`}
    >
      <div className="header">
        <h1>Editor</h1>
        <button className="expand-btn">
          <FaExpandAlt onClick={handleExpand} />
        </button>
      </div>
      <div className="section-center">
        <textarea
          name="textArea"
          id="editor"
          cols="30"
          rows="10"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
};

export default Editor;
