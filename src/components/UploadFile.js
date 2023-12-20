import { useState } from "react";
import { postFile } from "../api/apiFile";
import { toast } from "react-toastify";

function UploadFile() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("이미지를 업로드해주세요");

  const imageSelectHandler = (e) => {
    const imageFile = e.target.files[0];
    console.log(imageFile);
    setFileName(imageFile.name);
    setFile(imageFile);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await postFile(formData);
      console.log(res);
      toast.success("이미지 업로드 성공");
    } catch (error) {
      alert("이미지 업로드 실패");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="inp">{fileName}</label>
        <input
          type="file"
          name="image"
          id="inp"
          onChange={imageSelectHandler}
        />
        <button type="submit">파일전송</button>
      </form>
    </>
  );
}

export default UploadFile;
