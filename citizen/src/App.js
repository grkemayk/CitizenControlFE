import './App.css';
import NavBar from './components/navbar';
import ContainerBody from './components/body'

function App() {
  return (
    <div className="App">
      <div className='row align-items-center'>
      <div className="col-2 componentNavbar"><NavBar/></div>
        <div className="col-9"><ContainerBody/></div>
      </div>
    </div>
  );
}

export default App;
