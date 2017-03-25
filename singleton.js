/**
The Singleton Pattern limits the number of instances of a particular object to just one.
This single instance is called the singleton.
**/

var singleton = (function () {
  var instance
  function createInstance(){
    var object = new Object('I am an instance')
    return object
  }

  function getInstance(){
    if(!instance){
      instance = createInstance()
    }
    return instance
  }

  return {
    getInstance: getInstance
  }
})()

instance1 = singleton.getInstance()
instance2 = singleton.getInstance()

console.log(instance1 === instance2)
