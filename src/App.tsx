import ThemeProvider from "./components/context/theme-provider";
import RootRoutes from "./routes/root-routes";
import { Toaster } from "./components/ui/sonner";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <RootRoutes />
      <Toaster />
    </ThemeProvider>
  );
};

export default App;
