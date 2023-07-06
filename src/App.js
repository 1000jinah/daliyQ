import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "screens/main";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
