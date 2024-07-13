import React from 'react';
import { Link } from 'react-router-dom';

const UpdateEmployee = ({ employeeId }) => {
  return (
    <Link to={`/edit-employee/${employeeId}`} className="btn btn-update">
      Update
    </Link>
  );
};

export default UpdateEmployee;
