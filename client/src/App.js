import { CssBaseline } from "@mui/material";
import { Navigation } from "./components";
import { Container, Box } from "@mui/material";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Settings, Recommendations } from "./pages/index";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navigation />
      <Box sx={{ backgroundColor: (theme) => theme.palette.grey[100] }}>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="settings" element={<Settings />}></Route>
            <Route path="recommendations" element={<Recommendations />}></Route>
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  );
};

export default App;
