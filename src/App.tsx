import ThemeProvider from "./components/context/theme-provider";
import RootRoutes from "./routes/root-routes";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <RootRoutes />
    </ThemeProvider>
  );
};

export default App;
