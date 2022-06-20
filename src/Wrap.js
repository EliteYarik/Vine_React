import './Styles/App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function Wrap() {
  return (
    <div className="wrap">
      <Header/>
      <Main/>
    </div>
  );
}

export default Wrap;
