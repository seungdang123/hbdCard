import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";
import ConfettiExplosion from "@reonomy/react-confetti-explosion";
import Letter from "./Letter";

// framer motion variants
const mailVariants = {
  start: { y: 1000 },
  end: {
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 6,
      duration: 4,
      mass: 0.5,
      damping: 20,
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
  end: { opacity: 1, transition: { duration: 1, delayChildren: 1 } },
};

// Components
const MailIcon = styled(motion.div)`
  cursor: pointer;
  text-align: center;
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
  font-weight: 800;
  margin-top: 50px;
  font-size: 17px;
  color: white;
`;
const ReDisplay = styled(motion.div)``;

const Mail = () => {
  const onClick = () => {
    setIsExploding(!isExploding);
  };

  const [isExploding, setIsExploding] = useState(false);
  return (
    <MailWrapper variants={mailVariants} initial={"start"} animate={"end"}>
      {isExploding && (
        <ConfettiExplosion
          force={0.4}
          duration={3000}
          particleCount={70}
          floorHeight={1000}
          floorWidth={750}
        />
      )}
      {!isExploding ? (
        <>
          <ReDisplay variants={show} initial={"start"} animate={"end"}>
            <MailIcon
              variants={bounce}
              whileHover={{ scale: 1.1 }}
              onClick={onClick}
            >
              <FontAwesomeIcon icon={faEnvelope} size="5x" color="white" />
            </MailIcon>
          </ReDisplay>
          <Text variants={show}>Click me!</Text>
        </>
      ) : (
        <Letter back={onClick} isVisible={isExploding} />
      )}
    </MailWrapper>
  );
};
export default Mail;
