import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  font-family: inherit;
  font-weight: bold;
  border: 0;
  padding: 0;
  margin: 0 6px 0 0;
  height: 58px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background-color: ${({ theme }) => theme.keyBg};
  color: ${({ theme }) => theme.keyTextColor};
  flex: ${({ large }) => (large ? "1.5" : "1")};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
`;

export default function KeyboardKey({ children, large = false, onKeyPress }) {
  const onClick = (e) => {
    e.preventDefault();
    onKeyPress();
  };

  return (
    <Button large={large} onClick={onClick}>
      {children}
    </Button>
  );
}

KeyboardKey.propTypes = {
  children: PropTypes.node,
  large: PropTypes.bool,
  onKeyPress: PropTypes.func.isRequired,
};
