// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from "./components/About";
import Portfolio from "./components/Portfolio"
import ContactForm from './components/Contact';
function App() {
  return (
    <div>
      <Header>
        
      </Header>
    
      <main>
        
        <About></About>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
