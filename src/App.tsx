import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./components/Logo";
import Mail from "./components/Mail";

const Wrapper = styled(motion.div)`
  background: rgb(215, 103, 245);
  background: linear-gradient(
    9deg,
    rgba(215, 103, 245, 1) 0%,
    rgba(255, 181, 248, 1) 52%,
    rgba(255, 216, 146, 1) 100%
  );
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper>
      <Logo />
      <Mail />
    </Wrapper>
  );
}

export default App;
