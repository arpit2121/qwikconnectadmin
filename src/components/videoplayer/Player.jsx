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
        type="video/mp4"
        // src="https://qwik-connect.s3.ap-south-1.amazonaws.com/videos/656cc394e271a453a63709bc/656cd63ce271a453a63709de/6572d141b0fd568a3794f4e6/blob?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2MBJCQ6UG67QLSF5%2F20231208%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20231208T082240Z&X-Amz-Expires=900&X-Amz-Signature=07cb11a9f20deab4f796c28c6520bef59817577f733cde679e0b7833b3a1012b&X-Amz-SignedHeaders=host&x-id=GetObject"
      ><source src="https://qwik-connect.s3.ap-south-1.amazonaws.com/videos/656cc394e271a453a63709bc/656cd63ce271a453a63709de/6572d141b0fd568a3794f4e6/blob?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2MBJCQ6UG67QLSF5%2F20231208%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20231208T082240Z&X-Amz-Expires=900&X-Amz-Signature=07cb11a9f20deab4f796c28c6520bef59817577f733cde679e0b7833b3a1012b&X-Amz-SignedHeaders=host&x-id=GetObject" type="video/ogg"/></video>

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
