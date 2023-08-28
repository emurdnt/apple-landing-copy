import React from "react";
import styled, { keyframes } from "styled-components";
import iphone from "../assets/images/iphones.png";
import inkVideo from "../assets/video/ink.mp4";

function ProHero() {
	const Section = styled.section`
		width: 100vw;
		height: 100vh;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: space-between;
		background-color: var(--dark);
		color: var(--white);
	`;

	const VideoContainer = styled.div`
		width: 100vw;
		min-height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;

		video {
			width: 100%;
			height: 100vh;
			object-fit: cover;
			object-position: bottom;
		}
	`;
	const TextContainer = styled.div`
		width: 30%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;
		z-index: 1;
		position: absolute;
		left: 5rem;
	`;

	const Title = styled.h2`
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
	`;

	return (
		<Section>
			<VideoContainer>
				<video
					autoPlay={true}
					muted
					playsInline
				>
					<source
						src={inkVideo}
						type='video/mp4'
					/>
				</video>
			</VideoContainer>
			<TextContainer>
				<Title>
					<span>Always-On display.</span>
					<span>A subtle way to stay in the know.</span>
				</Title>
				<p class='disclaimer'>
					With iOS 16, your personalized Lock Screen is always glanceable, so
					you don’t have to tap to see your favourite widgets like Weather,
					Calendar or Lunar Phase.
				</p>
			</TextContainer>
		</Section>
	);
}

export default ProHero;
