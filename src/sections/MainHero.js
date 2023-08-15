import React, { useRef, useLayoutEffect } from "react";
import styled, { keyframes } from "styled-components";
import iphone from "../assets/images/iphones.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// const moveUp = keyframes`
// 100%{
//   transform: translateY(0);
// }
// `;

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
	overflow: hidden;
	font-size: var(--fontmd);
	height: 90%;

	.tagline {
		font-family: var(--fontB);
		font-size: var(--fontxxl);
		font-weight: 900;
	}

	img {
		height: 60%;
	}

	.disclaimer {
		margin-bottom: 2rem;
	}

	p,
	h1,
	img {
		justify-content: center;
		align-items: center;
		text-align: center;
		// transform: translateY(3rem);

		// animation-duration: 2.5s;
		// animation-timing-function: ease;

		// animation-fill-mode: forwards;
	}
`;

const MainHero = () => {
	const sectioneRef = useRef(null);

	gsap.registerPlugin(ScrollTrigger);
	const sectionRef = useRef(null);

	useLayoutEffect(() => {
		let Elem = sectionRef.current;

		let trigger = ScrollTrigger.create({
			trigger: Elem,
			start: "top top",
			pin: true,
			pinSpacing: false,
		});

		return () => {
			if (trigger) trigger.kill();
		};
	}, []);

	return (
		<Section ref={sectionRef}>
			<TextContainer>
				<AnimatedText>
					<p>New</p>
					<h1>Iphone 14 Pro</h1>
					<p class='tagline'>Pro. Beyond.</p>
					<p class='disclaimer'>
						From $1399 before trade-in<sup>1</sup> or pay monthly with
						financing.
					</p>
					<img
						src={iphone}
						alt='Logo'
					/>
				</AnimatedText>
			</TextContainer>
		</Section>
	);
};

export default MainHero;
