import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Svg = styled.svg`
  width: 100px;
  height: 100px;
  path {
    stroke: white;
    stroke-width: 5;
  }
`;

const svg = {
  start: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  end: {
    fill: "rgba(255, 255, 255, 1)",
    pathLength: 1,
  },
};

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Logo = () => {
  const [isVisible, setIsVisible] = useState(true);

  setTimeout(() => {
    setIsVisible(false);
  }, 4000);
  return (
    <AnimatePresence>
      {isVisible && (
        <Wrapper
          exit={{ x: 500, y: -500, scale: 0.1, opacity: 0 }}
          transition={{ default: { duration: 2 } }}
        >
          <Svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <motion.path
              height="auto"
              d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
              variants={svg}
              initial={"start"}
              animate={"end"}
              transition={{
                default: {
                  duration: 2,
                },
                fill: { duration: 1, delay: 2 },
              }}
            ></motion.path>
          </Svg>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

export default Logo;
