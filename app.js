  var allEmployees = [];

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

    appendSalary(formData.annualSalary);

    clearForm();
  });



  $('#employeeRemoval').on('submit', function (event) {

    event.preventDefault();

    var employeeRemove = event;

    console.log("Removing " + employeeRemove);

    removeEmp(event);

    clearForm();
  })

});

function appendDom(emp) {
  var $empName = $('<div id = "name" class = "employee"></div>'); // create a div jQuery object
  var $empId = $('<div id = "empId" class = "employee"></div>');
  var $empTitle = $('<div id = "empTitle" class = "employee"></div>');
  var $empSalary = $('<div id = "empSalary" class = "employee"></div>');
  // var $empRemove = $('<button id = "remove"></button>');
  var empObj = {emp};

  var $empName = $empName.append('<p>' + emp.employeeFirstName + ' ' + emp.employeeLastName + '</p>'); // add our employee data
  var $empId = $empId.append('<p>' + emp.employeeIdNumber + '</p>');
  var $empTitle = $empTitle.append('<p>' + emp.jobTitle + '</p>');
  var $empSalary = $empSalary.append('<p>' + emp.annualSalary + '</p>');
  // var $empRemove = $empRemove.append('<p>' + $empRemove + '</p>');

  $('#employeeName').append($empName); // append our div to the DOM
  $('#employeeId').append($empId);
  $('#jobTitle').append($empTitle);
  $('#salary').append($empSalary);
  // $('#remove').append($empRemove);

  allEmployees.push(empObj);

}

function appendSalary(sal) {
  var $salMonth = $('<div id = "salary"></div>');
  var $totalMonthlySalary = 0 + Number($('#monthly').text());

  console.log($totalMonthlySalary);

  var $salMonth = $salMonth.append('<p>' + sal + '</p>');

  $("#monthly").empty();

  $totalMonthlySalary = parseFloat(Number($totalMonthlySalary + (sal/12))).toFixed(2);

  $('#monthly').append($totalMonthlySalary);

}

// function removeEmp(emp) {
//   var employeeToRemove = emp;
//   $("#employeeName p").each(function(i, emp){
//     if($(emp).text()) === ($("#employeeName p").(text)) {
//       $(emp).remove();
//     }
//   });
// }

function clearForm() {
  $('form').find('input[type=text]').val('');
  $('form').find('input[type=number]').val('');
}
