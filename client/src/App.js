import './App.css';
//--------- ^^ css ^^ ----------

// ------------ components -----------
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
// -----------------------------------
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();
  console.log(location.pathname);



  return (
    <div className="App">


      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="*" element={<NotFound/>} />
      </Routes>

    </div>
  );
}

export default App;
