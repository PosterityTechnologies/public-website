import React from "react";
import classnames from "classnames";
import Link from "@material-ui/core/Link";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons/faFile";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons/faFileAlt";
import { faFileWord } from "@fortawesome/free-regular-svg-icons/faFileWord";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons/faFilePdf";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";

export const TYPES = {
  WORD: "WORD",
  PDF: "PDF",
  FILE: "FILE",
  FILEALT: "FILEALT",
  LINK: "LINK",
};

export const ICONS = {
  [TYPES.WORD]: <FontAwesomeIcon icon={faFileWord} />,
  [TYPES.PDF]: <FontAwesomeIcon icon={faFilePdf} />,
  [TYPES.FILE]: <FontAwesomeIcon icon={faFile} />,
  [TYPES.FILEALT]: <FontAwesomeIcon icon={faFileAlt} />,
  [TYPES.LINK]: <FontAwesomeIcon icon={faGlobe} />,
};

export const ItemLink = ({ title, source, type }) => {
  return (
    <div className="item-link">
      <Link href={source} onClick={(e) => e.preventDefault()}>
        <div
          className={classnames(
            "link-icon",
            type && `icon-${TYPES[type].toLowerCase()}`
          )}
        >
          {ICONS[type]}
        </div>
        <div className="link-title">{title}</div>
      </Link>
    </div>
  );
};
