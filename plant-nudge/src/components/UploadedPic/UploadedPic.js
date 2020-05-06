import React, { Component } from "react";
import "./UploadedPic.css";

class UploadedPic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: "",
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);
    data.append("filename", this.fileName.value);

    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: data,
    }).then((response) => {
      this.setState({ imageURL: `http://localhost:5000/${data.file}` });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input
            className="choose-avatar"
            ref={(ref) => {
              this.uploadInput = ref;
            }}
            type="file"
          />
        </div>
        {/* \<div>
          <input
            ref={(ref) => {
              this.fileName = ref;
            }}
            type="text"
            placeholder="Enter the desired name of file"
          />
        </div> */}
        {/* <br />
        <div>
          <button>Upload</button>
        </div> */}
        {/* <img src={this.state.imageURL} alt="img" /> */}
      </form>
    );
  }
}

export default UploadedPic;
