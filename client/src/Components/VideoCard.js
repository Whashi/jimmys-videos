import { useNavigate } from "react-router-dom";

import classes from "./VideoCard.module.css";

const VideoCard = (props) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/video/${props.url}`);
  };
  const mp4 = `/videos/${props.url}.mp4`;
  return (
    <li>
      <div className={classes["video-card"]} onClick={clickHandler}>
        <video className={classes["video-preview"]} width="432" height="216">
          <source src={mp4} type="video/mp4" />
        </video>
        <div className={classes["video-title-container"]}>
          <h3>{props.title}</h3>
        </div>
      </div>
    </li>
  );
};

export default VideoCard;
