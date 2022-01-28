import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const TileContainer = styled.div`
  display: flex;
  height: 62px;
  width: 62px;
  border: 2px solid #d3d6da;
  background: white;
  font-size: 2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  ${(props) => {
    switch (props.match) {
      case "full":
        return css`
          border-color: #6aaa64;
          background: #6aaa64;
          color: white;
        `;
      case "partial":
        return css`
          background: #c9b458;
          color: white;
          border-color: #c9b458;
        `;
      case "miss":
        return css`
          border-color: #787c7e;
          background: #787c7e;
          color: white;
        `;
      case "input":
        return css`
          border-color: #1a1a1b;
        `;
      default:
        return css`
          background: white;
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
