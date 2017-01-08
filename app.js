$(function () {
  console.log('document is ready');

  $('#submit').on('submit', function (event) {
    console.log('form submitted');

    event.preventDefault();

    var formData = {};
    var formAsArray = $(this).serializeArray();

    formAsArray.forEach(function (input) {
      formData[input.name] = input.value;
    });

    appendDom(formData);

    clearForm();
  });

  $('#employeeRemoval').on('submit', function (event) {

    event.preventDefault();

    var employeeRemove = event;

    console.log("Removing " + employeeRemove);

    clearForm();
  })

});

function appendDom(emp) {
  var $empName = $('<div id = "name" class = "employee"></div>'); // create a div jQuery object
  var $empId = $('<div id = "empId" class = "employee"></div>');
  var $empTitle = $('<div id = "empTitle" class = "employee"></div>');
  var $empSalary = $('<div id = "empSalary" class = "employee"></div>');
  var $totalMonthlySalary = 0;

  var $empName = $empName.append('<p>' + emp.employeeFirstName + ' ' + emp.employeeLastName + '</p>'); // add our employee data
  var $empId = $empId.append('<p>' + emp.employeeIdNumber + '</p>');
  var $empTitle = $empTitle.append('<p>' + emp.jobTitle + '</p>');
  var $empSalary = $empSalary.append('<p>' + emp.annualSalary + '</p>');

  $('#employeeName').append($empName); // append our div to the DOM
  $('#employeeId').append($empId);
  $('#jobTitle').append($empTitle);
  $('#salary').append($empSalary);

  $totalMonthlySalary = Number($totalMonthlySalary + (emp.annualSalary/12));

  $('#monthly').append($totalMonthlySalary);

}

function clearForm() {
  $('form').find('input[type=text]').val('');
  $('form').find('input[type=number]').val('');
}
