import React from 'react';
import EmployeeService from '../services/EmployeeService';

const DeleteEmployee = ({ employeeId, fetchEmployees }) => {
  const deleteEmployee = () => {
    EmployeeService.deleteEmployeeById(employeeId)
      .then((response) => {
        fetchEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button className="btn btn-delete" onClick={deleteEmployee}>
      Delete
    </button>
  );
};

export default DeleteEmployee;
