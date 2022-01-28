import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Grid } from "app/components";
import { useAppState } from "app/contexts/AppContext";

export default function Game({ forwardRef, showWatermark }) {
  const {
    state: { words, matches },
    dispatch,
  } = useAppState();

  const onKeyPress = (e) => {
    const key = e.key.toUpperCase();
    const modified = e.metaKey || e.altKey || e.ctrlKey;

    if (e.which === 8) {
      e.preventDefault();
      dispatch({ type: "input_backspace" });
      return;
    }

    if (key.length > 1 || !/[A-Z]/.test(key) || modified) {
      return;
    }

    e.preventDefault();
    dispatch({ type: "input_key", key });
  };

  useEffect(() => {
    document.addEventListener("keyup", onKeyPress);
    return () => {
      document.removeEventListener("keyup", onKeyPress);
    };
  }, [onKeyPress]);

  return (
    <Grid
      forwardRef={forwardRef}
      words={words}
      matches={matches}
      showWatermark={showWatermark}
    />
  );
}

Game.propTypes = {
  forwardRef: PropTypes.object,
  showWatermark: PropTypes.bool,
};
