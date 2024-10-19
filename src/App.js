import { ThemeProvider } from "@mui/material/styles";
// import { CssBaseline } from "@mui/material";

import { Layout } from "./layout";
import theme from "./assets/theme";
import "./assets/fonts/index.css";
import "./App.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Layout />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
