import {HeaderSection, Header, Title} from "./styled.js"

const Section = ({ title, body, extraHeaderContent }) => (
  <HeaderSection>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    {body}
  </HeaderSection>
);

export default Section;
