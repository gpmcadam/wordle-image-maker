import React from "react";

import { Keyboard } from "app/components";
import { useAppState } from "app/contexts/AppContext";

export default function GameKeyboard() {
  const { dispatch } = useAppState();

  const onKeyPress = (key) => {
    if (key === "Backspace") {
      dispatch({ type: "input_backspace" });
    } else if (key.length === 1) {
      dispatch({ type: "input_key", key });
    }
  };

  return <Keyboard onKeyPress={onKeyPress} />;
}
