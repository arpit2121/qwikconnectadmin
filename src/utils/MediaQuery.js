import { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "react-responsive";

const useResponsiveStyles = () => {
  // const [responsive, setResponsive] = useState({
  //   isMobile: false,
  //   isTablet: false,
  //   isDesktop: false,
  //   isRandom: false,
  // });
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-width: 1224px)",
  // });
  const isDesktop = useMediaQuery({ minWidth: 1280});
  const isTablet = useMediaQuery({ minWidth: 640 ,maxWidth:1280});
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isRandom = useMediaQuery({ minWidth: 640 ,maxWidth:950});

  const responsive = {
    isDesktop,
    isTablet,
    isMobile,
    isRandom,
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     const { innerWidth } = window;
  //     setResponsive({
  //       isMobile: innerWidth < 640,
  //       isTablet: innerWidth >= 640 && innerWidth < 1280,
  //       isRandom: innerWidth >=  640 && innerWidth <950,
  //       isDesktop: innerWidth >= 1280,
  //     });
  //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [responsive.isMobile, responsive.isDesktop, responsive.isTablet,responsive.isRandom]);

  return responsive;
};

export default useResponsiveStyles;
