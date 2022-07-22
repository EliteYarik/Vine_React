import './Styles/App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Collections from './Components/Collections/Collections';
import Entry from './Components/Entry/Entry';
import Footer from './Components/Footer/Footer';

function Wrap() {
  return (
    <div className="wrap">
      <Header/>
      <Main/>
      <Collections/>
      <Entry/>
      <Footer/>
    </div>
  );
}

export default Wrap;
