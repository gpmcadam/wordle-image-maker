import React from "react";
import PropTypes from "prop-types";

import IconCloudDownloadSvg from "./cloud-download-outline.svg";
import IconInformationCircleSvg from "./information-circle-outline.svg";
import IconBackspaceSvg from "./backspace-outline.svg";
import IconCloseSvg from "./close-outline.svg";

const DEFAULT_SIZE = { width: 20, height: 20 };

const Icons = {
  close: IconCloseSvg,
  backspace: IconBackspaceSvg,
  info: IconInformationCircleSvg,
  download: IconCloudDownloadSvg,
};

export default function Icon({ icon }) {
  const IconComponent = Icons[icon];

  if (!IconComponent) {
    throw new Error(`No such icon: ${icon}`);
  }

  return <IconComponent {...DEFAULT_SIZE} />;
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};
