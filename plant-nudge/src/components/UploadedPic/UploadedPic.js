import React from "react";
import "./UploadedPic.css";

const UploadedPic = () => {
  return (
    <form>
      <div>
        <input className="choose-avatar" />
      </div>
      <div>
        <input />
      </div>
      <br />
      <div>
        <button>Upload</button>
      </div>
      <img src="" alt="img" />
    </form>
  );
};

export default UploadedPic;
