import axios from 'axios';
const EMPLOYEE_BASE_URI = 'http://localhost:8083/api/v1/employees';

class EmployeeSerivce {
  getAllEmployees() {
    return axios.get(EMPLOYEE_BASE_URI);
  }
  addEmployee(employee) {
    return axios.post(EMPLOYEE_BASE_URI, employee);
  }
  getEmployeeById(employeeID) {
    return axios.get(EMPLOYEE_BASE_URI + '/' + employeeID);
  }
  updateEmployee(employeeId, employee) {
    return axios.put(EMPLOYEE_BASE_URI + '/' + employeeId, employee);
  }
}
export default new EmployeeSerivce();
