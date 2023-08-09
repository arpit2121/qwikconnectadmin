import { useEffect, useRef, useState } from "react";
import "../videoplayer/Player.style.css";
import backward from "../../assets/svg/Videos/backward.svg";
import forward from "../../assets/svg/Videos/forward.svg";
import play from "../../assets/svg/Videos/play.svg";
import pause from "../../assets/svg/Videos/pause.svg";

function Player() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      var vid = document.getElementById("video1");
      setVideoTime(vid.duration);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const fastForward = () => {
    videoRef.current.currentTime += 5;
  };

  const revert = () => {
    videoRef.current.currentTime -= 5;
  };

  window.setInterval(function () {
    setProgress((videoRef.current?.currentTime / videoTime) * 100);
    setCurrentTime(videoRef.current?.currentTime);
  }, 1000);

  useEffect(() => {
    // setProgress((videoRef.current?.currentTime / videoTime) * 100);
    console.log(progress)
  }, [currentTime]);
  return (
    <div className="app">
      <video
        id="video1"
        ref={videoRef}
        className="video"
        src="https://res.cloudinary.com/dssvrf9oz/video/upload/v1635662987/pexels-pavel-danilyuk-5359634_1_gmixla.mp4"
      ></video>

      <div className="controlsContainer">
        <div className="controls">
          <img
            onClick={revert}
            className="controlsIcon"
            alt="no image"
            src={backward}
          />
          {playing ? (
            <img
              onClick={() => videoHandler("pause")}
              className="controlsIcon--small"
              alt=""
              src={pause}
            />
          ) : (
            <img
              onClick={() => videoHandler("play")}
              className="controlsIcon--small"
              alt=""
              src={play}
            />
          )}
          <img
            className="controlsIcon"
            onClick={fastForward}
            alt="no image found"
            src={forward}
          />
        </div>
      </div>

      <div className="timecontrols">
        <p className="controlsTime">
          {Math.floor(currentTime / 60) +
            ":" +
            ("0" + Math.floor(currentTime % 60)).slice(-2)}
        </p>
        <div className="time_progressbarContainer">
          <div
            style={{ width: `${progress}%` }}
            className="time_progressBar"
          ></div>
        </div>
        <p className="controlsTime">
          {Math.floor(videoTime / 60) +
            ":" +
            ("0" + Math.floor(videoTime % 60)).slice(-2)}
        </p>
      </div>
    </div>
  );
}

export default Player;
