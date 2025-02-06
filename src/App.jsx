// Bringing in the required import from 'react-router-dom'
import Header from "./components/Header";
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from "./components/Footer";

// The Outlet component will conditionally swap between the different pages according to the URL
function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
