import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Tile } from "app/components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const GridOuter = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const GridContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colorBackground};
  flex-direction: column;
  gap: 4px;
`;

const Watermark = styled.div`
  background: ${({ theme }) => theme.colorBackground};
  font-family: monospace;
  text-align: center;
  font-weight: bold;
  font-size: 10px;
`;

export default function Grid({
  forwardRef,
  words = [],
  matches = [],
  showWatermark,
}) {
  return (
    <GridOuter ref={forwardRef}>
      <GridContainer>
        {showWatermark && <Watermark>wordle.gary.mcad.am</Watermark>}
        {words.map((row, i) => (
          <Row key={`row-${i}`}>
            {row.map((col, j) => (
              <Tile
                key={`${i}-${j}-${col}`}
                letter={col}
                match={matches[i][j]}
              />
            ))}
          </Row>
        ))}
      </GridContainer>
    </GridOuter>
  );
}

Grid.propTypes = {
  forwardRef: PropTypes.object,
  words: PropTypes.array.isRequired,
  matches: PropTypes.array.isRequired,
  showWatermark: PropTypes.bool,
};
