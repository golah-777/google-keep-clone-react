import "./Form.css";
import React, { useState } from "react";
function Form(props) {
  const [form, setForm] = useState(props.edit);
  const handleClicks = () => {
    setForm(() => true);
  };

  const [title, setTitle] = useState((props.edit && props.noteTitle) || "");
  const titleText = (event) => {
    setTitle(event.target.value);
  };

  const [text, setText] = useState((props.edit && props.noteText) || "");
  const textText = (event) => {
    setText(event.target.value);
  };

  const submitHandler = () => {
    if (!props.edit) {
      props.addNotes(title, text);
      setForm(() => false);
    } else {
      props.modalClose();
      props.editNote({
        id: props.selectedNote.id,
        title,
        text,
      });
    }
    setTitle("");
    setText("");
  };

  return (
    <div id="form-active" className="form">
      {form === true && (
        <div className="notetitle-pin">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={titleText}
            className="title-placeholder"
          />
          <div className="icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <path d="M14,4v5c0,1.12,0.37,2.16,1,3H9c0.65-0.86,1-1.9,1-3V4H14 M17,2H7C6.45,2,6,2.45,6,3c0,0.55,0.45,1,1,1c0,0,0,0,0,0l1,0v5 c0,1.66-1.34,3-3,3v2h5.97v7l1,1l1-1v-7H19v-2c0,0,0,0,0,0c-1.66,0-3-1.34-3-3V4l1,0c0,0,0,0,0,0c0.55,0,1-0.45,1-1 C18,2.45,17.55,2,17,2L17,2z" />
              </g>
            </svg>
            <div className="tooltip">Pin note</div>
          </div>
        </div>
      )}
      <div className="form-icons">
        <input
          type="text"
          placeholder="Take a note..."
          className="active-form"
          onClick={handleClicks}
          onChange={textText}
          value={text}
        />
        <div className="form-icons-sec">
          <div className="icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z" />
            </svg>
            <div className="tooltip">New list</div>
          </div>
          <div className="icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M7 16c.55 0 1 .45 1 1 0 1.1-.9 2-2 2-.17 0-.33-.02-.5-.05.31-.55.5-1.21.5-1.95 0-.55.45-1 1-1M18.67 3c-.26 0-.51.1-.71.29L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41l-1.34-1.34c-.2-.2-.45-.29-.7-.29zM7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3z" />
            </svg>
            <div className="tooltip">New note with drawing</div>
          </div>
          <div className="icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
            </svg>
            <div className="tooltip">New note with image</div>
          </div>
        </div>
      </div>
      {form === true && (
        <div className="footer-main">
          <div className="footer-icons">
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zM12 6c2.76 0 5 2.24 5 5v7H7v-7c0-2.76 2.24-5 5-5zm0-4.5c-.83 0-1.5.67-1.5 1.5v1.17C7.36 4.85 5 7.65 5 11v6l-2 2v1h18v-1l-2-2v-6c0-3.35-2.36-6.15-5.5-6.83V3c0-.83-.67-1.5-1.5-1.5zM13 8h-2v3H8v2h3v3h2v-3h3v-2h-3z" />
              </svg>
              <div className="tooltip">Remind Me</div>
            </div>
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <path d="M13,8c0-2.21-1.79-4-4-4S5,5.79,5,8s1.79,4,4,4S13,10.21,13,8z M11,8c0,1.1-0.9,2-2,2S7,9.1,7,8s0.9-2,2-2S11,6.9,11,8z M1,18v2h16v-2c0-2.66-5.33-4-8-4S1,15.34,1,18z M3,18c0.2-0.71,3.3-2,6-2c2.69,0,5.78,1.28,6,2H3z M20,15v-3h3v-2h-3V7h-2v3h-3v2 h3v3H20z" />
                </g>
              </svg>
              <div className="tooltip">Collaborator</div>
            </div>
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <g>
                    <g>
                      <g>
                        <path d="M12,22C6.49,22,2,17.51,2,12S6.49,2,12,2s10,4.04,10,9c0,3.31-2.69,6-6,6h-1.77c-0.28,0-0.5,0.22-0.5,0.5 c0,0.12,0.05,0.23,0.13,0.33c0.41,0.47,0.64,1.06,0.64,1.67C14.5,20.88,13.38,22,12,22z M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8 c0.28,0,0.5-0.22,0.5-0.5c0-0.16-0.08-0.28-0.14-0.35c-0.41-0.46-0.63-1.05-0.63-1.65c0-1.38,1.12-2.5,2.5-2.5H16 c2.21,0,4-1.79,4-4C20,7.14,16.41,4,12,4z" />
                        <circle cx="6.5" cy="11.5" r="1.5" />
                        <circle cx="9.5" cy="7.5" r="1.5" />
                        <circle cx="14.5" cy="7.5" r="1.5" />
                        <circle cx="17.5" cy="11.5" r="1.5" />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <div className="tooltip">Background options</div>
            </div>
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
              </svg>
              <div className="tooltip">Add image</div>
            </div>
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z" />
              </svg>
              <div className="tooltip">Archive</div>
            </div>
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              <div className="tooltip">More</div>
            </div>
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" />
              </svg>
              <div className="tooltip">Undo</div>
            </div>
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z" />
              </svg>
              <div className="tooltip"> Redo</div>
            </div>
          </div>
          <div className="btn-div">
            <button className="clear-btn" onClick={submitHandler}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
