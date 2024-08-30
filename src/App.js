import { ThemeProvider } from "@mui/material/styles";
// import { CssBaseline } from "@mui/material";

import { Layout } from "./layout";
import theme from "./assets/theme";
import "./assets/fonts/index.css";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
