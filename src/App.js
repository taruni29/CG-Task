import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Employes from './components/Employes';
import EmployeeDetails from './components/EmployeeDetails';
import history from './config/history'
import EmployeeOffers from './components/EmployeeOffers';

function App() {
  return (
    <div className="App">
     <Router history={history}>
      <Routes>
        <Route path="/home"  element={ <Employes/> } />
        <Route path="/employee-details"  element={ <EmployeeDetails/> } />
        <Route path="/offers"  element={ <EmployeeOffers/> } />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
