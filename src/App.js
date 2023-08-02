import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Lay from "./components/Lay/Lay";
import Routes from "./Routes";
import { Global } from "./styles/globals";
import { darkTheme, lightTheme } from "./styles/themes";
import "bootstrap/dist/css/bootstrap.min.css";

// Create a context to manage the theme
export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;
  const queryClient = new QueryClient();

  // Set default query options
  queryClient.setDefaultOptions({
    queries: {
      // Add specific options if needed
    },
  });

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <Global />
        <Helmet>
          <title>Star Wars</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Lay>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </Lay>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
