import { Fragment } from "react";
import Header from "../Components/Header";
import VideoCard from "../Components/VideoCard";

import classes from "./VideoList.module.css";

const VideoList = () => {
  const DUMMY_DATA = [
    { title: "Movie 1", url: "pexels-kelly-lacy-9722139" },
    { title: "Movie 2", url: "pexels-tima-miroshnichenko-6536354" },
    { title: "Movie 3", url: "pexels-artem-podrez-7233556" },
    { title: "Movie 4", url: "pexels-c-technical-5822792" },
    { title: "Movie 5", url: "pexels-life-on-super-9035098" },
    { title: "Movie 6", url: "pexels-lisa-9963201" },
    { title: "Movie 7", url: "pexels-nothing-ahead-10505868" },
    { title: "Movie 8", url: "pexels-pavel-danilyuk-5359634" },
    { title: "Movie 9", url: "production ID_5077814" },
    { title: "Movie 10", url: "production ID_5190550" },
  ];
  const videos = DUMMY_DATA.map((video) => {
    return <VideoCard title={video.title} url={video.url} key={video.title} />;
  });

  return (
    <Fragment>
    <Header />
    <div className={classes["card-container"]}>
      <ul className={classes["card-list"]}>{videos}</ul>
    </div>
    </Fragment>
  );
};

export default VideoList;
