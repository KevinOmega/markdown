import React from "react";
import { FaExpandAlt } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { marked } from "marked";

const Preview = () => {
  const { text, editorVisible, previewVisible, setEditorVisible } =
    useGlobalContext();
  const markdownText = marked.parse(text);
  console.log(markdownText);

  return (
    <div
      className={`section-container ${!previewVisible && "hide"} ${
        !editorVisible && "big-section"
      }`}
    >
      <div className="header">
        <h1>Preview</h1>
        <button className="expand-btn">
          <FaExpandAlt onClick={() => setEditorVisible(!editorVisible)} />
        </button>
      </div>
      <div
        className="review-center"
        dangerouslySetInnerHTML={{
          __html: markdownText,
        }}
      ></div>
    </div>
  );
};

export default Preview;
