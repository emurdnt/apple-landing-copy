import './App.css';
import { GlobalStyles } from './styles/global-styles';
import MainHero from './sections/MainHero';
import ProHero from './sections/ProHero';
import PhoneModel from './sections/PhoneModel';

function App() {
  return (
    <>
      <GlobalStyles/>
       <MainHero/>
       <PhoneModel/>
       <ProHero/>
    </>
  );
}

export default App;
