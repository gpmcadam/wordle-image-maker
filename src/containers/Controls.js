import React from "react";
import PropTypes from "prop-types";

import { Icon, Button } from "app/components";

export default function Controls({ onShare }) {
  return (
    <Button onClick={onShare} title="Download Image of Grid">
      <Icon icon="download" />
    </Button>
  );
}

Controls.propTypes = {
  onShare: PropTypes.func,
};
