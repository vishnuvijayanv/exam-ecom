import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/products' element={<Product/>}/>

     </Routes>

    </div>
  );
}

export default App;
