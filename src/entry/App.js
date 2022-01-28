import React, { useRef, useState } from "react";
import styled from "styled-components";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

import { Game, GameKeyboard, Controls, Info } from "app/containers";

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
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
  font-size: 26px;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #d3d6da;
`;

export default function App() {
  const [showWatermark, setShowWatermark] = useState(false);
  const ref = useRef();

  const onShare = async () => {
    setShowWatermark(true);
    const img = await domtoimage.toBlob(ref.current);
    saveAs(img, "wordle.png");
    setShowWatermark(false);
  };

  return (
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
  );
}
