import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import {
	OrbitControls,
	AdaptiveDpr,
	AdaptiveEvents,
	Environment,
} from "@react-three/drei";
import Model from "../assets/3D-Model/Scene";
import { Suspense } from "react";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	z-index: 2;
	background-color: transparent;
	transition: all 0.3s ease;
`;

const PhoneModel = () => {
	return (
		<Container id='phone-model'>
			<Canvas camera={{ fov: 14 }}>
				<ambientLight intensity={1.25} />
				<directionalLight intensity={0.4} />
				<Suspense fallback={null}>
					<Model />
				</Suspense>
				<Environment preset='night' />
				<AdaptiveDpr pixelated />
				<AdaptiveEvents />
			</Canvas>
		</Container>
	);
};

export default PhoneModel;
