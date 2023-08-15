import "./App.css";
import { GlobalStyles } from "./styles/global-styles";
import MainHero from "./sections/MainHero";
import ProHero from "./sections/ProHero";
import PhoneModel from "./sections/PhoneModel";
import Design from "./sections/Design";
import Processor from "./sections/Processor";
import Battery from "./sections/Battery";

const App = () => {
	return (
		<>
			<GlobalStyles />
			<MainHero />
			<PhoneModel />
			<ProHero />
			<Design />
			<Processor />
			<Battery />
		</>
	);
};

export default App;
