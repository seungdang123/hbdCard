import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Paper = styled(motion.div)`
  position: relative;
  display: flex;
  padding: 50px;
  width: 400px;
  height: 600px;
  background-color: whitesmoke;
  border-radius: 30px;
`;

const Button = styled.button`
  text-align: center;
  position: absolute;
  font-size: 20px;
  width: 40px;
  height: 40px;
  bottom: 30px;
  right: 30px;
  background-color: "#fff";
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: #dc143c;
    transform: scale(1.2);
  }
`;

interface IProps {
  back: () => void;
}

const paperMotion = {
  start: { opacity: 0, bottom: -1000 },
  end: { opacity: 1, transition: { duration: 1 }, bottom: 0 },
  exit: { opacity: 0, bottom: -1000, transition: { durantion: 1 } },
};

const Letter = (props: IProps) => {
  const [visible, setVisible] = useState(true);
  return (
    <AnimatePresence>
      {visible && (
        <Paper
          variants={paperMotion}
          initial={"start"}
          animate={"end"}
          exit={"exit"}
        >
          <p>Text</p>
          <Button
            onClick={() => {
              setVisible(false);
              setTimeout(() => props.back(), 500);
            }}
          >
            ↩︎
          </Button>
        </Paper>
      )}
    </AnimatePresence>
  );
};

export default Letter;
