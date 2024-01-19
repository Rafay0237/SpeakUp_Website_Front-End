import "./AddData.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddData() {
  let [data, setData] = useState("");
  let [name, setName] = useState(false);
  let [title, setTitle] = useState("");
  let [file, setFile] = useState("");

  const Save = async (title, data, file) => {
    let url = "";
    const formData = new FormData();
    formData.append("file", file);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    };

    fetch("https://cute-blue-chiton-fez.cyclic.app/upload", requestOptions)
      .then((res) => {
        url = res.data.url;
      })
      .catch((error) => {
        console.error(error);
      });

    const PostObject = {
      title,
      url,
      data,
    };
    await axios
      .post("https://cute-blue-chiton-fez.cyclic.app/" + name, PostObject)
      .then((response) => {
        console.log(response.data.message);
      });
    setName("");
    setFile("");
    setData("Hello , Type your Text Here!");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="App">
      {name ? (
        <>
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor&nbsp;5!</p>"
            onChange={(event, editor) => {
              setData(editor.getData());
              console.log(data);
            }}
          />
          <div className="box submitData">
            <label>Enter a Title: </label>
            <input
              type="name"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => handleChange(e)}
              width="28"
              height="28"
            />
            <label>Upload a Cover Image: </label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              width="28"
              height="28"
            />
            <br />
            <Link to={"/" + name}>
              <button onClick={() => Save(title, data, file)}>Submit</button>
            </Link>
          </div>
        </>
      ) : (
        <div className="EnterName">
          <h1 id="selectH">What do you want to Add </h1>
          <button className="Article" onClick={() => setName("articles")}>
            Article
          </button>
          <button className="Portfolio" onClick={() => setName("portfolios")}>
            {" "}
            Portfolio
          </button>
        </div>
      )}
    </div>
  );
}
