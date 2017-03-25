/**
The Builder pattern allows a client to construct a complex object by
specifying the type and content only.
Construction details are hidden from the client entirely.

The most common motivation for using Builder is to simplify client code that creates complex objects.

Builders frequently encapsulate construction of Composite objects (another GoF design pattern)
because the procedures involved are often repetitive and complex.
**/

/** director **/
function shop(){
  this.construct = function(builder){
    builder.step1()
    builder.step2()
    return builder.get()
  }
}


/** builder **/
function CarBuilder(){
  this.car = null
  this.step1 = function(){
    this.car = new Car()
  }
  this.step2 = function(){
    this.car.addParts()
  }
  this.get = function(){
    return this.car
  }
}

/** builder **/
function TruckBuilder(){
  this.truck = null;
  this.step1 = function(){
    this.truck = new Truck()
  }
  this.step2 = function(){
    this.truck.addParts()
  }
  this.get = function(){
    return this.truck
  }
}

function Car(){
  this.doors = 0
  this.addParts = function(){
    this.doors = 2
  }
  this.say = function(){
    console.log('hi  i m  a car')
  }
}

function Truck(){
  this.doors = 0
  this.addParts = function(){
    this.doors = 4
  }
  this.say = function(){
    console.log('I m a truck')
  }
}

var shop = new Shop()
var carBuilder = new CarBuilder()
var truckBuilder = new TruckBuilder()
var car = shop.construct(carBuilder)
var truck = shop.construct(truckBuilder)

car.say()
truck.say()
