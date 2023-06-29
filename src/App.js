import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Layout from './components/Layout';
import Authorization from './containers/authorization/Authorization';


function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
 
  return (
    <>
      <Routes location={background || location}>
        <Route path='/' element={<Layout/>}>
           <Route index element={<Home/>}/>
           {/* <Route path='registration' element={<Authorization/>}/> */}
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route path={'registration'} element={<Authorization/>}/>
          <Route path={"login"} element={<Authorization/>}/>
        </Routes>
      )}
    </>
  );
}

export default App;
