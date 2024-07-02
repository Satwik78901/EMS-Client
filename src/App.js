import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import LoginUser from './components/LoginUser';
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route exact path="/" Component={LoginUser}></Route>
          <Route path="/employees" Component={ListEmployeeComponent}></Route>
          <Route path="/add-employee" Component={AddEmployee}></Route>
          <Route path="/edit-employee/:id" Component={AddEmployee}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
