import axios from 'axios';

const EMPLOYEE_BASE_URI = 'http://localhost:8084/api/employees';

class EmployeeService {
  getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  getAllEmployees() {
    return axios.get(EMPLOYEE_BASE_URI + '/all', this.getAuthHeaders());
  }

  addEmployee(employee) {
    return axios.post(
      EMPLOYEE_BASE_URI + '/add',
      employee,
      this.getAuthHeaders()
    );
  }

  getEmployeeById(employeeID) {
    return axios.get(
      EMPLOYEE_BASE_URI + '/' + employeeID,
      this.getAuthHeaders()
    );
  }

  updateEmployee(employeeId, employee) {
    return axios.put(
      EMPLOYEE_BASE_URI + '/' + employeeId,
      employee,
      this.getAuthHeaders()
    );
  }

  deleteEmployeeById(employeeId) {
    return axios.delete(
      EMPLOYEE_BASE_URI + '/delete/' + employeeId,
      this.getAuthHeaders()
    );
  }
}

export default new EmployeeService();
