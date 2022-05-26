// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from "./components/About";
import Portfolio from "./components/Portfolio"
import ContactForm from './components/Contact';
import Resume from './components/Resume'
function App() {
  
  return (
    <div>
      <Header>
        
      </Header>
    
      <main>
        
        <About></About>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
        <Resume></Resume>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
