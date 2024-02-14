
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './component/header/Header';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
    <Header/> 
    
    <Products/>
    </div>
  );
}

export default App;
