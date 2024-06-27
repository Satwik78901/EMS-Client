import axios from 'axios';
const EMPLOYEE_BASE_URI = 'http://localhost:8084/api/employees/all';

class EmployeeSerivce {
  getAllEmployees() {
    return axios.get(EMPLOYEE_BASE_URI);
  }
  addEmployee(employee) {
    return axios.post(EMPLOYEE_BASE_URI + '/add', employee);
  }
  getEmployeeById(employeeID) {
    return axios.get(EMPLOYEE_BASE_URI + '/' + employeeID);
  }
  updateEmployee(employeeId, employee) {
    return axios.put(EMPLOYEE_BASE_URI + '/' + employeeId, employee);
  }
  deleteEmployeeById(employeeId) {
    return axios.delete(EMPLOYEE_BASE_URI + '/' + employeeId);
  }
}
export default new EmployeeSerivce();
