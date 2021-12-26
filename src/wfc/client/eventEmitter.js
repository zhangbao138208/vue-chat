const {EventEmitter} = require('events');
class Man extends EventEmitter { }
let man = new Man();
man.on('有钱',()=>{console.log('买车')});
man.on('没钱',()=>{console.log('饿肚子')});

// events
EventEmitter.prototype.eventNames = function(){
    console.log(this._events);
    return Object.keys(this._events); // 将对象转化成数组
}

console.log(man.eventNames()); // 有钱 没钱

const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42

