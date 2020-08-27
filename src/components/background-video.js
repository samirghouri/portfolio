import React from "react";
import video_sample from "../resources/video/video.mp4";
// import "./background-video.css";

const BackgroundVideo = () => {
  const style = {
    width: "100",
    height: "100",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "0",
  };

  return (
    <video autoPlay muted loop style={style}>
      <source src={video_sample} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
