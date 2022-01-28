import React, { createContext, useReducer, useContext } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import {
  MAX_X,
  MAX_Y,
  DEFAULT_GRID,
  calculateMatches,
  decrementCursor,
  incrementCursor,
} from "app/helpers/game";

const AppStateContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "input_key": {
      if (state.cursor.y >= MAX_Y && state.cursor.x > MAX_X) {
        return {
          ...state,
          matches: calculateMatches(_.cloneDeep(state.words)),
        };
      }

      const newWords = _.cloneDeep(state.words);
      newWords[state.cursor.y][state.cursor.x] = action.key;

      return {
        ...state,
        words: newWords,
        cursor: incrementCursor(state.cursor.x, state.cursor.y),
        matches: calculateMatches(_.cloneDeep(newWords)),
      };
    }

    case "input_backspace": {
      const newCursor = decrementCursor(state.cursor.x, state.cursor.y);
      const newWords = _.cloneDeep(state.words);

      newWords[newCursor.y][newCursor.x] = "";

      return {
        ...state,
        words: newWords,
        cursor: newCursor,
        matches: calculateMatches(_.cloneDeep(newWords)),
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function AppStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    words: DEFAULT_GRID,
    matches: DEFAULT_GRID,
    cursor: { x: 0, y: 0 },
  });
  const value = { state, dispatch };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

AppStateProvider.propTypes = {
  children: PropTypes.node,
};

function useAppState() {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppStateProvider");
  }
  return context;
}

export { AppStateProvider, useAppState };
