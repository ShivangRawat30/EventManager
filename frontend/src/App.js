import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import LoginPage from "./scenes/loginPage/index";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material";

function App() {
  const mode = useSelector((state) => state.mode);
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            /> */}
          {/* <Route
            path="/profile/:userId"
            element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
