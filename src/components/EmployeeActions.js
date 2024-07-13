import React from 'react';
import { Link } from 'react-router-dom';
import DeleteEmployee from './DeleteEmployee';
import UpdateEmployee from './UpdateEmployee';

const EmployeeActions = ({ employee, fetchEmployees }) => {
  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.email}</td>
      <td>
        <UpdateEmployee employeeId={employee.id} />
        <DeleteEmployee
          employeeId={employee.id}
          fetchEmployees={fetchEmployees}
        />
      </td>
    </tr>
  );
};

export default EmployeeActions;
