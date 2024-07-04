import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import LoginUser from './components/LoginUser';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/login" Component={LoginUser}></Route>
          <Route path="/employees" Component={ListEmployeeComponent}></Route>
          <Route path="/add-employee" Component={AddEmployee}></Route>
          <Route path="/edit-employee/:id" Component={AddEmployee}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
