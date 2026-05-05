import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Navbar />
        <Home />
        <Services />
        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;
