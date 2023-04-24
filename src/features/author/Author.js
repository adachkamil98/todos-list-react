import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Title } from "../../common/Section/styled";
import { Item, List } from "../tasks/styled";
import {
  Content,
  FlexContainer,
  FlexItem,
  HandPanPhoto,
  SectionLink,
  StyledTable,
  SubHeader,
  SubHeaderParagraph,
  TableCaption,
  TableData,
  TableHeader,
  TableLink,
  TableRow,
} from "./styled";

import HandpanPhoto from "./Handpan.jpg";

const Author = () => {
  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Kamil Adach"
        body={
          <Content>
            <FlexContainer>
              <FlexItem>
                <Title>O mnie</Title>
                Jestem absolwentem kierunku Globalny Biznes w Szkole Głównej Handlowej w
                Warszawie. <br></br> Pozytywne nastawienie do świata i ludzi powoduje, że
                chętnie uczę się nowych rzeczy i jestem otwarty na różne doświadczenia.
                Swoje obowiązki wykonuję <em>bardzo</em> sumiennie i z zaangażowaniem.
                Wciąż rozwijam swoje umiejętności oraz stale zdobywam wiedzę np. z zakresu
                inwestycji giełdowych oraz zarządzania finansami. <br></br>
                Posługuję się językiem
                <b> angielskim</b> w stopniu zaawansowanym oraz<b> niemieckim</b> i
                <b> hiszpańskim</b> na poziomie podstawowym. Żyję w przekonaniu iż
                umiejętności miękkie oraz językowe są dzisiaj jednymi z kluczowych atutów
                na rynku pracy.
              </FlexItem>
              <FlexItem>
                <Title>Edukacja</Title>
                <List>
                  <Item>
                    Szkoła Muzyczna im. Karola Lipińskiego w Lublinie - specjalizacje:
                    Instrumenty perkusyjne, Fortepian
                  </Item>
                  <Item>
                    Szkoła Główna Handlowa w Warszawie - Licencjat na kierunku Globalny
                    Biznes
                  </Item>
                  <Item>
                    Katolicki Uniwersytet Lubelski - rok nauki na kierunku Hispanistyka
                  </Item>
                </List>
              </FlexItem>
            </FlexContainer>
            <FlexItem>
              <Title>Zainteresowania</Title>
              Interesuje mnie gotowanie, finanse, języki obce, gospodarka, filmy,
              programowanie, granie na instrumentach. W wolnej chwili gram w szachy lub na
              Handpanie.<br></br>Kliknij w link i posłuchaj. Może Tobie też się spodoba.{" "}
              <SectionLink
                href="https://www.youtube.com/watch?v=xk3BvNLeNgw"
                target="_blank"
                rel="noopener"
              >
                Hang massive - Once again{" "}
              </SectionLink>
              <HandPanPhoto src={HandpanPhoto} alt="Muzyk grający na Handpanach" />
              <StyledTable>
                <TableCaption>
                  <b>Moje ulubione utwory</b>
                </TableCaption>

                <TableRow>
                  <TableHeader scope="col" upLeftRounded>Title</TableHeader>
                  <TableHeader scope="col">Artist</TableHeader>
                  <TableHeader scope="col">Released</TableHeader>
                  <TableHeader scope="col">Album</TableHeader>
                  <TableHeader scope="col">Genres</TableHeader>
                  <TableHeader scope="col" upRightRounded>Link</TableHeader>
                </TableRow>
                <TableRow>
                  <TableHeader>Take five</TableHeader>
                  <TableData>Dave Brubeck Quartet</TableData>
                  <TableData>1959</TableData>
                  <TableData>Time Out</TableData>
                  <TableData>Jazz</TableData>
                  <TableData>
                    <TableLink
                      href="https://www.youtube.com/watch?v=vmDDOFXSgAs"
                      target="_blank"
                      rel="noopener"
                    >
                      YouTube
                    </TableLink>
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableHeader>No. 1 in G minor: Allegro molto</TableHeader>
                  <TableData>Johannes Brahms</TableData>
                  <TableData>1869</TableData>
                  <TableData>Hungarian Dances</TableData>
                  <TableData>Classical music</TableData>
                  <TableData>
                    <TableLink
                      href="https://www.youtube.com/watch?v=Pk-33ksxjg0"
                      target="_blank"
                      rel="
                    noopener"
                    >
                      YouTube
                    </TableLink>
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableHeader>Subwoofer</TableHeader>
                  <TableData>SHINSKY x DIMA</TableData>
                  <TableData>2020</TableData>
                  <TableData>Subwoofer</TableData>
                  <TableData>Hip Hop</TableData>
                  <TableData>
                    <TableLink
                      href="https://www.youtube.com/watch?v=k4ZixMZtscc"
                      target="_blank"
                      rel="
                    noopener nofollow"
                    >
                      YouTube
                    </TableLink>
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableHeader>Apocalypse</TableHeader>
                  <TableData>Cigarettes After Sex</TableData>
                  <TableData>2017</TableData>
                  <TableData>Cigarettes After Sex</TableData>
                  <TableData>Alternative/Indie</TableData>
                  <TableData>
                    <TableLink
                      href="https://www.youtube.com/watch?v=sElE_BfQ67s"
                      target="_blank"
                      rel="
                    noopener nofollow"
                    >
                      YouTube
                    </TableLink>
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableHeader>Highway to Hell</TableHeader>
                  <TableData>ACDC</TableData>
                  <TableData>1979</TableData>
                  <TableData bottomLeftRounded>Highway to Hell</TableData>
                  <TableData>Hard Rock, Rock & Roll, Blues Rock</TableData>
                  <TableData>
                    <TableLink
                      href="https://www.youtube.com/watch?v=l482T0yNkeo"
                      target="_blank"
                      rel="
                    noopener nofollow"
                    >
                      YouTube
                    </TableLink>
                  </TableData>
                </TableRow>
              </StyledTable>
            </FlexItem>
            <FlexItem>
              <Title>Plany i marzenia</Title>
              <SubHeader>Plany</SubHeader>
              <SubHeaderParagraph>
                W ciągu najlbiższych kilku miesięcy chcę ukończyć kurs od szkoły
                programowania YouCode i zawodowo zajmować się Frontendem. Z tygodnia na
                tydzień jestem coraz bliżej celu. Gdy będę już programistą, zbuduję drugie
                źródło dochodów z wynajmu nieruchomości. Moim hobby będzie dbanie o zdrowe
                ciało, umysł i duszę oraz tworzenie muzyki na różnych instrumentach oraz z
                wykorzystaniem programów muzycznych. Po kilku latach programowania
                chciałbym zająć się automatyzacją procesów i rozwijać się w tym kierunku.
              </SubHeaderParagraph>
              <SubHeader>Marzenia</SubHeader>
              <SubHeaderParagraph>
                Największym marzeniem, które mam od lat jest doświadczenie życia jako
                mieszkaniec innych krajów. Chciałbym zobaczyć jak żyje się w innej
                kulturze, mając inną mentalność, innych ludzi wokół siebie oraz inną
                przyrodę. Idealne byłoby spędzenie kilku lat w różnych krajach takich jak
                np.:
              </SubHeaderParagraph>
              <List>
                {/* Wyciągnąć plik ze stylami z taskslist na zewnątrz */}
                <Item>
                  <b>Szwajcaria</b>
                </Item>
                <Item>
                  <b>Hiszpania</b>
                </Item>
                <Item>
                  <b>Austria</b>
                </Item>
                <Item>
                  <b>Wielka Brytania</b>
                </Item>
                <Item>
                  <b>Włochy</b>
                </Item>
              </List>
              <SubHeaderParagraph>
                W dalszej przyszłości chciałbym również zobaczyć Amerykę Południową i
                poznać ją od środka. <br></br>Patrząc 20 lat w przód, widzę siebie jako
                stolarza/informatyka utrzymującego swoją rodzinę z działalności firmy
                informatycznej i zajmującego się dla przyjemności wyrobem drewnianych
                dzieł sztuki.
              </SubHeaderParagraph>
            </FlexItem>
          </Content>
        }
      />
    </Container>
  );
};

export default Author;
