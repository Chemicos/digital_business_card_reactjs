import './style.css';
import Picture from './components/Picture'
import Info from './components/Info'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="business-card">
      <div className="background-content">
        <Picture />
        <Info />
        <About />
      </div>
      <Footer />
    </div>
  );
}


