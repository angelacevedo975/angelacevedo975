import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import mainTheme from "./themes/MainTheme";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="*" element={<Navigate to="/home" />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
