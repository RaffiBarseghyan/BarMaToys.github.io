import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { FilePond, File, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Create.module.scss";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
function Upload() {
  const [files, setFiles] = useState([]);
  const [filesid, setFilesId] = useState([0,]);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/alltoy`).then((res) => {
      const persons = res.data;
      setFilesId(persons.file.id);
    });
  }, []);

  return (
    <div className="App">
      <FilePond
        className={style.filePond}
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={9}
        server={`http://barmatoys.loc/api/send-files/${filesid}`}
        name="files" /* sets the file input name, it's filepond by default */
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
}

export default Upload;
