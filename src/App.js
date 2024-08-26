import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Services from './components/services';
import Companies from './components/companies';
import Portfolio from './components/portfolio';
import Testimonal from './components/testimonal';
import Clients from './components/clients';
import Subscribe from './components/subscribe';
import Team from './components/team';
import Contact from './components/contact';
import Blogs from './components/blog';
import Fotter from './components/fotter';
function App() {
  return (
    <div className='p-5 md:p-10 text-gray-800'>
      <Navbar/>
      <Services/>
      <Companies/>
      <Portfolio/>
      <Testimonal/>
      <Clients/>
      <Subscribe/>
      <Team/>
      <Contact/>
      <Blogs/>
      <Fotter/>
    </div>
  );
}

export default App;
