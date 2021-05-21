// function leDecorator(target:any, propertyKey: string, descriptor: PropertyDescriptor): any {
//   var oldValue = descriptor.value;

//   descriptor.value = function() {
//     console.log(`Calling "${propertyKey}" with`, arguments,target);
//     let value = oldValue.apply(null, [arguments[1], arguments[0]]);

//     console.log(`Function is executed`);
//     return value + "; This is awesome";
//   };

//   return descriptor;
// }

// class JSMeetup {
//   speaker = "Ruban";
//   @leDecorator
//   welcome(arg1: string, arg2: string) {
//     console.log(`Arguments Received are ${arg1} ${arg2}`);
//     return `${arg1} ${arg2}`;
//   }
// }

// const meetup = new JSMeetup();

// console.log('222', meetup.welcome("World", "Hello"));
// MethodDecorator = <T>(target: Object, key: string, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | Void;
function AwesomeMeetup<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor implements extra {
    speaker: string = "Ragularuban";
    extra = "Tadah!";
  }
}

//@AwesomeMeetup
class JSMeetup {
  public speaker = "Ruban";
  constructor() {
  }
  greet() {
    return "Hi, I'm " + this.speaker;
  }
}

interface extra {
  extra: string;
}

const meetup = new JSMeetup() as JSMeetup & extra;
console.log(meetup.greet());
console.log(meetup.extra);
