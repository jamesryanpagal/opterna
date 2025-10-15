import ThemeProvider from "./components/context/theme-provider";
import ComponentsOverview from "./pages/ComponentsOverview";

const App = () => {
  return (
    <ThemeProvider>
      <ComponentsOverview />
    </ThemeProvider>
  );
};

export default App;
