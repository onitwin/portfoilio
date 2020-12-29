import './index.scss';
import MainContainer from "./container/MainContainer"
import Navbar from "./navbar/Navbar"

const App=() =>{
  return (
    <div className="App">
    <p>Hello from the app page</p>
    <Navbar/>
    <MainContainer/>
    </div>
  );
}

export default App;
