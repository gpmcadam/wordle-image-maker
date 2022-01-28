import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Icon, KeyboardKey, KeyboardSpacer } from "app/components";

const KeyboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  height: 200px;
`;

const KeyboardRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

export default function Keyboard({ onKeyPress }) {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    [
      (key) => <KeyboardSpacer key={key} />,
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      (key) => <KeyboardSpacer key={key} />,
    ],
    [
      (key) => <KeyboardSpacer key={key} />,
      (key) => <KeyboardSpacer key={key} />,
      "Z",
      "X",
      "C",
      "V",
      "B",
      "N",
      "M",
      { icon: <Icon icon="backspace" />, key: "Backspace" },
    ],
  ];

  const renderItem = (item, i) => {
    switch (typeof item) {
      case "function":
        return item(i);

      case "object":
        return (
          <KeyboardKey key={i} large onKeyPress={() => onKeyPress(item.key)}>
            {item.icon}
          </KeyboardKey>
        );

      case "string":
      default:
        return (
          <KeyboardKey key={i} onKeyPress={() => onKeyPress(item)}>
            {item}
          </KeyboardKey>
        );
    }
  };

  return (
    <KeyboardContainer>
      {rows.map((row, i) => (
        <KeyboardRow key={i}>
          {row.map((item, i) => renderItem(item, i))}
        </KeyboardRow>
      ))}
    </KeyboardContainer>
  );
}

Keyboard.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
};
