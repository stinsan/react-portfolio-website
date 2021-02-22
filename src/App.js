import './App.css';
import Navbar from './components/navbar/navbar';
import TitlePage from './components/title_page/title_page';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Education from './components/education/education';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TitlePage />
      <About />
      <Projects />
      <Education />
    </div>
  );
}

export default App;
