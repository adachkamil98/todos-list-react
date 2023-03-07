import { MainHeader, Title } from "./styled.js";

const Header = ({ title }) => (
  <MainHeader>
    <Title>
      {title}
    </Title>
  </MainHeader>
);

export default Header;