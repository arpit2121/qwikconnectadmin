import { useState, useEffect } from "react";
import { useTheme } from "@mui/material";

const useResponsiveStyles = () => {
  const [responsive, setResponsive] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;

      setResponsive({
        isMobile: innerWidth < 640,
        isTablet: innerWidth >= 640 && innerWidth < 1280,
        isDesktop: innerWidth >= 1280,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [responsive.isMobile, responsive.isDesktop, responsive.isTablet]);

  return responsive;
};

export default useResponsiveStyles;
