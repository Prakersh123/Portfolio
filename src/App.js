// import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Intro from './Intro';
import About from './About';
import Education from './Education';
import Myskill from './Myskill';
import Contact from './Contact';
import Footer from './Footer';
import Myprojects from './Myprojects';
function App() {
  return (
    < >
    
        <Nav/>
      
        <div style={{position:'relative', paddingBottom:'5px', backgroundColor:'#256D66', transform: 'rotate(-0.8deg)'}}>
        <Intro/>
        </div>
        <About/>
        <Education/>
        <Myskill/>
        <Myprojects/>
        <Contact/>

      <Footer/>
    </>
  );
}

export default App;
