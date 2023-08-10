import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { StylesProvider } from '@mui/styles';

const ThemeProviderWrapper = ({children}) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;