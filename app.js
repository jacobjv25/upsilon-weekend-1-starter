var $totalMonthlySalary = 0;

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

});

function appendDom(emp) {
  var $emp = $('<div class = "employee"></div>');
  var $list = $('<ul></ul>');
  var $empName = $('<li>' + emp.employeeFirstName + ' ' + emp.employeeLastName + '</li>');
  var $id = $('<li>' + emp.employeeIdNumber + '</li>');
  var $title = $('<li>' + emp.jobTitle + '</li>');
  var $salary = $('<li id = "empSalary">' + emp.annualSalary + '</li>');
  var $button = $('<li><button id = "delete">Delete</button></li>');

  $list.append($empName);
  $list.append($id);
  $list.append($title);
  $list.append($salary);
  $list.append($button);
  $emp.append($list);

  $('#employees').append($emp);

}

function appendSalary(sal) {
  var $salMonth = $('<div id = "salary"></div>');
  $totalMonthlySalary = Number($('#monthly').text());

  console.log($totalMonthlySalary);

  var $salMonth = $salMonth.append('<p>' + sal + '</p>');

  $("#monthly").empty();

  $totalMonthlySalary = parseFloat(Number($totalMonthlySalary + (sal/12))).toFixed(2);

  $('#monthly').append($totalMonthlySalary);

}

$(document).on('click', '#delete', function() {

  var empSalary = Number($(this).parent().parent().find('#empSalary').text());
  console.log("Removing " + (empSalary/12));

  $(this).parent().parent().parent().remove();

  $('#monthly').empty();

  $totalMonthlySalary = parseFloat(Number($totalMonthlySalary - (empSalary/12))).toFixed(2);

  $('#monthly').append($totalMonthlySalary);

  clearForm();
});

function clearForm() {
  $('form').find('input[type=text]').val('');
  $('form').find('input[type=number]').val('');
}
