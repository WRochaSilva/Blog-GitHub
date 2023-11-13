import { HeaderContainer, HeaderContent } from "./styles";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} />
        <text>GITHUB BLOG</text>
      </HeaderContent>
    </HeaderContainer>
  );
};
