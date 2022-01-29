import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon, Button } from "app/components";
import { useAppState } from "app/contexts/AppContext";

const ControlsContainer = styled.nav`
  display: flex;
  flex-direction: row;
`;

export default function Controls({ onShare }) {
  const {
    state: { themeName },
    dispatch,
  } = useAppState();

  const onToggleTheme = () => {
    dispatch({ type: "toggle_theme" });
  };

  return (
    <ControlsContainer>
      <Button onClick={onToggleTheme} title="Toggle Theme">
        {themeName === "day" ? <Icon icon="moon" /> : <Icon icon="sunny" />}
      </Button>
      <Button onClick={onShare} title="Download Image of Grid">
        <Icon icon="download" />
      </Button>
    </ControlsContainer>
  );
}

Controls.propTypes = {
  onShare: PropTypes.func,
};
