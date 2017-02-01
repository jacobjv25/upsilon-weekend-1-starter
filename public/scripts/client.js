var app = angular.module('employeeApp', []);

app.controller('EmployeeController', function () {
  console.log('EmployeeController loaded');

  var employee = this;

  employee.allEmployees = [];

  var monthly = 0;
  var totalMonthlySalary = 0;
  employee.monthlySalary = 0;

  employee.addEmployee = function (employeeInfo) {
    employee.allEmployees.push(angular.copy(employeeInfo));
    monthly += employeeInfo.salary;
    totalMonthlySalary = monthly / 12;
    employee.monthlySalary = totalMonthlySalary;
    return employee.monthlySalary;
  };

  employee.deleteEmployee = function (name) {
    console.log(name);
    var deletedEmployee = employee.allEmployees[name];
    employee.monthlySalary -= (deletedEmployee.salary/12);
    employee.allEmployees.splice(name,1);
  }

});
