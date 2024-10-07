import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MyWork from './components/MyWork';
import PersonalProjects from './components/PersonalProjects';

function App() {
  return (
    <div className="App">
      <Header />
      <MyWork />
      <PersonalProjects />
      <Footer />
    </div>
  );
}

export default App;
