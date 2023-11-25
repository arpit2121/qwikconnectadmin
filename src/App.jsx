import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router/AppRoutes";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";


const App = () => {
  return (
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
  );
};

export default App;