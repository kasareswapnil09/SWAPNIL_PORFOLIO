import './App.css';
import Navbar from './components/NavBar/navbar';
import Intro from './components/intro/intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Intro></Intro>
    <Skills></Skills>
    <Works></Works>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  );
}

export default App;
