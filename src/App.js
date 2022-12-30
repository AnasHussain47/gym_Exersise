import './App.css';
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Navber from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExceciseDetail from './pages/ExerciseDetail';
import GridData from './pages/GridData';





function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m='auto'>
      <Navber/>
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='excercise/:id' element={<ExceciseDetail/>}/>
    <Route path='GridData' element={<GridData/>}/>
    </Routes>
    <Footer/>
    </Box>
    
  );
}

export default App;
