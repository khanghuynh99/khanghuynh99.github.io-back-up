import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Credits from './components/Credits';

import './App.css';
import "./styles/Global.css";

function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <About></About>
      <Experience></Experience>
      <Credits></Credits>
    </div>
  );
}

export default App;
