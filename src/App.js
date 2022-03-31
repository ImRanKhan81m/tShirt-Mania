
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import OrderReview from './Components/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='orderReview' element={<OrderReview/>}/>
      </Routes>
    </div>
  );
}

export default App;
