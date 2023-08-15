import React from "react";
import styled from "styled-components";

const Design = () => {
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
		width: 50%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;
		margin-left: 5rem;
		margin-right: 5rem;
	`;

	return (
		<Section>
			<TextContainer>
				<h2>Ceramic Shield</h2>
			</TextContainer>
			<TextContainer>
				<p>Tougher than any glass.</p>
				<p>
					Nano-ceramic crystals — which are harder than most metals — are fused
					into glass for far greater durability. Our dual-ion exchange process
					also protects against nicks, scratches, and everyday wear and tear.
				</p>
			</TextContainer>
		</Section>
	);
};

export default Design;
