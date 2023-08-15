import React from 'react'
import styled, { keyframes } from "styled-components";
import iphone from "../assets/images/iphones.png"

const moveUp = keyframes`
100%{
  transform: translateY(0);
}
`;

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AnimatedText = styled.div`
  position: relative;
  overflow:hidden;
  font-size: var(--fontmd);
  height: 90%;

  .tagline{
    font-family: var(--fontB);
    font-size: var(--fontxxl);
    font-weight:900;
  }

  img{
    height: 60%
  }

  .disclaimer{
    margin-bottom: 2rem;
  }

  p, h1, img{
    transform: translateY(3rem);
    animation-name:${moveUp};
    animation-duration: 2.5s;
    animation-timing-function:ease;
    text-align:center;
    animation-fill-mode: forwards;
    // animation-delay: ${(props) => props.delay};
  }
`;



const MainHero = () => {
  return (
    <Section>
      <TextContainer>
        <AnimatedText>
          <p>New</p>
          <h1>Iphone 14</h1>
          <p class="tagline">Wonderfull.</p>
          <p class="disclaimer">From $1099 before trade-in<sup>1</sup> or pay monthly with financing.</p>
          <img src={iphone} alt="Logo" />
        </AnimatedText>
      </TextContainer>
    </Section>
  )
}

export default MainHero