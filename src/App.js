import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Intro from './Intro';
import About from './About';
import Education from './Education';
function App() {
  return (
    < >
        <div style={{position:'relative', paddingBottom:'5px', backgroundColor:'#256D66'}}>
        <Nav/>
        <Intro/>
        </div>
        <About/>
        <Education/>

    </>
  );
}

export default App;
