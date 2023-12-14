import { useMediaQuery } from "react-responsive";

const useResponsiveStyles = () => {

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

  return responsive;
};

export default useResponsiveStyles;
