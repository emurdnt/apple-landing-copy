import React from "react";
import styled from "styled-components";

const Battery = () => {
	const Section = styled.section`
		width: 100vw;
		height: 100vh;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: space-between;
		// background-color:var(--light);
		// color: var(--white);
	`;

	const TextContainer = styled.div`
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;
	`;

	return (
		<Section id='battery'>
			<TextContainer>
				<h2>Battery</h2>
			</TextContainer>
			<TextContainer>
				<h2>Battery</h2>
				<p>All in, </p>
				<p>all day </p>
			</TextContainer>
		</Section>
	);
};

export default Battery;
