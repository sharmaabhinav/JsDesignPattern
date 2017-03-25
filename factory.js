/** If your application needs more control over the object creation process, consider using a Factory.
This includes scenarios in which the creation process involves
object caching, sharing or re-using of objects,
complex logic, or applications that maintain object and type counts,
and objects that interact with different resources or devices
**/


function Employee(){
  this.name = name
  this.say = function(){
    console.log('I am Employee')
  }
}


function Vendor(){
  this.name = name
  this.say = function(){
    console.log('I am Vendor')
  }
}


function EmployeeFactory(){
  this.create = function(name){
    return new Employee(name)
  }
}


function VendorFactory(){
  this.create = function(name){
    return new Vendor(name)
  }
}


var empFactory = new EmployeeFactory()
var venFactory = new VendorFactory()

var emp1 = empFactory.create('abhinav')
var ven1 = venFactory.create('jifflenow')


emp1.say()
ven1.say()
