import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';
import '../ListEmployee.css';
const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const displayEmployee = () => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    displayEmployee();
  }, []);
  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployeeById(employeeId)
      .then((response) => {
        displayEmployee();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="containerTable">
      <h2 className="text-center">List Employees</h2>
      <Link to="/add-employee" className="btn btn-add-employee">
        Add Employee
      </Link>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <Link
                  to={`/edit-employee/${employee.id}`}
                  className="btn btn-update"
                >
                  Update
                </Link>
                <button
                  className="btn btn-delete"
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ListEmployeeComponent;
