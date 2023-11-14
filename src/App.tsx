import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./Components/Header";
import { Profile } from "./Components/Profile";
import { SearchInput } from "./Components/SearchInput";
import { Card } from "./Components/Card";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Profile />
      <SearchInput />
      <Card />
    </ThemeProvider>
  );
};
