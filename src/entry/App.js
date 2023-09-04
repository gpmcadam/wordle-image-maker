import React, { useRef, useState } from "react";
import styled from "styled-components";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

import { Game, GameKeyboard, Controls, Info } from "app/containers";
import { useAppState } from "app/contexts/AppContext";
import { getTheme, ThemeProvider, GlobalStyle } from "app/theme";

const Dummy = styled.div`
  flex: 1;
  display: none;

  @media only screen and (min-width: 600px) {
    display: block;
  }
`;

const AdContainer = styled.div`
  flex: 1;
  display: none;

  @media only screen and (min-width: 600px) {
    display: block;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.gameMaxWidth};
`;

const GameContainer = styled.div`
  width: 350px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  font-size: 14px;

  @media (min-width: 400px) {
    font-size: 26px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.headerHeight};
  border-bottom: 1px solid ${({ theme }) => theme.colorTone4};
`;

function Ad() {
  const raw = `<script type="text/javascript">
	atOptions = {
		'key' : '5f300c757e4323244d89012b4e4ea537',
		'format' : 'iframe',
		'height' : 300,
		'width' : 160,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitablecreativeformat.com/5f300c757e4323244d89012b4e4ea537/invoke.js"></scr' + 'ipt>');
</script>`;

  return <AdContainer dangerouslySetInnerHTML={{ __html: raw }} />;
}

export default function App() {
  const {
    state: { themeName },
  } = useAppState();
  const [showWatermark, setShowWatermark] = useState(false);
  const ref = useRef();

  const theme = getTheme(themeName);

  const onShare = async () => {
    setShowWatermark(true);
    const img = await domtoimage.toBlob(ref.current);
    saveAs(img, "wordle.png");
    setShowWatermark(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <Dummy>&nbsp;</Dummy>
        <Container>
          <Header>
            <Info />
            <Title>WORDLE MAKER</Title>
            <Controls onShare={onShare} />
          </Header>
          <GameContainer>
            <Game forwardRef={ref} showWatermark={showWatermark} />
          </GameContainer>
          <GameKeyboard />
        </Container>
        <Ad />
      </Main>
    </ThemeProvider>
  );
}
