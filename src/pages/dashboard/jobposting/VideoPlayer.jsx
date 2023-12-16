import React, { useEffect, useRef, useState } from "react";
import VideoBackIcon from "../../../components/icons/VideoBackIcon";
import VideoForwardIcon from "../../../components/icons/VideoForwardIcon";
import VideoPlayIcon from "../../../components/icons/VideoPlayIcon";
import "./videoPlayer.style.css";
import useResponsiveStyles from "../../../utils/MediaQuery";
import { Slider } from "@mui/material";
import VolumeIcon from "../../../components/icons/VolumeIcon";
import styled from "styled-components";
import thumbnail from "../../../assets/videoThumbnail.png";
import { Forward5Rounded, Replay5Rounded } from "@mui/icons-material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { useSelector } from "react-redux";
import VideoPauseIcon from "../../../components/icons/VideoPauseIcon";

const CustomSoundBar = styled(Slider)(({ theme }) => ({
  "& .MuiSlider-thumb": {
    display: "none",
  },
  "& .MuiSlider-root": {
    "@media (pointer: coarse)": {
      padding: "0px !important",
      background: "red",
    },
  },
  "& .MuiSlider-track": {
    backgroundColor: "#F845FC", //color of track
    border: "none",
    // width:'2%',
  },
  "& .MuiSlider-rail": {
    color: "#C4C4C4", ////color of the slider outside teh area between thumbs
  },
}));
const CustomTimeBar = styled(Slider)(({ theme }) => ({
  "& .MuiSlider-thumb": {
    display: "none",
  },
  "& .MuiSlider-root": {
    "@media (pointer: coarse)": {
      padding: "0px",
    },
    padding: "0px !important",
  },
  "& .MuiSlider-track": {
    backgroundColor: "#AA55FF", //color of track
    border: "none",
  },
  "& .MuiSlider-rail": {
    color: "#FFFFFF", ////color of the slider outside teh area between thumbs
  },
  "& .Mui-active": {
    background: "red", ////color of the slider outside teh area between thumbs
  },
}));
const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [play, setPlay] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControlers, setShowControllers] = useState(true);
  const [showBackArrow, setShowBackArrow] = useState(false);
  const [showFwdArrow, setShowFwdArrow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [drag, setDrag] = useState(false);
  const [volume, setVolume] = useState(100);
  const [volumeIconType, setVolumeIconType] = useState("default");
  const responsive = useResponsiveStyles();

  const [isVolumeHovered, setIsVolumeHovered] = useState(false);

  const handleVolumeMouseEnter = () => {
    setIsVolumeHovered(true);
  };

  const handleVolumeMouseLeave = () => {
    setIsVolumeHovered(false);
  };

  const vid = document.getElementById("video1");

  const videoRef = useRef(null);

  let enterTimeOut;
  let exitTimeOut;

  const fastForward = () => {
    if (enterTimeOut) clearTimeout(enterTimeOut);
    setShowFwdArrow(true);
    videoRef.current.currentTime += 5;
    enterTimeOut = setTimeout(() => {
      setShowFwdArrow(false);
    }, 1000);
  };

  // const { videoLink } = useSelector((state) => state.common);
  const {videoLink, currQuestion} = useSelector((state)=> state.interviewee)


  const revert = () => {
    if (exitTimeOut) clearTimeout(exitTimeOut);
    setShowBackArrow(true);
    videoRef.current.currentTime -= 5;
    exitTimeOut = setTimeout(() => {
      setShowBackArrow(false);
    }, 1000);
  };



  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      setVideoTime(vid.duration);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  

  const interval = setInterval(function () {
    // console.log('running')
    if (videoRef.current?.currentTime == videoTime) clearInterval(interval);
    setCurrentTime(videoRef.current?.currentTime);
  }, 1000);

  useEffect(() => {
    !drag && setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, [currentTime, drag]);

  useEffect(() => {
    if (!playing) setPlay(true);
    else setPlay(false);
  }, [playing]);

  const handleVolumeChange = (vol) => {
    setVolume(vol.target.value);
    console.log(vol.target.value);
    setVolumeIconType(
      vol.target.value == 0
        ? "mute"
        : vol.target.value < 50
        ? "lowSound"
        : "default"
    );
    videoRef.current.volume = vol.target.value / 100;
  };

  const handleTimerDrag = (vol) => {
    setDrag(true);
    if (!videoTime) setVideoTime(vid.duration);
    setProgress(vol.target.value);
    videoRef.current.currentTime = (vid.duration * progress) / 100;
    setCurrentTime((vid.duration * progress) / 100);
  };

  const onVideoMouseEnter = () => {
    setShowControllers(true);
  };
  const onVideoMouseLeave = () => {
    if (!play) setShowControllers(false);
  };
  const onClickVolume = () => {
    if (volume == 0) {
      setVolume(100);
      setVolumeIconType("default");
      videoRef.current.volume = 100;
    } else {
      setVolume(0);
      setVolumeIconType("mute");
      videoRef.current.volume = 0;
    }
  };
  const onFullScreen = () => {
    videoRef.current.requestFullscreen();
  };

  function myFunction1() {
    const vid = document.getElementById("video1");
     videoRef.current.play()
     setVideoTime(vid?.duration);  
  }

  useEffect(() => {
    if (vid) myFunction1();

    // Update volume icon type based on the initial volume value
    setVolumeIconType(volume === 0 ? "mute" : volume < 50 ? "lowSound" : "default");
  }, [videoLink, vid]);

  useEffect(() => {
    if (vid) myFunction1();
  }, [videoLink, vid]);

  return (
    <div
      onMouseEnter={()=>{onVideoMouseEnter(), handleVolumeMouseEnter()}}
      onMouseLeave={()=>{onVideoMouseLeave(), handleVolumeMouseLeave()}}
      className="outerDiv"
      style={{ height: responsive.isMobile ? "11.06rem" : "21.28rem" }}
    >
      <video
        id="video1"
        // style={{ objectFit: responsive.isMobile ? "contain" : "cover" }}
        ref={videoRef}
        poster={thumbnail}
        className="video"
        src={videoLink}
      ></video>
      <div
        className="controlsContainer"
        style={{ opacity: showControlers ? 1 : 0 }}
      >
        <div className="progressbarDiv">
          <p className="controlsTime">
            {Math.floor(currentTime / 60) +
              ":" +
              ("0" + Math.floor(currentTime % 60)).slice(-2)}
          </p>

          <CustomTimeBar
            onChangeCommitted={() => setDrag(false)}
            sx={{
              width: "80%",
              padding: "0px !important",
              margin: "0px 6px",
              height: "8px",
            }}
            aria-label="Progress"
            value={progress}
            onChange={handleTimerDrag}
          />
          <p className="controlsTime">
            {Math.floor(videoTime / 60) +
              ":" +
              ("0" + Math.floor(videoTime % 60)).slice(-2)}
          </p>
        </div>
        <div className="controls">
          <span></span>
          <div className="playIcons">
            <VideoBackIcon className="controllerIcon" onClick={revert} />
            {!playing ? (
              <VideoPlayIcon
                className="controllerIcon"
                onClick={() => videoHandler("play")}
              />
            ) : (
              <VideoPauseIcon
                className="controllerIcon"
                onClick={() => videoHandler("pause")}
              />
            )}
            <VideoForwardIcon
              className="controllerIcon"
              onClick={fastForward}
            />
          </div>
          <FullscreenIcon
            sx={{ color: "white", cursor: "pointer" }}
            onClick={onFullScreen}
          />
        </div>
      </div>

      {volume > -1 && isVolumeHovered && (
      <div
        className="volumeController"
        style={{
          opacity: showControlers ? 1 : 0,
          right: responsive.isMobile ? "0.37rem" : "1.37rem",
        }}
      >
        {/* <CustomSoundBar
          sx={{ height: "70%", padding: "0px !important", width: "60%" }}
          orientation="vertical"
          aria-label="Volume"
          value={volume}
          onChange={handleVolumeChange}
        />
        <VolumeIcon
          type={volumeIconType}
          onClick={onClickVolume}
          height={responsive.isMobile ? 12 : 15}
          width={responsive.isMobile ? 12 : 15}
        /> */}
         {/* {volume > 0 && isVolumeHovered && ( */}
           <>
              <CustomSoundBar
                sx={{ height: "70%", padding: "0px !important", width: "60%" }}
                orientation="vertical"
                aria-label="Volume"
                value={volume}
                onChange={handleVolumeChange}
              />
              <VolumeIcon
                type={volumeIconType}
                onClick={onClickVolume}
                height={responsive.isMobile ? 12 : 15}
                width={responsive.isMobile ? 12 : 15}
              />
            </>
         {/* )} */}
      </div>
          )}
      <div className={"timeForwardBackwardDiv"}>
        <div
          className="arrowContainer"
          style={{ opacity: showBackArrow ? 1 : 0 }}
        >
          <Replay5Rounded sx={{ fontSize: "3rem", color: "white" }} />
        </div>
        <div
          className="arrowContainer"
          style={{ opacity: showFwdArrow ? 1 : 0 }}
        >
          <Forward5Rounded sx={{ fontSize: "3rem", color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
