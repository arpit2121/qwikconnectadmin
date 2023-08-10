import { useState, useEffect } from "react";
import { useTheme } from "@mui/material";

const useResponsiveStyles = () => {
  const [responsive, setResponsive] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isRandom: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
console.log('inner',innerWidth)
      setResponsive({
        isMobile: innerWidth < 640,
        isTablet: innerWidth >= 640 && innerWidth < 1280,
        isRandom: innerWidth >=  640 && innerWidth <950,
        isDesktop: innerWidth >= 1280,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [responsive.isMobile, responsive.isDesktop, responsive.isTablet,responsive.isRandom]);

  return responsive;
};

export default useResponsiveStyles;
