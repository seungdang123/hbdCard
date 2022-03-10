import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";

// framer motion variants
const mailVariants = {
  start: { y: 3000 },
  end: {
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 6,
      duration: 3,
      mass: 0.5,
      delayChildren: 7,
    },
  },
};
const bounce = {
  start: { y: 0 },
  end: {
    y: -30,
    transition: {
      repeat: Infinity,
      duration: 1,
      repeatType: "reverse",
    },
  },
};
const show = {
  start: { opacity: 0 },
  end: { opacity: 1, transition: { duration: 1 } },
};

// Components
const MailIcon = styled(motion.div)`
  cursor: pointer;
`;
const MailWrapper = styled(motion.div)`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Text = styled(motion.h1)`
  font-weight: 100;
  margin-top: 50px;
  font-size: 25px;
  color: #8a57d6;
`;

const click = (event) => {
  console.log(event);
};

const Mail = () => {
  const onClick = () => {
    setShowLetter(!showLetter);
  };

  const [showLetter, setShowLetter] = useState(false);
  console.log(showLetter);
  return (
    <MailWrapper variants={mailVariants} initial={"start"} animate={"end"}>
      <MailIcon variants={bounce} whileHover={{ scale: 1.2 }} onClick={onClick}>
        <FontAwesomeIcon icon={faEnvelope} size="5x" color="white" />
      </MailIcon>
      <Text variants={show}>Click me!</Text>
    </MailWrapper>
  );
};

export default Mail;
