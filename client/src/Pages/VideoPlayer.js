import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import VideoList from "./VideoList";

import classes from "./VideoPlayer.module.css";

const VideoPlayer = () => {
  const params = useParams();
  const videoUrl = params.videoUrl;
  const mp4 = `/videos/${videoUrl}.mp4`;

  return (
    <Fragment>
      <Header />
      <div className={classes.container}>
        <video
          className={classes["video-player"]}
          width="960"
          height="480"
          controls
        >
          <source src={mp4} type="video/mp4" />
        </video>
        <div className={classes["side-bar"]}>
          <VideoList />
        </div>
      </div>
    </Fragment>
  );
};

export default VideoPlayer;
