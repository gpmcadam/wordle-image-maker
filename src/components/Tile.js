import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const TileContainer = styled.div`
  display: flex;
  height: 52px;
  width: 52px;
  border: 2px solid ${({ theme }) => theme.colorTone4};
  background: ${({ theme }) => theme.colorBackground};
  color: ${({ theme }) => theme.tileTextColor};
  font-size: 1.2rem;
  @media (min-width: 400px) {
    height: 62px;
    width: 62px;
    font-size: 2rem;
  }
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  ${(props) => {
    switch (props.match) {
      case "full":
        return css`
          border-color: ${({ theme }) => theme.colorCorrect};
          background: ${({ theme }) => theme.colorCorrect};
        `;
      case "partial":
        return css`
          border-color: ${({ theme }) => theme.colorPresent};
          background: ${({ theme }) => theme.colorPresent};
        `;
      case "miss":
        return css`
          border-color: ${({ theme }) => theme.colorAbsent};
          background: ${({ theme }) => theme.colorAbsent};
        `;
      case "input":
        return css`
          color: ${({ theme }) => theme.tileTextColorInput};
          border-color: ${({ theme }) => theme.tileBorderColorInput};
        `;
    }
  }}
`;

export default function Tile({ letter, match }) {
  return (
    <TileContainer match={match ? match : letter ? "input" : ""}>
      {letter}
    </TileContainer>
  );
}

Tile.propTypes = {
  letter: PropTypes.string.isRequired,
  match: PropTypes.string,
};
