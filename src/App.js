import AppRouter from "./router/AppRouter";
import theme from "./components/globalStyles/theme";
import { ThemeProvider } from "styled-comonents";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
