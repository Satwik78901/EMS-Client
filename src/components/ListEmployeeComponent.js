import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';
import EmployeeActions from './EmployeeActions.js';
import '../ListEmployee.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = () => {
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
    fetchEmployees();
  }, []);

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
            <EmployeeActions
              key={employee.id}
              employee={employee}
              fetchEmployees={fetchEmployees}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
