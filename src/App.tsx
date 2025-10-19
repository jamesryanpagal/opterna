import ThemeProvider from "./components/context/theme-provider";
import RootRoutes from "./routes/root-routes";

const App = () => {
  return (
    <ThemeProvider>
      <RootRoutes />
    </ThemeProvider>
  );
};

export default App;
