import { alpha, createTheme, darken } from '@mui/material';
import '@mui/lab/themeAugmentation';

const themeColors = {
    primary:'#202020',//black
    secondary: '#3D3ACE',//blue
    teritary: '#F845FC',//purple
    darkpurple: '#23209F',
    grey: '#AAAAAA',
    lightgrey: '#C9C8D3',
    disabled: '#C5C0DB',
    white: '#FFFFFF',
    error: '#F93232',
    success: '#439F6E',
    warning: '#FFB82E',
    strokegrey: '#BDBCDB',
    bgdisabled: '#F4F3FE',
    bghover: '#F6F5FF',
    bgclick: '#E2E1FF',
    strokeerror:'#FFD8D8',
    loading: '#E8E6F8',
    bgvalidation:'#FFFBF4',
    strokevalidation: '#FFEAC1',
    textdisabled: '#A5A5A7',
    fieldtitle: '#9D99AC',
    blue: '#605DEC',
    fieldform: '#F7F7FD',
    fieldtext: '#212121',
    bgerror: '#FFF5F5',
    aliceBlue:'#ECF3FF',
    textGrey:'#8A8894'
};

const colors = {
  layout: {
    general: {
      bodyBg: themeColors.white,
    },
  },
  secondary: {
    lighter: alpha(themeColors.secondary, 0.85),
    light: alpha(themeColors.secondary, 0.85),
    main: themeColors.secondary,
    dark: darken(themeColors.secondary, 0.2)
  },
  primary: {
    lighter: alpha(themeColors.primary, 0.85),
    light: alpha(themeColors.primary, 0.3),
    main: themeColors.primary,
    dark: darken(themeColors.primary, 0.2)
  },
  gold: {
    lighter: alpha(themeColors.gold, 0.85),
    light: alpha(themeColors.gold, 0.3),
    main: themeColors.gold,
    dark: darken(themeColors.gold, 0.2)
  },
  success: {
    lighter: alpha(themeColors.success, 0.85),
    light: alpha(themeColors.success, 0.3),
    main: themeColors.success,
    dark: darken(themeColors.success, 0.2)
  },
  warning: {
    lighter: alpha(themeColors.warning, 0.85),
    light: alpha(themeColors.warning, 0.3),
    main: themeColors.warning,
    dark: darken(themeColors.warning, 0.2)
  },
  error: {
    lighter: alpha(themeColors.error, 0.85),
    light: alpha(themeColors.error, 0.3),
    main: themeColors.error,
    dark: darken(themeColors.error, 0.2)
  },
  info: {
    lighter: alpha(themeColors.info, 0.85),
    light: alpha(themeColors.info, 0.3),
    main: themeColors.info,
    dark: darken(themeColors.info, 0.2)
  },
  drawer:{
    light:alpha(themeColors.drawer, 0.3)
  }
};

const DarkSpacesTheme = createTheme({
  spacing: 4,
  palette: {
    common: {
      black: colors.alpha.black[100],
      white: colors.alpha.white[100],
      gray: colors.alpha.gray[100],
      trueWhite: colors.alpha.trueWhite[100],
      blackFn: (code) => colors.alpha.black[code],
      whiteFn: (code) => colors.alpha.white[code],
      grayFn: (code) => colors.alpha.gray[code],
      trueWhiteFn: (code) => colors.alpha.trueWhite[code],
      drawer:colors.drawer.light

    },
    trueWhite: {
      light: colors.alpha.trueWhite[30],
      main: colors.alpha.trueWhite[100],
      dark: colors.alpha.trueWhite[100]
    },
    white: colors.alpha.white[100],
    primary: {
      light: colors.primary.light,
      main: colors.primary.main,
      dark: colors.primary.dark
    },
    secondary: {
      light: colors.secondary.light,
      main: colors.secondary.main,
      dark: colors.secondary.dark
    },
    gold: {
      light: colors.gold.light,
      main: colors.gold.main,
      dark: colors.gold.dark
    },
    error: {
      light: colors.error.light,
      main: colors.error.main,
      dark: colors.error.dark,
      contrastText: themeColors.trueWhite
    },
    success: {
      light: colors.success.light,
      main: colors.success.main,
      dark: colors.success.dark,
      contrastText: themeColors.trueWhite
    },
    info: {
      light: colors.info.light,
      main: colors.info.main,
      dark: colors.info.dark,
      contrastText: themeColors.trueWhite
    },
    warning: {
      light: colors.warning.light,
      main: colors.warning.main,
      dark: colors.warning.dark,
      contrastText: themeColors.trueWhite
    },
    text: {
      primary: colors.primary.main,
      secondary: colors.primary.dark,
      disabled: colors.alpha.gray[50]
    },
    background: {
      paper: colors.alpha.white[100],
      default: colors.layout.general.bodyBg,      
      bodyBgSecondary: colors.layout.general.bodyBgSecondary     
    },
    action: {
      active: colors.alpha.gray[100],
      hover: colors.primary.lighter,
      hoverOpacity: 0.1,
      selected: colors.alpha.gray[10],
      selectedOpacity: 0.1,
      disabled: colors.alpha.gray[50],
      disabledBackground: colors.alpha.gray[5],
      disabledOpacity: 0.38,
      focus: colors.alpha.gray[10],
      focusOpacity: 0.05,
      activatedOpacity: 0.12
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 860,
      lg: 1280,
      xl: 1840
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
        fontStyle: 'Nunito Sans',
        boxShadow: 'none',
        },
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover'
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: alpha(colors.alpha.gray['100'], 0.95),
          padding: '8px 16px',
          fontSize: 13
        },
        arrow: {
          color: alpha(colors.alpha.gray['100'], 0.95)
        }
      }
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: "Nunito Sans"
      },
    }
  },
  typography: {
    fontFamily: "Nunito Sans",
  },
});

export default DarkSpacesTheme