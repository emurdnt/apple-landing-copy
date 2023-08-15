import React from "react";
import styled from "styled-components";
import processor from "../assets/images/a15-bionic.jpg";

const Processor = () => {
	const Section = styled.section`
		width: 100vw;
		height: 100vh;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: var(--dark);
		color: var(--white);
	`;

	const Title = styled.h2`
		margin-top: 1rem;
		font-size: var(--fontxl);
		text-align: center;
		margin-bottom: 3rem;
	`;

	const TextContainer = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	`;

	const GridContainer = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		margin: 5rem;
	`;

	const GridItem = styled.p`
		flex: 1 0 21%; /* explanation below */
		margin: 5px;
		height: 100px;
		display: flex;
		flex-direction: column;
	`;

	const Tagline = styled.span`
		font-weight: var(--heavy);
		font-size: var(--fontlg);
	`;

	return (
		<Section>
			<TextContainer>
				<Title>The mastermind behind it all</Title>
				<img
					src={processor}
					alt='A16 Bionic Chip'
					width={300}
				/>
			</TextContainer>
			<GridContainer>
				<GridItem>
					<Tagline>Nearly 16 billion transistors</Tagline>
					<span>for industry-leading speed and efficiency.</span>
				</GridItem>
				<GridItem>
					<span>5-core GPU with </span>
					<Tagline>50% more memory and bandwidth </Tagline>
					<span>for complex graphics in the latest video games </span>
				</GridItem>
				<GridItem>
					<Tagline>Faster 6-core CPU </Tagline>
					<span>handles demanding workloads smoothly and efficiently </span>
				</GridItem>
			</GridContainer>
		</Section>
	);
};

export default Processor;
