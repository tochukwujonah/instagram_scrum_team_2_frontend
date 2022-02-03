import logo from './logo.svg';
import './App.css';
import Header from './Pages/components/header';
import LandingPage from './Pages/Landing';
import Connect from './Pages/components/main/connect';
import FileUploader from './components/FileUploader';




function App() {

  
  return (
    <div>
      {/* <Header/> */}
      <LandingPage/>
      <Connect/>

    </div>
  );
}

export default App;
