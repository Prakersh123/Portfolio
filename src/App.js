// import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Intro from './Intro';
import About from './About';
import Education from './Education';
import My_skill from './My_skill';
// import Contact from './Contact';
import Footer from './Footer';
import My_projects from './My_projects';
function App() {
  return (
    < >
        <Nav/>
      
        <div style={{position:'relative', paddingBottom:'5px', backgroundColor:'#256D66', transform: 'rotate(-0.8deg)'}}>
        <Intro/>
        </div>
        <About/>
        <Education/>
        <My_skill/>
        {/* <Contact/> */}
        <My_projects/>
      <Footer/>
    </>
  );
}

export default App;
