import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { FilePond, File, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import axios from "axios";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
function UploadUpd(id) {
  const [files, setFiles] = useState([]);
  const [filesid, setFilesId] = useState([0,]);


  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/alltoy`).then((res) => {
      const persons = res.data;
      setFilesId(persons.file.id);
    });
  }, []);

  return (
    <div className="App ms-5">
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={9}
        server={`http://barmatoys.loc/api/send-filesUpd/${Object.values(id)[0]}`}
        name="files" /* sets the file input name, it's filepond by default */
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
}

export default UploadUpd;
