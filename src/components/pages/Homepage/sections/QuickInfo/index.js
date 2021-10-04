import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import WithLayout from "components/common/WithLayout";
import DefaultLayout from "./DefaultLayout";
import MobileLayout from "./MobileLayout";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingUsd, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

const items = [
  {
    title: "Idea and Planning",
    subtitle: "Get your idea on paper",
    description:
      "We will work with you to transform your idea through planning",
    icon: () => <FontAwesomeIcon icon={faHandHoldingUsd} />,
  },
  {
    title: "Design and Develop",
    subtitle: "Get your idea off the ground",
    description: "We begin the process of creating the app components",
    icon: () => <FontAwesomeIcon icon={faCalendarAlt} />,
  },
  {
    title: "Go live",
    subtitle: "Make your web app public",
    description:
      "This is the final stage where your app is released into the wild!",
    icon: () => <FontAwesomeIcon icon={faCheck} />,
  },
];

const QuickInfo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <WithLayout>
      <section className="quick-info-section">
        {isMobile ? (
          <MobileLayout data={items} />
        ) : (
          <DefaultLayout data={items} />
        )}
      </section>
    </WithLayout>
  );
};

export default QuickInfo;
