import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router/AppRoutes";
import PdfViewer from "./components/pdf-viewer/PdfViewer";


const App = () => {
  console.log("rea",process.env.NODE_ENV)
  console.log("rea",import.meta.env.REACT_APP_API_ENDPOINT_URL)
  return (
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
  );
};

export default App;