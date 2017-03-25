/** Factory Methods are frequently used in applications that manage,
maintain, or manipulate collections of objects that are different
but at the same time have many characteristics (i.e. methods and properties) in common.
An example would be a collection of documents with a mix of Xml documents, Pdf documents,
and Rtf documents. **/

function Factory () {
  this.createEmployee = function(type) {
    var employee
    switch (type) {
      case 'fulltime':
        employee = new FullTime()
        break
      case 'parttime':
        employee = new PartTime()
        break
    }

    employee.type = type
    employee.say = function(){
      console.log('I m ' + type, 'my hourly rate is ' + this.hourly)
    }
    return employee
  }
}

var FullTime = function () {
    this.hourly = "$12";
};

var PartTime = function () {
    this.hourly = "$11";
};

var factory = new Factory();
var fullTimeEmp = factory.createEmployee('fulltime')
var partTimeEmp = factory.createEmployee('parttime')

fullTimeEmp.say()
partTimeEmp.say()
